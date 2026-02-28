import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* PROJECT IMAGES – REAL BUILDING WORK */
const projectImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
];


const ProfessionalServicesLanding = () => {
  const services = [
    {
      title: "Structural Engineering",
      desc: "Earthquake-resistant and code-compliant building designs.",
    },
    {
      title: "Construction Management",
      desc: "Full project supervision from ground-breaking to turnover.",
    },
    {
      title: "Engineering Consultation",
      desc: "Technical guidance, cost estimates, and feasibility studies.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos D.",
      text: "Highly professional team. Our commercial building was delivered on schedule.",
    },
    {
      name: "Mark S.",
      text: "Excellent coordination and quality workmanship. Truly reliable engineers.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 bg-slate-50">

      {/* HERO */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="Construction Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/80"></div>

        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >

          <button
  onClick={() => navigate(-1)}
  className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white px-4 py-2 transition"
>
  <ArrowLeft className="w-5 h-5" />
</button>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            John Anderson Engineering
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-slate-200">
            Building the Future with Precision, Safety, and Integrity
          </p>
          <button className="bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Request a Project Quote
          </button>
        </motion.div>
      </motion.section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Engineering Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-slate-100 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Completed Projects
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`Project ${idx}`}
                className="h-64 w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

     {/* WHY CHOOSE US – CLIENT CONVERSION SECTION */}
<section className="max-w-6xl mx-auto px-6 py-24 bg-slate-50">
  <h2 className="text-3xl font-bold text-center mb-16">
    Why Clients Choose John Anderson Engineering
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-xl text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold mb-4">Expert Architects & Engineers</h3>
      <p className="text-gray-600">
        Our team designs structurally sound, visually stunning, and code-compliant buildings.
      </p>
    </motion.div>

    <motion.div
      className="bg-white p-8 rounded-2xl shadow-xl text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold mb-4">On-Time Project Delivery</h3>
      <p className="text-gray-600">
        From groundbreaking to handover, we manage your project efficiently and on schedule.
      </p>
    </motion.div>

    <motion.div
      className="bg-white p-8 rounded-2xl shadow-xl text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-xl font-semibold mb-4">Client-Focused Approach</h3>
      <p className="text-gray-600">
        We tailor our solutions to your vision, budget, and timeline, making the process seamless.
      </p>
    </motion.div>
  </div>

  <div className="text-center mt-16">
    <p className="text-gray-700 mb-6 text-lg">
      Ready to bring your building project to life? Let’s make it happen.
    </p>
    <a
      href="https://m.me/801311679735475"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-400 text-blue-950 px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition"
    >
      Book Your Consultation
    </a>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="bg-blue-950 py-24 px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-16">
          Client Testimonials
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-blue-900 p-8 rounded-2xl shadow-lg"
            >
              <p className="text-slate-200 mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-yellow-400">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL TEAM – MEET THE TEAM */}
<section className="max-w-6xl mx-auto px-6 py-24 bg-white">
  <h2 className="text-3xl font-bold text-center mb-16">
    Meet Our Professional Team
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
    {[
      {
        name: "James Carter",
        position: "Chief Structural Engineer",
        desc: "Leads design strategy for high-rise and commercial projects.",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Sophia Reyes",
        position: "Lead Architect",
        desc: "Transforms client visions into award-winning architectural designs.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Liam Chen",
        position: "Project Manager",
        desc: "Ensures projects are delivered on-time and within budget.",
        img: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        name: "Olivia Martinez",
        position: "Civil Engineer",
        desc: "Expert in site analysis, material selection, and construction planning.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Ethan Patel",
        position: "Mechanical Engineer",
        desc: "Designs mechanical systems for efficiency and durability.",
        img: "https://randomuser.me/api/portraits/men/78.jpg",
      },
      {
        name: "Isabella Nguyen",
        position: "Electrical Engineer",
        desc: "Specializes in sustainable electrical system design.",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Noah Brooks",
        position: "Site Supervisor",
        desc: "Oversees day-to-day operations to ensure quality control.",
        img: "https://randomuser.me/api/portraits/men/90.jpg",
      },
      {
        name: "Emma Torres",
        position: "Interior Designer",
        desc: "Creates functional and aesthetic interior solutions.",
        img: "https://randomuser.me/api/portraits/women/30.jpg",
      },
      {
        name: "Alexander Kim",
        position: "Safety Officer",
        desc: "Maintains strict safety protocols across all construction sites.",
        img: "https://randomuser.me/api/portraits/men/21.jpg",
      },
      {
        name: "Mia Lopez",
        position: "Junior Architect",
        desc: "Supports the team in drafting and 3D modeling projects.",
        img: "https://randomuser.me/api/portraits/women/23.jpg",
      },
    ].map((member, idx) => (
      <motion.div
        key={idx}
        className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden text-center group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-blue-950/10"></div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-yellow-600 font-medium mb-2">{member.position}</p>
          <p className="text-gray-600 text-sm">{member.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="bg-slate-100 py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Construction Project Today
        </h2>
        <p className="text-gray-600 mb-8">
          Residential • Commercial • Industrial Projects
        </p>

        <a
          href="https://m.me/801311679735475"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-800 transition"
        >
          Message Us on Messenger
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} John Anderson Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-yellow-400 cursor-pointer">Facebook</span>
            <span className="hover:text-yellow-400 cursor-pointer">LinkedIn</span>
            <span className="hover:text-yellow-400 cursor-pointer">Email</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalServicesLanding;
