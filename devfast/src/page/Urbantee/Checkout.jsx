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

  const SALE_DURATION = 24 * 60 * 60 * 1000; // 24h
  const CYCLE_DURATION = 48 * 60 * 60 * 1000; // 48h total

  const timer = setInterval(() => {
    const now = Date.now();

    const cyclePosition = now % CYCLE_DURATION;

    if (cyclePosition < SALE_DURATION) {
      const remaining = SALE_DURATION - cyclePosition;
      setTimeLeft(remaining);
    } else {
      setTimeLeft(0);
    }

  }, 1000);

  return () => clearInterval(timer);

}, [isOpen]);

  if (!isOpen) return null;

  const isOfferActive = timeLeft > 0;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const finalPrice = isOfferActive ? salePrice : originalPrice;

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
        {isOfferActive ? (
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
          <div className="text-center mb-6 text-gray-700 font-semibold">
            Launch offer ended. Regular price applies.
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

          {/* If offer active show original price strike */}
          {isOfferActive && (
            <div className="flex justify-between text-gray-500 line-through">
              <span>Original Price:</span>
              <span>₱{originalPrice.toLocaleString()}</span>
            </div>
          )}

          <div className="flex justify-between text-2xl font-bold text-black">
            <span>Price:</span>
            <span>₱{finalPrice.toLocaleString()}</span>
          </div>

          {isOfferActive && (
            <div className="bg-green-100 text-green-700 text-center py-2 rounded-lg font-semibold">
              You Save ₱{savings.toLocaleString()} 🎉
            </div>
          )}

        </div>
<div className="w-full items-center justify-center flex">
 { /** this is for real payment integration, currently it just redirects to a placeholder link *
  * 
  *  <button
          onClick={() => {
            window.location.href =
              "https://paymongo.link/l/YOUR_LINK_ID";
          }}
          className="w-lg py-4 px-4 rounded-full font-bold transition bg-yellow-400 text-black hover:scale-105"
        >
          
        </button>
  * 
  */}

  <button className="w-lg py-4 px-4 rounded-full font-bold transition bg-yellow-400 text-black hover:scale-105" onClick={
    () => {
      // Simulate payment processing delay
      setTimeout(() => {
        // Clear pending domain from localStorage

        //localStorage.removeItem("pendingDomain");
        
        // Redirect to order success page
        window.location.href = "/project/order-success";
      }, 1500);
    }
  }>
    Pay ₱{finalPrice.toLocaleString()} Securely

  </button>

</div>
        

        <p className="text-xs text-gray-500 mt-4 text-center">
          Payments are processed securely via PayMongo.
        </p>

      </div>
    </div>
  );
}