import React from "react";
import { motion } from "framer-motion";

const landingsample = () => {
  const servicesData = [
    { title: "Web Development", description: "Modern websites that convert." },
    { title: "UI/UX Design", description: "Clean and user-friendly designs." },
    { title: "SEO Optimization", description: "Get found on search engines." },
  ];

  const teamData = [
    { name: "Jerico Salenga", role: "Founder & CEO", img: "/team/jerico.jpg" },
    { name: "Maria Lopez", role: "UI/UX Designer", img: "/team/maria.jpg" },
    { name: "John Doe", role: "Fullstack Developer", img: "/team/john.jpg" },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      company: "TechCorp",
      text: "DevTact helped our company modernize our website. Fantastic team!",
    },
    {
      name: "Mark Stevens",
      company: "Foodies Inc.",
      text: "Our online presence has grown massively since we worked with them!",
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Business Online
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Showcase your company, services, and team professionally.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </motion.section>

      {/* About Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          DevTact is a startup committed to helping businesses grow online. We
          create clean, modern, and conversion-focused websites that elevate
          your brand and engage your customers.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <p className="text-gray-700 mb-4">"{item.text}"</p>
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-gray-500">{item.company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg grid gap-6 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={4}
          />
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        <iframe
          title="Company Map"
          src="https://maps.google.com/maps?q=manila&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-xl border-0"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} DevTact. All rights reserved.</p>
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

export default landingsample;
