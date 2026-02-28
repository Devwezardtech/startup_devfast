import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* Images */
const menuImages = [
  "/lorecafe_image/aacafe3.png",
  "/lorecafe_image/aacafe2.png",
  "/lorecafe_image/aacafe1.png",
];

const galleryImages = [
  "/lorecafe_image/cafe1.png",
  "/lorecafe_image/cafe2.png",
  "/lorecafe_image/cafe3.png",
  "/lorecafe_image/cafe4.png",
  "/lorecafe_image/cafe5.png",
  "/lorecafe_image/cafe6.png",
  "/lorecafe_image/cafe7.png",
  "/lorecafe_image/cafe8.png",
];

/* Animation Variant */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const LoreCafeLanding = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const services = [
    { title: "Breakfast Specials", desc: "Freshly brewed coffee and pastries." },
    { title: "Lunch Menu", desc: "Delicious sandwiches and local dishes." },
    { title: "Cafe Drinks", desc: "Smoothies, teas, and specialty coffees." },
  ];

  const testimonials = [
    { name: "Juan D.", text: "Best coffee in Tacloban! Cozy place to relax." },
    { name: "Maria S.", text: "Friendly staff and amazing pastries!" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-amber-50 to-white">

      {/* HERO */}
      <motion.section
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 text-white"
        style={{
          backgroundImage: "url('/lorecafe_image/acafe1.png')",
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

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            LoreCafe
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl">
            Your cozy coffee heaven in Tacloban City ☕
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Reserve a Table
          </button>
        </div>
      </motion.section>

      {/* MENU */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <img
                src={menuImages[idx]}
                alt={item.title}
                className="h-48 w-full rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* STORY */}
      <section
        className="relative py-24 px-6 text-white text-center"
        style={{
          backgroundImage: "url('/lorecafe_image/acafe2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-lg leading-relaxed">
            LoreCafe is a family-owned café in the heart of Tacloban City.
            We serve handcrafted coffee, fresh pastries, and a warm space
            where friends and families connect.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={img}
                alt={`Cafe Gallery ${idx}`}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-amber-50 py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact & Location
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <p>📍 Tacloban City, Philippines</p>
            <p>
              ⏰ Mon–Fri: 7AM – 9PM<br />
              Sat–Sun: 8AM – 10PM
            </p>
          </div>

          <iframe
            title="LoreCafe Location"
            src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-2xl border-0 shadow-lg"
          />
        </div>
      </motion.section>

      {/* RESERVATION MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Reserve a Table
            </h3>

            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
              <input type="date" className="w-full border rounded-lg px-4 py-2" />
              <input type="time" className="w-full border rounded-lg px-4 py-2" />
              <button className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-amber-700 text-white py-2 text-center">
        &copy; {new Date().getFullYear()} LoreCafe. All rights reserved.
      </footer>

    </div>
  );
};

export default LoreCafeLanding;