import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CanelsaHotelLanding = () => {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours countdown for booking urgency

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const features = [
    { title: "Luxury Rooms", desc: "Elegant rooms with stunning views." },
    { title: "Gourmet Dining", desc: "Exquisite cuisines from around the world." },
    { title: "Spa & Wellness", desc: "Relax and rejuvenate in style." },
  ];

  const testimonials = [
    {
      name: "Sophia L.",
      text: "Canelsa Hotel made our honeymoon unforgettable. Highly recommend!",
    },
    {
      name: "Michael R.",
      text: "5-star service, luxurious rooms, and amazing amenities.",
    },
  ];

  const faq = [
    {
      question: "Do you offer airport pickup?",
      answer: "Yes, we provide complimentary airport transfers for VIP guests.",
    },
    {
      question: "Are pets allowed?",
      answer: "Yes, pets are welcome in selected rooms with prior notice.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* Hero Section */}
      <motion.section
        className="bg-blue-900 text-white h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Canelsa Hotel</h1>
        <p className="text-lg md:text-2xl mb-6">
          Experience luxury, comfort, and elegance at the heart of the city.
        </p>
        <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
          Book Your Stay Now
        </button>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Reviews</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing / Offer */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Room Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
            <h3 className="text-xl font-bold mb-4">Standard</h3>
            <p className="text-2xl font-bold mb-4">$199/night</p>
            <ul className="mb-6">
              <li>City View Room</li>
              <li>Complimentary Breakfast</li>
              <li>Free Wi-Fi</li>
            </ul>
            <button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
            <h3 className="text-xl font-bold mb-4">Deluxe</h3>
            <p className="text-2xl font-bold mb-4">$299/night</p>
            <ul className="mb-6">
              <li>Ocean View Room</li>
              <li>Breakfast & Dinner Included</li>
              <li>Premium Amenities</li>
            </ul>
            <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
            <h3 className="text-xl font-bold mb-4">Luxury Suite</h3>
            <p className="text-2xl font-bold mb-4">$499/night</p>
            <ul className="mb-6">
              <li>Private Balcony</li>
              <li>All Meals Included</li>
              <li>VIP Services</li>
            </ul>
            <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>
        </div>
      </section>

      

      {/* Lead Capture Form */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Reserve Your Room</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <button className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition">
            Reserve Now
          </button>
        </form>
      </section>

      {/* FAQ / Objections */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <details
              key={idx}
              className="bg-white p-4 rounded-xl shadow-lg cursor-pointer"
            >
              <summary className="font-semibold">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Countdown / Urgency */}
      <section className="bg-blue-900 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Special Offer Ends In:</h3>
        <p className="text-3xl font-bold">{formatTime(timeLeft)}</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Canelsa Hotel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
                <h4 className="hover:text-yellow-400 transition" >Faceboojk</h4>
         <h4 className="hover:text-yellow-400 transition" >LinkedIn</h4>
         <h4 className="hover:text-yellow-400 transition" >Email</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CanelsaHotelLanding;