import React from "react";
import { motion } from "framer-motion";

const EachaCafeLanding = () => {
  const menuItems = [
    { name: "Cappuccino", price: "$4", img: "https://source.unsplash.com/300x200/?coffee" },
    { name: "Croissant", price: "$3", img: "https://source.unsplash.com/300x200/?croissant" },
    { name: "Avocado Toast", price: "$5", img: "https://source.unsplash.com/300x200/?toast" },
    { name: "Latte", price: "$4", img: "https://source.unsplash.com/300x200/?latte" },
    { name: "Chocolate Cake", price: "$6", img: "https://source.unsplash.com/300x200/?cake" },
  ];

  const testimonials = [
    { name: "Anna R.", text: "Amazing food and cozy atmosphere. Highly recommend!" },
    { name: "Luis M.", text: "Eacha is my favorite cafe in Tacloban City." },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-yellow-500 to-red-500 text-white h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Eacha Cafe</h1>
        <p className="text-lg md:text-2xl mb-6">Delicious meals & cozy vibes in Tacloban City</p>
        <button className="bg-white text-yellow-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
          Book a Table
        </button>
      </motion.section>

      {/* MENU */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition transform">
              <img src={item.img} alt={item.name} className="rounded mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-yellow-500 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Eacha Cafe is a family-owned restaurant in the heart of Tacloban City, serving freshly made dishes and drinks with love. Our mission is to make every meal an experience, combining great taste with a cozy ambiance.
        </p>
      </section>

      {/* RESERVATION FORM */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Table</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <input type="date" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <input type="time" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <button className="bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
            Reserve Now
          </button>
        </form>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, idx) => (
            <img key={idx} src={`https://source.unsplash.com/400x300/?cafe,food,${idx}`} alt={`Gallery ${idx}`} className="rounded shadow-lg" />
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Visit Us</h2>
        <iframe
          title="Eacha Cafe Location"
          src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-72 rounded-xl border-0"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Eacha Cafe. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EachaCafeLanding;
