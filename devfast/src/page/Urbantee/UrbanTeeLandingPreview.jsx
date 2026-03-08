import React from "react";
import { motion } from "framer-motion";
import DescriptionWithToggle from "../../components/ui/DescriptionWithToggle";

const UrbanTeeLandingPreview = ({ data }) => {
  const businessData = data;

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden scroll-smooth">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${businessData.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.2em] mb-6">
            {businessData.businessName}
          </h1>
          <p className="text-2xl text-gray-300 mb-10 max-w-xl">{businessData.tagline}</p>
        </motion.div>
      </section>

      {/* COLLECTION */}
      <section className="py-32 px-6">
        <h2 className="text-5xl font-bold text-center mb-24 tracking-widest">
          {businessData.collection}
        </h2>

        <div className="max-w-7xl mx-auto space-y-40">
          {businessData.products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[400px] h-[500px] object-cover rounded-3xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h3>
                <DescriptionWithToggle text={product.desc} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      {businessData.featureSections.map((section) => (
        <section
          key={section.id}
          className={`h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left`}
          style={{
            backgroundImage: `url(${section.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="bg-black/60 w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4">{section.title}</h2>
              <p className="text-gray-300 text-lg md:text-xl">{section.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-4 text-center text-gray-500">
        © {new Date().getFullYear()} {businessData.footerName}. All Rights Reserved.
      </footer>
    </div>
  );
};

export default UrbanTeeLandingPreview;