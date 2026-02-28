import React from "react";
import { motion } from "framer-motion";

const TattooBookingLanding = () => {
  const services = [
    { name: "Small Tattoo", price: "$50" },
    { name: "Medium Tattoo", price: "$100" },
    { name: "Large Tattoo", price: "$200" },
    { name: "Custom Design", price: "$300+" },
  ];

  const tattooSamples = [...Array(10)].map(
    (_, i) => `https://source.unsplash.com/400x300/?tattoo,${i}`
  );

  const testimonials = [
    { name: "Jake P.", text: "Amazing artistry! The tattoo turned out perfect." },
    { name: "Mia L.", text: "Friendly staff and professional service." },
    { name: "Carlos D.", text: "Best tattoo studio in Tacloban City!" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">InkMaster Tattoo Studio</h1>
        <p className="text-lg md:text-2xl mb-6">Top 10 Tattoo Designs & Custom Artwork</p>
        <button className="bg-red-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-400 transition">
          Book Now
        </button>
      </motion.section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="text-red-500 font-bold mt-2">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TATTOO GALLERY */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Top 10 Tattoo Samples</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {tattooSamples.map((img, idx) => (
            <img key={idx} src={img} alt={`Tattoo Sample ${idx+1}`} className="rounded shadow-lg" />
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="max-w-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Session</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Select Service</option>
            {services.map((s, idx) => <option key={idx}>{s.name}</option>)}
          </select>
          <input type="date" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <button className="bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-400 transition">
            Book Now
          </button>
        </form>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Visit Us</h2>
        <iframe
          title="InkMaster Studio"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-72 rounded-xl border-0"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 InkMaster Tattoo Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TattooBookingLanding;
