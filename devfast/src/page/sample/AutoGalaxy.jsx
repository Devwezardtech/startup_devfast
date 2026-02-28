import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cars = [
  { name: "Toyota Fortuner 4x2 G AT", price: "₱2,030,000", img: "/image/car1.png" },
  { name: "Toyota Hilux Conquest 2.8 4x4", price: "₱1,963,000", img: "/image/car2.png" },
  { name: "Toyota Fortuner 2.8 4x4 LTD", price: "₱2,656,000", img: "/image/car3.png" },
  { name: "Toyota Corolla Cross 1.8 G CVT", price: "₱1,300,000", img: "/image/car4.png" },
  { name: "Isuzu D-Max 3.0 LS-E 4x4 AT", price: "₱1,890,000", img: "/image/car5.png" },
  { name: "Toyota Yaris Cross", price: "₱1,690,000", img: "/image/car6.png" },
];

const AutoGalaxyPremiumLanding = () => {
const navigate = useNavigate();

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden">

      {/* HERO – CINEMATIC PARALLAX */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: 'url("/image/car3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <button
  onClick={() => navigate(-1)}
  className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white px-4 py-2 transition"
>
  <ArrowLeft className="w-5 h-5" />
</button>
         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide">
            AutoGalaxy Toyota
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Engineering Performance. Redefined Luxury.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl">
            Explore Collection
          </button>
        </div>
      </motion.section>

      {/* COLLECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Toyota Collection 2026
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3">{car.name}</h3>
                <p className="text-yellow-400 font-bold text-lg mb-6">
                  {car.price}
                </p>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PARALLAX FEATURE SECTION */}
      <section
        className="relative py-36 text-center"
        style={{
          backgroundImage: 'url("/image/car2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Power Meets Precision
          </h2>
          <p className="text-gray-300 text-lg">
            Built for performance. Designed for dominance.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-28 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <h2 className="text-4xl font-bold text-center mb-20">
          What Our Clients Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
            <p className="text-gray-300 mb-6 text-lg">
              “The Toyota completely transformed my driving experience.
              Exceptional performance.”
            </p>
            <h4 className="font-semibold text-yellow-400">
              — Daniel R.
            </h4>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
            <p className="text-gray-300 mb-6 text-lg">
              “AutoGalaxy delivered a seamless premium buying experience.”
            </p>
            <h4 className="font-semibold text-yellow-400">
              — Sophia L.
            </h4>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-28 px-6 bg-black"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Pre-Order Your Toyota
        </h2>

        <form className="max-w-xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white/10 border border-white/20 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white/10 border border-white/20 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-white/10 border border-white/20 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button className="bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Submit Inquiry
          </button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-10 text-center text-gray-400">
        © 2026 AutoGalaxy Toyota. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AutoGalaxyPremiumLanding;