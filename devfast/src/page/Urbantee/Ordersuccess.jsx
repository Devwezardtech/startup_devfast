import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const [domain, setDomain] = useState("");
  const [progress, setProgress] = useState(1);
   const navigate = useNavigate();

  useEffect(() => {
  const savedDomain = localStorage.getItem("pendingDomain");
  if (savedDomain) {
    setDomain(savedDomain);
  }

  const orderTime = localStorage.getItem("orderTime");
  if (!orderTime) return;

  const updateProgress = () => {
    const now = Date.now();
    const diffHours = (now - orderTime) / (1000 * 60 * 60);

    if (diffHours >= 20) setProgress(4);
    else if (diffHours >= 4) setProgress(3);
    else if (diffHours >= 2) setProgress(2);
    else setProgress(1);
  };

  // run immediately
  updateProgress();

  // then keep updating
  const timer = setInterval(updateProgress, 5000);

  return () => clearInterval(timer);

}, []);

  const Step = ({ step, label }) => (
    <div className={`flex items-center gap-3 ${progress < step ? "opacity-50" : ""}`}>
      {progress >= step ? (
        <CheckCircle className="text-green-500 w-5 h-5"/>
      ) : (
        <div className="w-5 h-5 border rounded-full"></div>
      )}
      <span>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="bg-white max-w-xl w-full p-10 rounded-3xl shadow-xl text-center">

        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-500 mb-6">
          Your website order has been received.
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <p className="text-gray-600 text-sm">
            Your website will be available at
          </p>

          <p className="text-xl font-bold mt-1">
            https://{domain}
          </p>
        </div>

        {/* Dynamic Steps */}
        <div className="text-left space-y-3 mb-6">

          <Step step={1} label="Payment Confirmed" />
          <Step step={2} label="Website Setup In Progress" />
          <Step step={3} label="Domain Connection" />
          <Step step={4} label="Website Launch" />

        </div>

        <div className="bg-blue-50 text-blue-700 p-4 rounded-xl mb-6">
          Your website will be live within <strong>24 hours</strong>.
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition" onClick={() => navigate("/project/dashboard")}>
          View Order Status
        </button>

      </div>

    </div>
  );
}