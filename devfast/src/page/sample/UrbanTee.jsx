import React, { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";



const DescriptionWithToggle = ({ text, limit = 180 }) => {
  const [showFull, setShowFull] = useState(false);
  const isLong = text.length > limit;
 

 

  return (
    <div className="text-gray-400 mb-4">
      <p>
        {showFull || !isLong ? text : text.slice(0, limit) + "..."}
      </p>
      {isLong && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-yellow-400 font-semibold mt-1 hover:underline"
        >
          {showFull ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

const UrbanTeeLanding = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

   const navigate = useNavigate();

  const collectionRef = useRef(null);

   const [devfastModal, setDevfastModal] = useState(false);
   const [isPreviewMode, setIsPreviewMode] = useState(false);
   const [isEditingMode, setIsEditingMode] = useState(false);
const [editingField, setEditingField] = useState(null);
const [tempValue, setTempValue] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setDevfastModal(true);
  }, 10000); // 10 seconds

  return () => clearTimeout(timer);
}, []);

const [businessData, setBusinessData] = useState({
  businessName: "URBANTEE",
  tagline: "Minimal. Timeless. Elevated.",
  heroImage: "/urbantee/urban16.png",
  collection: "THE COLLECTION",
});


  const scrollToCollection = () => {
  collectionRef.current?.scrollIntoView({ behavior: "smooth" });
};
  

  const products = [
    { id: 1, name: "UA Premium Hoodie V3.0 - Midnight Black", front: "/urbantee/urban1.png", back: "/urbantee/urban2.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print" },
    { id: 2, name: "UA Premium Hoodie V3.0 - Moon Grey", front: "/urbantee/urban3.png", back: "/urbantee/urban4.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 3, name: "UA Prime F.C.O. Hoodies Black", front: "/urbantee/urban5.png", back: "/urbantee/urban6.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 4, name: "UA Prime F.C.O. Hoodies White", front: "/urbantee/urban8.png", back: "/urbantee/urban9.png", desc: "Deep white tone designed for elevated streetwear."},
    { id: 5, name: "UA Plain Sweat Pants - Top Dye Grey", front: "/urbantee/urban10.png", back: "/urbantee/urban11.png", desc: "Elevate your casual wardrobe with the UA Plain Sweat Pants - Fleece Fabric | Top Dye Grey, designed for comfort and style." },
    { id: 6, name: "UA Prime F.C.O. Sweat Pants Black", front: "/urbantee/urban12.png", back: "/urbantee/urban12.png", desc: "Structured cotton silhouette with a clean modern finish."},
{ id: 7, name: "UA PRIME SHIRTS - F.C.O. White", front: "/urbantee/urban14.png", back: "/urbantee/urban15.png", desc: "Proudly crafted in Cebu City, Philippines. Available in 2 colorways. 310GSM pure cotton – substantial yet refined softness. Pre-shrunk, shrink-free construction for a consistent fit. Modern tailored cut with a sleek, versatile silhouette. Classic crew neck – timeless and resilient against wear. Front Premium rubber print – durable, crack- and peel-resistant finish. Engineered for breathability and all-day luxurious comfort. UA signature label – a mark of authenticity and Filipino pride. Part of the Back to Basic Collection – A limited release of essentials. Silkscreen back print - heat-cured for strong wash resistance, helping prevent premature fading and keeping the print looking premium over time." },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden scroll-smooth">
{/* ================= HERO ================= */}
<section
  onClick={() => {
    if (!isEditingMode) return;
    setEditingField("heroImage");
    setTempValue(businessData.heroImage);
  }}
  className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center px-6
    ${isEditingMode ? "border-4 border-yellow-400 cursor-pointer" : ""}`}
  style={{
    backgroundImage: `url(${businessData.heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>

  <button
  onClick={() => navigate(-1)}
  className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white px-4 py-2 transition"
>
  <ArrowLeft className="w-5 h-5" />
</button>

  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-4xl flex flex-col items-center md:items-center"
  >

    <h1
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField("businessName");
    setTempValue(businessData.businessName);
  }}
  className={`text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-[0.2em] mb-6
  ${isEditingMode ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10" : ""}`}
>
  {businessData.businessName}
</h1>
    <p
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField("tagline");
    setTempValue(businessData.tagline);
  }}
  className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-xl
  ${isEditingMode ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10" : ""}`}
>
  {businessData.tagline}
</p>
    <button
  onClick={scrollToCollection}
  className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl"
>
  Explore Collection
</button>
  </motion.div>
</section>

{/*
for notify to user to get this like website
*/}

{devfastModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="bg-white text-black p-8 rounded-2xl text-center max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        Do you want this design for your business?
      </h2>
      <button
        onClick={() => {
          setDevfastModal(false);
          setIsEditingMode(true);
        }}
        className="bg-black text-white px-6 py-2 rounded-full mr-4"
      >
        Yes
      </button>
      <button
        onClick={() => setDevfastModal(false)}
        className="border px-6 py-2 rounded-full"
      >
        No
      </button>
    </div>
  </div>
)}


{/*
shw form if lick edit
*/}

{editingField && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white text-black p-6 rounded-2xl w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">Edit Content</h2>

      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <button
        onClick={() => {
          setBusinessData({
            ...businessData,
            [editingField]: tempValue,
          });
          setEditingField(null);
        }}
        className="bg-black text-white px-6 py-2 rounded-full"
      >
        OK
      </button>
    </div>
  </div>
)}

{isEditingMode && !isPreviewMode && (
  <button
    onClick={() => {
      setIsEditingMode(false);
      setIsPreviewMode(true);
    }}
    className="fixed top-24 right-6 bg-white text-black px-6 py-3 rounded-full shadow-xl hover:scale-105 transition z-50"
  >
    Preview
  </button>
)}

{isPreviewMode && (
  <button
    onClick={() => {
      setIsPreviewMode(false);
      setIsEditingMode(true);
    }}
    className="fixed top-24 right-6 bg-white text-black px-6 py-3 rounded-full shadow-xl z-50"
  >
    Edit Again
  </button>
)}


{isPreviewMode && (
  <motion.button
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    onClick={() => window.location.href = "/checkout"}
    className="fixed top-6 right-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-2xl hover:scale-105 transition z-50"
  >
    Publish Website – ₱5,999
  </motion.button>
)}

     {/* ================= COLLECTION ================= */}
<section ref={collectionRef} className="py-32 px-6">
  <h2 className={`text-5xl font-bold text-center mb-24 tracking-widest  ${isEditingMode ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10" : ""}`} onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField("collection");
    setTempValue(businessData.collection);
  }}>
    {businessData.collection}
  </h2>

  <div className="max-w-7xl mx-auto space-y-40">
    {products.map((product, idx) => {
      const isReversed = idx % 2 === 1; // odd = reversed on desktop
      return (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* IMAGE */}
          <div
            className={`relative group
              ${isReversed ? "md:order-2" : ""} 

              order-1`} // on mobile, always first
          >
            <img
              src={product.front}
              alt={`${product.name} Front`}
              className="rounded-3xl w-md object-cover transition duration-700 group-hover:opacity-0"
            />
            {product.back && (
              <img
                src={product.back}
                alt={`${product.name} Back`}
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
              />
            )}
          </div>

          {/* TEXT */}
          <div
            className={`${
              isReversed ? "md:order-1" : ""
            } order-2 flex flex-col justify-center`}
          >
           <h3
  className={`text-3xl md:text-4xl font-bold mb-4 ${isEditingMode ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10" : ""}`}
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField(`product-name-${product.id}`);
    setTempValue(product.name);
  }}
>
  {product.name}
</h3>

<p  className={`text-gray-400 mb-4 line-clamp-4 md:line-clamp-none ${isEditingMode ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10" : ""}`}
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField(`product-desc-${product.id}`);
    setTempValue(product.desc);
  }}
>
  {product.desc}
</p>
            <button
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition self-start"
              onClick={() => openModal(product)}
            >
              View Product
            </button>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>

    {/* ================= MODAL ================= */}
      {modalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-6 overflow-auto"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-black rounded-3xl w-full max-w-5xl md:h-auto relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-yellow-400 transition"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="md:flex md:gap-8 p-6 md:p-10">
              {/* IMAGES */}
              <div className="md:w-1/2 flex flex-col gap-4 mb-6 md:mb-0">
                <div className="relative group">
                  <img
                    src={selectedProduct.front}
                    alt={`${selectedProduct.name} Front`}
                    className="rounded-2xl object-contain w-full h-64 md:h-[400px] transition duration-700 group-hover:opacity-0"
                  />
                  {selectedProduct.back && (
                    <img
                      src={selectedProduct.back}
                      alt={`${selectedProduct.name} Back`}
                      className="absolute inset-0 rounded-2xl object-contain opacity-0 group-hover:opacity-100 transition duration-700"
                    />
                  )}
                </div>
              </div>

              {/* TEXT */}
              <div className="md:w-1/2 flex flex-col justify-start">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{selectedProduct.name}</h3>
                
                {/* DESCRIPTION WITH SEE MORE */}
                <DescriptionWithToggle text={selectedProduct.desc} />

                {selectedProduct.price && (
                  <p className="text-yellow-400 font-bold text-2xl mt-4 mb-4">{selectedProduct.price}</p>
                )}

                <button
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition self-start"
                  
                >
                <a
  href="https://www.uaworldwide.com/"
  rel="noopener noreferrer"
  className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition self-start inline-block text-center"
>
  Visit UA Site
</a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    <section
  className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left"
  style={{
    backgroundImage: "url('/urbantee/urban16.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="bg-black/60 w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
   
    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
        STREET ESSENCE
      </h2>
      <p className="text-gray-300 text-lg md:text-xl">
        Urban streetwear inspired by the essence of city life. Designed for comfort and elevated style.
      </p>
    </div>
  </div>
</section>

      <section
  className="h-screen flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left"
  style={{
    backgroundImage: "url('/urbantee/urban14.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="bg-black/60 w-full h-full flex flex-col md:flex-row-reverse items-center justify-center p-6 md:p-12">
   
    <div className="md:w-1/2 md:pr-12 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
        MODERN FORM
      </h2>
      <p className="text-gray-300 text-lg md:text-xl">
        Sleek silhouettes with modern tailoring that brings style and comfort together.
      </p>
    </div>
  </div>
</section>

     <section
  className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left"
  style={{
    backgroundImage: "url('/urbantee/urban15.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="bg-black/60 w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
   
    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
        ELEVATED STREET
      </h2>
      <p className="text-gray-300 text-lg md:text-xl">
        Elevate your streetwear style with versatile pieces designed for everyday wear and standout looks.
      </p>
    </div>
  </div>
</section>

      <footer className="border-t border-white/10 py-4 text-center text-gray-500">
        © 2026 UrbanTee. All Rights Reserved.
      </footer>

    </div>
  );
};

export default UrbanTeeLanding;