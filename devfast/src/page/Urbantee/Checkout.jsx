import { useEffect, useState } from "react";

export default function Checkout({ isOpen, onClose }) {
  const [domain, setDomain] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const originalPrice = 24999;
  const salePrice = 5999;
  const savings = originalPrice - salePrice;

  useEffect(() => {
    if (!isOpen) return;

    const savedDomain = localStorage.getItem("pendingDomain");
    if (savedDomain) {
      setDomain(savedDomain);
    }

    let deadline = localStorage.getItem("offerDeadline");

    if (!deadline) {
      deadline = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("offerDeadline", deadline);
    } else {
      deadline = parseInt(deadline);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 mx-8 md:mx-0">
      <div className="relative bg-white p-10 rounded-3xl w-full max-w-lg shadow-2xl animate-fadeIn">

        {/* BACK ARROW */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center 
                     rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          ←
        </button>

        <h1 className="text-3xl font-bold mb-2 text-center">
          Secure Checkout
        </h1>

        {/* COUNTDOWN */}
        {timeLeft > 0 ? (
          <div className="text-center mb-6">
            <p className="text-blue-400 font-semibold mb-2">
              Limited Time Launch Offer
            </p>
            <div className="flex justify-center gap-2 text-xl font-mono text-red-500">
              <div>{String(hours).padStart(2, "0")}h</div>
              <div>{String(minutes).padStart(2, "0")}m</div>
              <div>{String(seconds).padStart(2, "0")}s</div>
            </div>
          </div>
        ) : (
          <div className="text-center mb-6 text-red-600 font-bold">
            Offer Expired
          </div>
        )}

        {/* SUMMARY */}
        <div className="space-y-4 mb-8">

          <div className="flex justify-between">
            <span className="text-gray-600">Your Website:</span>
            <span className="font-semibold">https://{domain}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-semibold">Website Publishing</span>
          </div>

          <div className="flex justify-between text-gray-500 line-through">
            <span>Original Price:</span>
            <span>₱{originalPrice.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-2xl font-bold text-black">
            <span>Today’s Price:</span>
            <span>₱{salePrice.toLocaleString()}</span>
          </div>

          <div className="bg-green-100 text-green-700 text-center py-2 rounded-lg font-semibold">
            You Save ₱{savings.toLocaleString()} 🎉
          </div>

        </div>

        <button
          disabled={timeLeft <= 0}
          onClick={() => {
            window.location.href =
              "https://paymongo.link/l/YOUR_LINK_ID";
          }}
          className={`w-full py-4 rounded-full font-bold transition ${
            timeLeft > 0
              ? "bg-yellow-400 text-black hover:scale-105"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {timeLeft > 0 ? "Pay ₱5,999 Securely" : "Offer Expired"}
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Payments are processed securely via PayMongo.
        </p>

      </div>
    </div>
  );
}