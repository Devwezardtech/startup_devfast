import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, CheckCircle, Menu, X, MessageCircle, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DeveloperCard from "./developercard";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DevfastLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeveloperModal, setShowDeveloperModal] = useState(false); // modal state
  const navigate = useNavigate();
  const go = (path) => navigate(path);

  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { label: "Home", ref: null },
    { label: "Services", ref: servicesRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
   // { label: "Developer", ref: null }, 
   // { label: "Dashboard", ref: null }
  ];



  const handleScroll = (sec) => {
    if (sec.label === "Developer") {
      setShowDeveloperModal(true);
      setMenuOpen(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }  else if (sec.label === "Dashboard") {
    // Navigate to the dashboard route
    go("/project/dashboard"); // make sure this path matches your route
    setMenuOpen(false);
    setShowDeveloperModal(false);
    } else if (sec.ref) {
  setMenuOpen(false);

  setTimeout(() => {
    sec.ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);

  setShowDeveloperModal(false);
} else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowDeveloperModal(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-b from-sky-50 via-white to-slate-50 font-sans">

      {/* ================= NAVBAR / HAMBURGER ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-8">
          <div
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => handleScroll({ label: "Home" })}
          >
            Devfast
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium text-slate-700">
            {sections.map((sec) => (
              <li
                key={sec.label}
                className="hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => handleScroll(sec)}
              >
                {sec.label}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {menuOpen && (
  <motion.ul
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col gap-4 text-center py-6 text-lg font-medium text-slate-700"
  >
    {sections.map((sec) => (
      <li key={sec.label} onClick={() => handleScroll(sec)}
      className="w-full text-center cursor-pointer py-3 hover:bg-gray-100 rounded-lg transition-colors"
    >
        {sec.label}
      </li>
    ))}
  </motion.ul>
)}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative py-40 px-8 text-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full" />

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative text-3xl md:text-3xl font-semibol tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"
        >
          We Build Websites That Grow Businesses.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="relative mt-8 text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed"
        >
          Fast, professional, and easy-to-manage sites that grow your business and drive revenue.
        </motion.p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:gap-8 md:flex-row">
          <Button
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-800 to-cyan-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 mx-16 md:mx-0 sm:mx-40"
          >
            Start Your Project
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition duration-300 mx-16 md:mx-0 sm:mx-40"
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "Fast", label: "Performance Optimized" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-simebold text-blue-700">{stat.number}</h3>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={servicesRef} className="py-4 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What We Deliver</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Landing Pages", description: "High-converting landing pages designed to capture leads and turn visitors into customers." },
            { title: "Business Websites", description: "Professional websites that build trust and elevate your brand." },
            { title: "Web Applications", description: "Custom systems built for scalability and performance." },
          ].map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Card className="bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <CheckCircle className="mb-5 text-blue-600 w-10 h-10" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} className="py-28 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Sample Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Ecommerce Website / System", img: "/ecommercesite.png", action: () => window.location.href = "https://mus-ecommerce-shop.onrender.com" },
            { title: "LoreCafe", img: "/lorecafe_image/acafe3.png", action: () => go("/project/lorecafe") },
            { title: "Engineer / Contractor", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", action: () => go("/project/engineer") },
            { title: "AutoGalaxy", img: "/image/car3.png", action: () => go("/project/autogalaxy") },
            { title: "UrbanTee", img: "/urbantee/urbantee1.png", action: () => go("/project/urbantee") },
            { title: "DonLeo Fitness", img: "/fitness/gym3.png", action: () => go("/project/donLeoFitness") },
            { title: "PrimeNest Realty", img: "/primenestrealty/house8.png", action: () => go("/project/primeNestRealty") },
          ].map((project) => (
            <motion.div key={project.title} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.4 }}>
              <Card className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500">
                <img src={project.img} alt={project.title} className="h-52 w-full object-cover hover:scale-105 transition-transform duration-500" />
                <CardContent className="p-6 flex flex-col gap-4">
  <h3 className="text-xl font-semibold text-slate-900">
    {project.title}
  </h3>

  {/* BUTTON GROUP */}
  <div className="grid grid-cols-2 gap-3 mt-2">

    {/* INQUIRE BUTTON (Messenger) */}
    <a
      href={`https://m.me/801311679735475?text=${encodeURIComponent(
        `Hi Devfast! I'm interested in this project: ${project.title}`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-3 
      bg-green-800 hover:bg-green-600 text-white rounded-xl font-semibold 
      hover:bg-green-600 transition-all duration-300 
      shadow-md hover:shadow-lg hover:-translate-y-1"
    >
      I want this
    </a>

    {/* VIEW SAMPLE BUTTON */}
    <button
      onClick={project.action}
      className="flex items-center justify-center gap-2 px-4 py-3 
      bg-gradient-to-r from-blue-800 to-cyan-700 
      hover:from-blue-700 hover:to-cyan-600 
      text-white rounded-xl font-semibold 
      shadow-md hover:shadow-lg 
      transition-all duration-300 hover:-translate-y-1"
    >
      View
    </button>

  </div>
</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

<section ref={contactRef} className="bg-gradient-to-r from-sky-50 to-white py-24 px-8">
  <div className="max-w-3xl mx-auto text-center">
    {/* Header */}
   <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
  Talk to Us
</h2>
<p className="text-slate-600 mb-12 text-md md:text-md">
  Got an idea for a website or app? Send us a message and we'll start building it with you.
</p>

    {/* Contact Card */}
    <div className="relative z-10 w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col items-center gap-6">

  {/* TITLE */}
  <div className="text-center space-y-2">
    <p className="text-slate-800 font-semibold text-lg">
      Contact Devfast
    </p>
    <p className="text-slate-500 text-sm">
      Choose your preferred way to reach us
    </p>
  </div>

  {/* BUTTONS */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">

    {/* EMAIL */}
    <div
      onClick={() =>
        window.location.assign(
          "mailto:devfastt@gmail.com?subect=Project Consultation Request&body=Dear Devfast Team,%0D%0A%0D%0AI would like to request a consultation regarding a new development project..."
        )
      }
      className="group flex flex-col items-center justify-center gap-2 px-3 py-2 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-sm cursor-pointer"
    >
      <Mail className="w-6 h-6 group-hover:scale-110 transition" />
      <span className="text-sm">Email</span>
    </div>

    {/* MESSENGER */}
    <a
      href="https://m.me/801311679735475"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-2 px-3 py-2 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition" />
      <span className="text-sm">Messenger</span>
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://instagram.com/devfast_"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-2 px-3 py-2 rounded-2xl font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-sm"
    >
      <Instagram className="w-6 h-6 group-hover:scale-110 transition" />
      <span className="text-sm">Instagram</span>
    </a>

  </div>

  {/* FOOT NOTE */}
  <p className="text-slate-400 text-xs text-center mt-2">
    ⚡ We usually respond within <span className="font-medium text-slate-600">hours</span>
  </p>
</div>
  </div>
</section>

     {showDeveloperModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"> 
    {/* Overlay */}
    
    <div
      classe="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={() => setShowDeveloperModal(false)}
    ></div>

    {/* Modal Content */}
    <div className="relative z-10 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-xl">
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  <DeveloperCard />
</motion.div>
    </div>
  </div>
)}

     <footer className="text-center py-6 text-slate-400 text-sm">
  Devfast © {new Date().getFullYear()} • Developed by Ejemar Maloloy-on
</footer>
    </div>
  );
}