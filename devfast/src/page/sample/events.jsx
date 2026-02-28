import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const speakers = [
  { name: "Alexander Reyes", title: "Business Growth Expert", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Elena Cruz", title: "Marketing Strategist", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Tan", title: "Startup Mentor", img: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Sophia Lim", title: "Digital Marketing Guru", img: "https://randomuser.me/api/portraits/women/65.jpg" },
];

const benefits = [
  "Hands-on Business Growth Workshops",
  "1-on-1 Mentorship Opportunities",
  "Live Case Studies from 7-Figure Entrepreneurs",
  "High-Level Networking",
  "Actionable Scaling Frameworks",
];

const testimonials = [
  { name: "David P.", text: "This event increased my revenue by 30%." },
  { name: "Sophia M.", text: "Practical strategies I applied immediately." },
  { name: "James L.", text: "The mentorship sessions were priceless." },
];

const faqs = [
  { q: "Where is the event?", a: "Tacloban City Convention Center." },
  { q: "Who should attend?", a: "Entrepreneurs, founders, marketers." },
  { q: "Dress code?", a: "Business casual." },
];

const BusinessEventLanding = () => {
  const [open, setOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  };

  return (
    <div className="bg-black text-white font-sans scroll-smooth">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Business Growth Mastery 2026
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scale smarter. Network stronger. Grow faster.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl shadow-2xl hover:scale-105 transition"
          >
            Secure Your Seat
          </button>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Event Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:scale-105 transition border border-white/10">
              {b}
            </div>
          ))}
        </div>
      </motion.section>

      {/* SPEAKERS */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Meet The Speakers</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {speakers.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl text-center border border-white/10"
            >
              <img src={s.img} alt={s.name} className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-yellow-400" />
              <h3 className="font-bold text-xl">{s.name}</h3>
              <p className="text-gray-300">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Attendees Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <p className="mb-4 text-gray-300">"{t.text}"</p>
              <h4 className="font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        {faqs.map((f, idx) => (
          <div
            key={idx}
            className="border-b border-white/20 py-4 cursor-pointer"
            onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
          >
            <h3 className="flex justify-between font-semibold">
              {f.q} <span>{activeFAQ === idx ? "-" : "+"}</span>
            </h3>
            {activeFAQ === idx && <p className="mt-2 text-gray-400">{f.a}</p>}
          </div>
        ))}
      </section>

      {/* COUNTDOWN */}
      <section className="py-4 text-center bg-yellow-400 text-black">
        <h3 className="text-3xl font-bold mb-4">Event Starts In:</h3>
        <p className="text-4xl font-extrabold">{formatTime(timeLeft)}</p>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-3xl p-10 w-full max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Reserve Your Spot
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
              <button className="w-full bg-yellow-400 py-3 rounded-lg font-bold">
                Confirm Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center text-gray-400">
        © {new Date().getFullYear()} Business Growth Mastery. All rights reserved.
      </footer>

    </div>
  );
};

export default BusinessEventLanding;