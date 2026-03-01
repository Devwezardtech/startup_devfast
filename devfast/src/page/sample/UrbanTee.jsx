import React, { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Checkout from "../Urbantee/Checkout";



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
const [showCheckout, setShowCheckout] = useState(false);

const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
const [customDomain, setCustomDomain] = useState("");

const [userResponse, setUserResponse] = useState(null);
  const timerRef = useRef(null);
  const attemptRef = useRef(0); 

  const delays = [5000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000];

useEffect(() => {
    const scheduleNotification = () => {
      if (attemptRef.current >= delays.length) return; // stop after last attempt
      timerRef.current = setTimeout(() => {
        setDevfastModal(true);
      }, delays[attemptRef.current]);
    };

    scheduleNotification();

    return () => clearTimeout(timerRef.current);
  }, []);

  const handleUserResponse = (response) => {
    setDevfastModal(false);
    setUserResponse(response);

    if (response === "no") {
      attemptRef.current += 1; // next delay
      if (attemptRef.current < delays.length) {
        timerRef.current = setTimeout(() => {
          setDevfastModal(true);
        }, delays[attemptRef.current]);
      }
    } else if (response === "yes") {
      // reset attempts if user says yes
      attemptRef.current = 0;
    }
  };

const [businessData, setBusinessData] = useState({
  businessName: "URBANTEE",
  tagline: "Minimal. Timeless. Elevated.",
  heroImage: "/urbantee/urban16.png",
  collection: "THE COLLECTION",
  footerName: "UrbanTee",



  

  products: [
    { id: 1, name: "UA Premium Hoodie V3.0 - Midnight Black", image: "/urbantee/urban1.png", back: "/urbantee/urban2.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print" },
    { id: 2, name: "UA Premium Hoodie V3.0 - Moon Grey", image: "/urbantee/urban3.png", back: "/urbantee/urban4.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 3, name: "UA Prime F.C.O. Hoodies Black", image: "/urbantee/urban5.png", back: "/urbantee/urban6.png", desc: "Heavyweight Fleece, 500GSM, Double Layered Hood, Embroidered, Old English design, TopGrade Rubber Print, Luxurious Comfort, Front Pockets, Labelled Tags, Rubber Patching, New Cracked Back Print"},
    { id: 4, name: "UA Prime F.C.O. Hoodies White", image: "/urbantee/urban8.png", back: "/urbantee/urban9.png", desc: "Deep white tone designed for elevated streetwear."},
    { id: 5, name: "UA Plain Sweat Pants - Top Dye Grey", image: "/urbantee/urban10.png", back: "/urbantee/urban11.png", desc: "Elevate your casual wardrobe with the UA Plain Sweat Pants - Fleece Fabric | Top Dye Grey, designed for comfort and style." },
    { id: 6, name: "UA Prime F.C.O. Sweat Pants Black", image: "/urbantee/urban12.png", back: "/urbantee/urban13.png", desc: "Structured cotton silhouette with a clean modern finish."},
{ id: 7, name: "UA PRIME SHIRTS - F.C.O. White", image: "/urbantee/urban14.png", back: "/urbantee/urban15.png", desc: "Proudly crafted in Cebu City, Philippines. Available in 2 colorways. 310GSM pure cotton – substantial yet refined softness. Pre-shrunk, shrink-free construction for a consistent fit. Modern tailored cut with a sleek, versatile silhouette. Classic crew neck – timeless and resilient against wear. Front Premium rubber print – durable, crack- and peel-resistant finish. Engineered for breathability and all-day luxurious comfort. UA signature label – a mark of authenticity and Filipino pride. Part of the Back to Basic Collection – A limited release of essentials. Silkscreen back print - heat-cured for strong wash resistance, helping prevent premature fading and keeping the print looking premium over time." },
  ],

  featureSections: [
    {
      id: 1,
      title: "STREET ESSENCE",
      desc: "Urban streetwear inspired by the essence of city life. Designed for comfort and elevated style.",
      image: "/urbantee/urban16.png",
      reverse: false,
    },
    {
      id: 2,
      title: "MODERN FORM",
      desc: "Sleek silhouettes with modern tailoring that brings style and comfort together.",
      image: "/urbantee/urban14.png",
      reverse: true,
    },
    {
      id: 3,
      title: "ELEVATED STREET",
      desc: "Elevate your streetwear style with versatile pieces designed for everyday wear and standout looks.",
      image: "/urbantee/urban15.png",
      reverse: false,
    },
  ],

  });

  
  const scrollToCollection = () => {
  collectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

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
    setEditingField("hero-image");
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
          handleUserResponse("no");
        }}
        className="border px-6 py-2 rounded-full mr-4"
      >
        Later
      </button>
      <button
        onClick={() => {
          setDevfastModal(false);
          setIsEditingMode(true);
          handleUserResponse("yes");
        }}
        className="bg-black text-white px-6 py-2 rounded-full"
      >
        Yes
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
      <h2 className="text-lg font-bold mb-4">
        {editingField === "new-product"
          ? "Add New Product"
          : "Edit Content"}
      </h2>

      {/* NEW PRODUCT MODE  */}
      {editingField === "new-product" ? (
        <>
          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              const imageUrl = URL.createObjectURL(file);
              setTempValue((prev) => ({ ...prev, image: imageUrl }));
            }}
            className="w-full border p-2 mb-4"
          />

          {/* NAME */}
          <input
            type="text"
            placeholder="Product Name"
            value={tempValue.name}
            onChange={(e) =>
              setTempValue((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full border p-2 mb-4"
          />

          {/* DESC */}
          <textarea
            placeholder="Product Description"
            value={tempValue.desc}
            onChange={(e) =>
              setTempValue((prev) => ({ ...prev, desc: e.target.value }))
            }
            className="w-full border p-2 mb-4 h-32"
          />
        </>
      ) : (
        <>
          {/* NORMAL EDIT MODE */}

          {editingField?.includes("image") ? (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                const imageUrl = URL.createObjectURL(file);
                setTempValue(imageUrl);
              }}
              className="w-full border p-2 mb-4"
            />
          ) : editingField?.includes("desc") ? (
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full border p-2 mb-4 h-32"
            />
          ) : (
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full border p-2 mb-4"
            />
          )}
        </>
      )}

      {/* OK BUTTON */}
      <button
        onClick={() => {
          /* ADD NEW PRODUCT */
          if (editingField === "new-product") {
            if (!tempValue.image || !tempValue.name || !tempValue.desc) {
              alert("Please complete all fields.");
              return;
            }

            setBusinessData((prev) => ({
              ...prev,
              products: [...prev.products, tempValue],
            }));
          }

          else if (editingField === "hero-image") { setBusinessData(prev => ({ ...prev, heroImage: tempValue })); }

          else if (editingField?.startsWith("feature-image-"))
             { const id = parseInt(editingField.replace("feature-image-", "")); 
              setBusinessData(prev => ({ ...prev, featureSections: prev.featureSections.map(s => s.id === id ? { ...s, image: tempValue } : s ) })); }

          else if (editingField?.startsWith("feature-title-"))
             { const id = parseInt(editingField.replace("feature-title-", "")); 
              setBusinessData(prev => ({ ...prev, featureSections: prev.featureSections.map(s => s.id === id ? { ...s, title: tempValue } : s ) })); }

          else if (editingField?.startsWith("feature-desc-"))
             { const id = parseInt(editingField.replace("feature-desc-", "")); setBusinessData(prev => ({ ...prev, featureSections: prev.featureSections.map(s => s.id === id ? { ...s, desc: tempValue } : s ) })); }

          /* EDIT PRODUCT IMAGE */
          else if (editingField?.startsWith("product-image-")) {
            const id = parseInt(
              editingField.replace("product-image-", "")
            );

            setBusinessData((prev) => ({
              ...prev,
              products: prev.products.map((p) =>
                p.id === id ? { ...p, image: tempValue } : p
              ),
            }));
          }

          /* EDIT PRODUCT NAME */
          else if (editingField?.startsWith("product-name-")) {
            const id = parseInt(
              editingField.replace("product-name-", "")
            );

            setBusinessData((prev) => ({
              ...prev,
              products: prev.products.map((p) =>
                p.id === id ? { ...p, name: tempValue } : p
              ),
            }));
          }

          /* EDIT PRODUCT DESC */
          else if (editingField?.startsWith("product-desc-")) {
            const id = parseInt(
              editingField.replace("product-desc-", "")
            );

            setBusinessData((prev) => ({
              ...prev,
              products: prev.products.map((p) =>
                p.id === id ? { ...p, desc: tempValue } : p
              ),
            }));
          }

          /* NORMAL FIELD */
          else {
            setBusinessData((prev) => ({
              ...prev,
              [editingField]: tempValue,
            }));
          }

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
    onClick={() => setIsPublishModalOpen(true)}
    className="fixed top-6 right-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-2xl hover:scale-105 transition z-50"
  >
    Publish Website – ₱5,999
  </motion.button>
)}

{isPublishModalOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white text-black p-8 rounded-2xl w-full max-w-md">

      <h2 className="text-2xl font-bold mb-4">
        Launch Your Website 🚀
      </h2>

      <p className="text-gray-600 mb-4 text-sm">
        Enter your preferred domain name. 100% free
      </p>

      <input
        type="text"
        placeholder="https://yourbusinessname.com"
        value={customDomain}
        onChange={(e) => setCustomDomain(e.target.value)}
        required
        className="w-full border p-3 rounded-lg mb-6"
      />

      <div className="flex justify-center items-center gap-10">
        <button
          onClick={() => setIsPublishModalOpen(false)}
          className="text-gray-600 px-12 py-3 rounded-full transition border border-gray-300 font-semibold hover:scale-105 transition"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            
            if (!customDomain) {
              return;
            }

            else {
              setShowCheckout(true);
            }

            // Optional: store domain before redirect
            localStorage.setItem("pendingDomain", customDomain);

          }}
          className="bg-yellow-400 text-gray-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Launch Now
        </button>
        <Checkout
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)} 
      />
      </div>

    </div>
  </div>
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
    {businessData.products.map((product, idx) => {
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
  className={`${
    isReversed ? "md:order-2" : ""
  } order-1 flex justify-center`}
>
  <div
    className={`${
      isEditingMode
        ? "cursor-pointer border-2 border-yellow-400"
        : ""
    } rounded-3xl overflow-hidden`}
    onClick={(e) => {
      e.stopPropagation();
      if (!isEditingMode) return;
      setEditingField(`product-image-${product.id}`);
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-[400px] h-[500px] object-cover rounded-3xl"
    />
  </div>
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
  {isEditingMode && (
  <div className="text-center mt-12">
    <button
      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
      onClick={() => {
        // create a temporary new product object
        const newId =
          businessData.products.length > 0
            ? Math.max(...businessData.products.map(p => p.id)) + 1
            : 1;

        setTempValue({
          id: newId,
          image: "",
          name: "",
          desc: "",
        });

        setEditingField("new-product"); 
      }}
    >
      + Add Product
    </button>
  </div>
)}
</section>

    {/*  MODAL  */}
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
<div className="md:w-1/2 flex flex-col gap-4 mb-6 md:mb-0 items-center">
  <img
    src={selectedProduct.image}
    alt={selectedProduct.name}
    className="rounded-2xl object-contain w-full max-w-[450px] h-[350px] md:h-[450px]"
  />
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

   {businessData.featureSections.map((section) => (
 <section
  key={section.id}
  className={`h-screen flex flex-col ${
    section.reverse ? "md:flex-row-reverse" : "md:flex-row"
  } items-center justify-center text-center md:text-left
  ${isEditingMode ? "outline outline-4 outline-yellow-400 cursor-pointer relative" : ""}`}
  style={{
    backgroundImage: `url(${section.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField(`feature-image-${section.id}`);
  }}
>
    <div className={`bg-black/60 w-full h-full flex flex-col ${
      section.reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-center p-6 md:p-12`}>

      <div className={`md:w-1/2 ${
        section.reverse ? "md:pr-12" : "md:pl-12"
      } text-center md:text-left`}>

        {/* TITLE */}
        <h2
          className={`text-4xl md:text-6xl font-extrabold mb-4 ${
            isEditingMode
              ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10"
              : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (!isEditingMode) return;
            setEditingField(`feature-title-${section.id}`);
            setTempValue(section.title);
          }}
        >
          {section.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`text-gray-300 text-lg md:text-xl ${
            isEditingMode
              ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10"
              : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (!isEditingMode) return;
            setEditingField(`feature-desc-${section.id}`);
            setTempValue(section.desc);
          }}
        >
          {section.desc}
        </p>

      </div>
    </div>
  </section>
))}

      <footer
  className={`border-t border-white/10 py-4 text-center text-gray-500 ${
    isEditingMode
      ? "border-2 border-yellow-400 cursor-pointer hover:bg-yellow-400/10"
      : ""
  }`}
  onClick={(e) => {
    e.stopPropagation();
    if (!isEditingMode) return;
    setEditingField("footerName");
    setTempValue(businessData.footerName);
  }}
>
  © {new Date().getFullYear()} {businessData.footerName}. All Rights Reserved.
</footer>

    </div>
  );
};

export default UrbanTeeLanding;