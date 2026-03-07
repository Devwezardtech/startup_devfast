import { useEffect, useState } from "react";
import { CheckCircle, Settings, Pencil, Eye, MessageSquare } from "lucide-react";

export default function ClientDashboard() {
  const [client] = useState({
    name: "Juan dela Cruz",
    domain: "sarsari.com",
    orderTime: localStorage.getItem("orderTime"),
  });
  const [progress, setProgress] = useState(4);

  useEffect(() => {
    const orderTime = client.orderTime;
    if (!orderTime) return;

    const updateProgress = () => {
      const now = Date.now();
      const diffHours = (now - orderTime) / (1000 * 60 * 60);

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
    <div className={`flex items-center gap-3 ${progress < step ? "opacity-50" : ""}`}>
      {progress >= step ? (
        <CheckCircle className="text-green-500 w-5 h-5" />
      ) : (
        <div className="w-5 h-5 border rounded-full"></div>
      )}
      <span>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {client.name} 👋</h1>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Account Settings
          </button>
        </div>

        {/* Website Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-500">Your Website</p>
              <p className="text-2xl font-bold">{client.domain}</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                <Pencil className="w-4 h-4" /> Edit Info
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                <Eye className="w-4 h-4" /> Preview
              </button>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="space-y-3 mt-4">
            <Step step={1} label="Payment Confirmed" />
            <Step step={2} label="Website Setup In Progress" />
            <Step step={3} label="Domain Connection" />
            <Step step={4} label="Website Launch" />
          </div>

          {/* Launch Countdown */}
          <div className="mt-6 bg-blue-50 text-blue-700 p-4 rounded-xl text-center">
            Your website will be live within <strong>24 hours</strong>.
          </div>
        </div>

        {/* Quick Actions / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Business Info</p>
              <p className="font-semibold">Edit your business details</p>
            </div>
            <Settings className="w-6 h-6 text-gray-500" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Support</p>
              <p className="font-semibold">Contact us anytime</p>
            </div>
            <MessageSquare className="w-6 h-6 text-gray-500" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Website Analytics</p>
              <p className="font-semibold">View visitors and stats</p>
            </div>
            <Eye className="w-6 h-6 text-gray-500" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Upgrade Plan</p>
              <p className="font-semibold">Unlock more features</p>
            </div>
            <Settings className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}