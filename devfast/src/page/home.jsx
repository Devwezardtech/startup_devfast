import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, CheckCircle, Menu, X, MessageCircle } from "lucide-react";
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
    { label: "Developer", ref: null }, 
  ];

  const handleScroll = (sec) => {
    if (sec.label === "Developer") {
      setShowDeveloperModal(true);
      setMenuOpen(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (sec.ref) {
      sec.ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setShowDeveloperModal(false); // hide developer when scrolling to other sections
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
          className="relative text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"
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

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 mx-16 md:mx-0"
          >
            Start Your Project
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              projectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition duration-300 mx-16 md:mx-0"
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { number: "20+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "Fast", label: "Performance Optimized" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-extrabold text-blue-600">{stat.number}</h3>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={servicesRef} className="py-28 px-8 max-w-6xl mx-auto">
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
            { title: "UrbanTee", img: "/urbantee/urbantee1.png", action: () => go("/project/urbanTee") },
            { title: "DonLeo Fitness", img: "/fitness/gym3.png", action: () => go("/project/donLeoFitness") },
            { title: "PrimeNest Realty", img: "/primenestrealty/house8.png", action: () => go("/project/primeNestRealty") },
          ].map((project) => (
            <motion.div key={project.title} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.4 }}>
              <Card className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={project.img} alt={project.title} className="h-52 w-full object-cover hover:scale-105 transition-transform duration-500" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <div className="mx-6 md:mx-8">
                    <Button onClick={project.action} className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                    View This Sample
                  </Button>
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
   <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
  Talk to Us
</h2>
<p className="text-slate-600 mb-12 text-lg md:text-xl">
  Got an idea for a website or app? Send us a message and we'll start building it with you.
</p>

    {/* Contact Card */}
    <div className="relative z-10 w-full max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col items-center gap-6">
      <p className="text-slate-700 text-center font-medium">
        Choose your preferred way to contact:
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div
          onClick={() =>
              window.location.assign(
  "mailto:devfastt@gmail.com?subject=Project Consultation Request&body=Dear Devfast Team,%0D%0A%0D%0AI would like to request a consultation regarding a new development project.%0D%0A%0D%0APlease review the project details below:%0D%0A%0D%0A Full Name:%0D%0A Company / Business Name:%0D%0A Contact Email and Phone Number:%0D%0A Project Type (Business Website, E-commerce, Web Application, etc.):%0D%0A Project Overview:%0D%0A Primary Business Goals:%0D%0A Target Launch Timeline:%0D%0A Estimated Budget Range:%0D%0A%0D%0AWe look forward to reviewing your requirements and providing a tailored proposal.%0D%0A%0D%0AKind regards,"
)
            }
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 mx-8 md:mx-0 py-4 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-blue-600 transition transform hover:-translate-y-1 shadow-md"
        >
          <Mail className="w-5 h-5" /> Email
        </div>
        <a
  href="https://m.me/801311679735475?text=Dear%20Devfast%20Team,%0A%0AI%20would%20like%20to%20request%20a%20consultation%20regarding%20a%20new%20development%20project.%0A%0APlease%20find%20the%20project%20details%20below:%0A%0A1.%20Full%20Name:%0A2.%20Company%20/%20Business%20Name:%0A3.%20Contact%20Email%20and%20Phone%20Number:%0A4.%20Project%20Type%20(Business%20Website,%20E-commerce,%20Web%20Application,%20etc.):%0A5.%20Project%20Overview:%0A6.%20Primary%20Business%20Goals:%0A7.%20Target%20Launch%20Timeline:%0A8.%20Estimated%20Budget%20Range:%0A%0AI%20look%20forward%20to%20your%20response."
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 mx-8 md:mx-0 bg-green-500 text-white rounded-2xl font-semibold hover:bg-green-600 transition transform hover:-translate-y-1 shadow-md"
>
  <MessageCircle className="w-5 h-5" /> Messenger
</a>
      </div>

      {/* Optional small note */}
      <p className="text-slate-400 text-sm mt-4">
        We'll respond within 59 minutes to 24 hours.
      </p>
    </div>
  </div>
</section>

     {showDeveloperModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"> 
    {/* Overlay */}
    
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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

      <footer className="text-center py-6 text-slate-400 text-sm tracking-wide">
        © {new Date().getFullYear()} Devfast. Built fast. Built right.
      </footer>
    </div>
  );
}