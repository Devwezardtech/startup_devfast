import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DonLeoFitnessLanding = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const programs = [
    { name: "Weight Loss Program", duration: "8 weeks", price: "$299" },
    { name: "Muscle Gain Program", duration: "12 weeks", price: "$399" },
    { name: "Personal Training Session", duration: "1 session", price: "$99" },
  ];

  const gymPhotos = [...Array(15)].map((_, i) => `/fitness/gym${i + 1}.png`);

  const stats = [
    { label: "Clients Trained", value: 1200 },
    { label: "Programs Offered", value: 15 },
    { label: "Years Experience", value: 8 },
  ];

  const blobs = [
    { size: 72, top: "10%", left: "5%", color: "from-pink-400 via-purple-500 to-indigo-500", duration: 20 },
    { size: 56, top: "70%", left: "80%", color: "from-yellow-400 via-red-400 to-pink-500", duration: 25 },
    { size: 80, top: "40%", left: "50%", color: "from-green-400 via-teal-500 to-blue-500", duration: 30 },
    { size: 64, top: "85%", left: "20%", color: "from-orange-400 via-red-500 to-pink-400", duration: 28 },
  ];

  return (
    <div className={`${dark ? "dark bg-[#0f172a] text-gray-100" : "bg-gray-200 text-gray-900"} scroll-smooth font-sans transition-all duration-700`}>

   <nav className="fixed top-6 right-4 md:left-1/2 md:-translate-x-1/2 z-50 backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/30 dark:border-white/10 px-6 md:px-10 py-1 rounded-full shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-between md:justify-center transition">

  {/* Mobile Right Side: Hamburger + Dark Mode */}
  <div className="flex items-center gap-4 md:hidden">
    {/* Hamburger */}
    <button
      onClick={() => setMenuOpen(prev => !prev)}
      className="flex flex-col justify-between w-8 h-6 border-2 border-gray-500 dark:border-gray-300 p-1 rounded-md"
    >
      <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white transition duration-300 ${menuOpen ? "opacity-0" : ""}`} />
      <span className={`block h-0.5 w-full bg-gray-900 dark:bg-white transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>

    {/* Dark Mode Toggle */}
    <button onClick={() => setDark(!dark)} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-110 transition">
      {dark ? "☀️" : "🌙"}
    </button>
  </div>

  {/* Desktop Menu Centered */}
  <div className="hidden md:flex gap-10 items-center">
    <a href="#hero" className="hover:opacity-70">Home</a>
    <a href="#programs" className="hover:opacity-70">Programs</a>
    <a href="#gallery" className="hover:opacity-70">Gallery</a>
    <a href="#contact" className="hover:opacity-70">Contact</a>
    {/* Dark Mode Toggle */}
    <button onClick={() => setDark(!dark)} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:scale-110 transition">
      {dark ? "☀️" : "🌙"}
    </button>
  </div>

  {/* Mobile Menu Overlay */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
    className={`absolute top-20 right-4 w-11/12 text-white max-w-xs bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl flex flex-col gap-6 p-6 md:hidden z-40 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
  >
    <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:opacity-70 text-lg font-semibold">Home</a>
    <a href="#programs" onClick={() => setMenuOpen(false)} className="hover:opacity-70 text-lg font-semibold">Programs</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:opacity-70 text-lg font-semibold">Gallery</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:opacity-70 text-lg font-semibold">Contact</a>
  </motion.div>
</nav>

      {/* Floating Gradient Blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r ${b.color} opacity-30 blur-3xl`}
          style={{ width: b.size, height: b.size, top: b.top, left: b.left, zIndex: -1 }}
          animate={{ y: ["0%", "10%", "0%"], x: ["0%", "5%", "0%"] }}
          transition={{ repeat: Infinity, duration: b.duration, ease: "easeInOut" }}
        />
      ))}

      {/* HERO */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${gymPhotos[11]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <button
          onClick={() => navigate(-1)}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white px-4 py-2 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">DonLeo Fitness</h1>
          <p className="text-lg md:text-2xl mb-6 text-white drop-shadow-md">Transform Your Body & Mind</p>
          <a href="#contact" className="bg-yellow-400 text-green-800 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-yellow-300 transition">
            Book Coaching
          </a>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/90 dark:bg-[#111827]/80 rounded-3xl p-8 shadow-2xl dark:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          >
            <p className="text-4xl font-bold mb-2 text-blue-300">{s.value}+</p>
            <p className="font-semibold">{s.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PROGRAMS */}
      <motion.section
        id="programs"
        className="max-w-6xl mx-auto px-6 py-16 bg-cover bg-center rounded-3xl relative"
        style={{ backgroundImage: `url(${gymPhotos[12]})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <h2 className="text-4xl font-bold text-center mb-12 relative z-10 text-white drop-shadow-lg">Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 dark:bg-[#111827]/80 p-6 rounded-3xl shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] text-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-200">{p.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{p.duration}</p>
              <p className="text-green-700 font-bold mt-2">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GALLERY */}
      <motion.section
        id="gallery"
        className="max-w-6xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Visit Now</h2>
        <div className="grid md:grid-cols-5 gap-4 mx-12">
          {gymPhotos.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Gym ${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
            />
          ))}
        </div>
      </motion.section>

      {/* CONTACT + BOOKING */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contact & Book Coaching</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.form
            className="bg-white/90 dark:bg-[#111827]/80 p-8 rounded-3xl shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] grid gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input type="text" placeholder="Full Name" className="border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
            <input type="email" placeholder="Email Address" className="border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
            <input type="tel" placeholder="Phone Number" className="border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
            <select className="border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition text-gray-700">
              <option>Select Program</option>
              {programs.map((p, i) => (<option key={i}>{p.name}</option>))}
            </select>
            <input type="date" className="text-gray-700 border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
            <input type="time" className="text-gray-700 border border-gray-300 dark:border-gray-500 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
            <button className="bg-green-800 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-700 transition">Book Coaching</button>
          </motion.form>

          {/* Map & Contact Info */}
          <div className="flex flex-col gap-6">
            <iframe
              title="DonLeo Fitness Location"
              src="https://maps.google.com/maps?q=tacloban%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-80 rounded-2xl border-0 shadow-xl"
            ></iframe>
            <div className="bg-white/90 dark:bg-[#111827]/80 p-6 rounded-3xl shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] text-gray-700 dark:text-gray-300">
              <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
              <p>Email: info@donleofitness.com</p>
              <p>Phone: +63 912 345 6789</p>
              <p>Address: Tacloban City, Leyte, Philippines</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-4 text-center shadow-inner">
        <p>© 2026 DonLeo Fitness. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default DonLeoFitnessLanding;