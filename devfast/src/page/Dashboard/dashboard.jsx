import { useEffect, useState } from "react";
import { CheckCircle, Settings, Pencil, Eye, MessageSquare } from "lucide-react";

export default function ClientDashboard() {
  const [client, setClient] = useState({
    name: "Juan dela Cruz",
    domain: "",
    orderTime: null,
  });
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    // Load domain and orderTime from localStorage
    const savedDomain = localStorage.getItem("pendingDomain");
    const savedOrderTime = localStorage.getItem("orderTime");

    setClient({
      name: "Juan dela Cruz", // or load from API in future
      domain: savedDomain || "",
      orderTime: savedOrderTime || null,
    });
  }, []);

  useEffect(() => {
    if (!client.orderTime) return;

    const updateProgress = () => {
      const now = Date.now();
      const diffHours = (now - client.orderTime) / (1000 * 60 * 60);

      if (diffHours >= 20) setProgress(4);
      else if (diffHours >= 4) setProgress(3);
      else if (diffHours >= 2) setProgress(2);
      else setProgress(1);
    };

    updateProgress();
    const timer = setInterval(updateProgress, 5000);
    return () => clearInterval(timer);
  }, [client.orderTime]);

  const Step = ({ step, label }) => (
    <div
      className={`flex items-center gap-3 p-2 rounded-xl transition ${
        progress < step ? "opacity-50 hover:bg-gray-50" : "bg-green-50"
      }`}
    >
      {progress >= step ? (
        <CheckCircle className="text-green-500 w-6 h-6 animate-bounce" />
      ) : (
        <div className="w-6 h-6 border-2 border-gray-300 rounded-full animate-pulse"></div>
      )}
      <span className="font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Welcome, {client.name} </h1>
            <p className="text-gray-600">Here’s your website status & quick actions dashboard</p>
          </div>
          <button className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
            Account Settings
          </button>
        </div>

        {/* Website Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
  {/* Left side: Website Card */}
  <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <p className="text-gray-500">Your Website</p>
        <p className="text-3xl font-extrabold">{client.domain}</p>
      </div>
      <div className="flex gap-3 mt-4 md:mt-0">
        <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full hover:bg-gray-200 transition font-semibold">
          <Pencil className="w-5 h-5" /> Edit Info
        </button>
        <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full hover:bg-gray-200 transition font-semibold">
          <Eye className="w-5 h-5" /> Preview
        </button>
      </div>
    </div>

    {/* Progress Timeline */}
    <div className="space-y-4 mt-6">
      <Step step={1} label="Payment Confirmed" />
      <Step step={2} label="Website Setup In Progress" />
      <Step step={3} label="Domain Connection" />
      <Step step={4} label="Website Launch" />
    </div>
  </div>

  {/* Right side: Quick Actions / Cards */}
  <div className="lg:col-span-1 grid grid-cols-1 gap-6">
    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition">
      <div className="flex items-center gap-3 mb-3">
        <Settings className="w-6 h-6 text-gray-500" />
        <p className="font-semibold text-gray-700">Business Info</p>
      </div>
      <p className="text-gray-500">Edit business details and logo</p>
    </div>

    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition">
      <div className="flex items-center gap-3 mb-3">
        <MessageSquare className="w-6 h-6 text-gray-500" />
        <p className="font-semibold text-gray-700">Support</p>
      </div>
      <p className="text-gray-500">Contact our team anytime</p>
    </div>

    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition">
      <div className="flex items-center gap-3 mb-3">
        <Settings className="w-6 h-6 text-gray-500" />
        <p className="font-semibold text-gray-700">Upgrade Plan</p>
      </div>
      <p className="text-gray-500">Unlock advanced features & templates</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}