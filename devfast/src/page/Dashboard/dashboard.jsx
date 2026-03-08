import { useEffect, useState, useRef } from "react";
import { CheckCircle, Settings, Pencil, Eye, MessageSquare, X } from "lucide-react";

export default function ClientDashboard() {
 const [client, setClient] = useState({
  name: "",
  domain: "",
  orderTime: null,
});

const [progress, setProgress] = useState(1);

useEffect(() => {
  const savedName = localStorage.getItem("clientName");
  const savedDomain = localStorage.getItem("pendingDomain");
  const savedOrderTime = localStorage.getItem("orderTime");

  setClient({
    name: savedName || "Juan dela Cruz",
    domain: savedDomain || "",
    orderTime: savedOrderTime ? Number(savedOrderTime) : null,
  });
}, []);

  useEffect(() => {
    if (!client.orderTime) return;

    const updateProgress = () => {
      const now = Date.now();
      const diffHours = (now - client.orderTime) / (1000 * 60 * 60);

      if (diffHours >= 20) setProgress(4);
      else if (diffHours >= 4) setProgress(3);
      else if (diffHours >= 2) setProgress(2);
      else setProgress(1);
    };

    updateProgress();
    const timer = setInterval(updateProgress, 5000);
    return () => clearInterval(timer);
  }, [client.orderTime]);

  const Step = ({ step, label }) => (
    <div
      className={`flex items-center gap-3 p-2 rounded-xl transition ${
        progress < step ? "opacity-50 hover:bg-gray-50" : "bg-green-50"
      }`}
    >
      {progress >= step ? (
        <CheckCircle className="text-green-500 w-6 h-6 animate-bounce" />
      ) : (
        <div className="w-6 h-6 border-2 border-gray-300 rounded-full animate-pulse"></div>
      )}
      <span className="font-semibold">{label}</span>
    </div>
  );

  // Chat Support
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hello! I’m your virtual assistant. How can I help you today?" },
  ]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Simulate AI reply
  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    setTyping(true);

    const delay = Math.random() * (15000 - 5000) + 5000; // 10-35s delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "ai", text: generateAIReply(text) }]);
      setTyping(false);
    }, delay);
  };

  const generateAIReply = (text) => {
  const lower = text.toLowerCase();

  // ===== Website & Domain =====
  if (lower.includes("website")) {
    const replies = [
      "Your website is currently being set up and will be live soon.",
      "You can customize your website after setup is complete.",
      "Your website will be optimized for desktop and mobile users.",
      "We ensure your website loads fast for your customers.",
      "You can track visitor activity once your website is live.",
      "Your website will include an easy-to-use ordering system.",
      "We handle the technical setup so you can focus on your business.",
      "You’ll get access to templates to make your site look professional.",
      "Your website is secure and protected from unauthorized access.",
      "Once live, you can share the website link with your customers.",
      "We make sure your website works smoothly on all devices.",
      "Your website will include essential business information automatically.",
      "You can request custom features if needed after setup.",
      "The website design will reflect your brand identity.",
      "You can add products or services easily after launch.",
      "We handle domain connection and hosting for your convenience.",
      "Your website setup includes SEO optimization for search engines.",
      "You’ll get notifications when your website is ready.",
      "We provide guidance on how to maintain your website.",
      "Our support team can assist with any website-related questions."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (lower.includes("domain")) {
    const replies = [
      "Your domain will be connected soon.",
      "Once the domain is active, your website will be accessible online.",
      "We’ll notify you immediately when your domain is live.",
      "You can use your custom domain or request a new one.",
      "Domain connection is handled automatically for you.",
      "Your domain will point directly to your new website.",
      "We ensure SSL is configured for secure browsing.",
      "Domain setup usually completes within a few hours.",
      "You can update your domain details in the dashboard anytime.",
      "Your domain will be protected from unauthorized changes.",
      "You’ll receive confirmation when the domain is active.",
      "We can help transfer an existing domain if needed.",
      "You can link your domain to marketing tools after setup.",
      "Your domain is essential for your online branding.",
      "We check all domain settings for correct configuration.",
      "You can manage multiple domains from your dashboard.",
      "The domain connection is included in your package.",
      "We ensure your domain works globally without issues.",
      "Once live, your domain will be indexed in search engines.",
      "Our team monitors your domain connection status automatically."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ===== Marketing & Promotion =====
  if (lower.includes("ads") || lower.includes("marketing") || lower.includes("promotion") || lower.includes("social")) {
    const replies = [
      "Running ads regularly helps attract more customers.",
      "We suggest starting with Facebook and TikTok campaigns.",
      "Promotions can increase visibility and repeat customers.",
      "You can create limited-time offers to boost sales.",
      "Marketing analytics help track the performance of your ads.",
      "Engage your customers on social media for better reach.",
      "We can guide you to optimize ad targeting for your niche.",
      "Email campaigns can complement your online promotions.",
      "Regular posts on social media increase brand awareness.",
      "Offer bundle deals to increase average order value.",
      "Highlight best-selling items in your promotions.",
      "Use clear images and descriptions for all marketing posts.",
      "Advertising regularly helps your business stay competitive.",
      "Analyze your campaign results to improve ROI.",
      "Automated reminders can help convert interested customers.",
      "Use seasonal campaigns to attract more buyers.",
      "Respond quickly to inquiries from your ads for better results.",
      "Marketing should match your business goals for success.",
      "Offer discounts to first-time buyers for engagement.",
      "Track trends and adapt promotions to customer preferences."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ===== Business Growth & Success =====
  if (lower.includes("success") || lower.includes("grow") || lower.includes("strategy") || lower.includes("goal")) {
    const replies = [
      "Focus on consistent promotion to grow your business.",
      "Set measurable goals and track your progress regularly.",
      "Analyzing sales trends helps make better business decisions.",
      "Customer experience is key to long-term growth.",
      "Diversifying products can attract new customers.",
      "Invest in marketing to expand your reach.",
      "Track competitors to stay ahead in your niche.",
      "Offer loyalty programs to retain customers.",
      "Use automation to save time and improve efficiency.",
      "Regularly update your offerings to meet customer needs.",
      "Monitor key performance indicators for success.",
      "Optimize pricing strategies for maximum profit.",
      "Collaborate with partners to expand your business.",
      "Train staff to improve customer service quality.",
      "Utilize social proof to build trust with clients.",
      "Focus on quality over quantity in products and services.",
      "Gather feedback and act on it to improve.",
      "Plan seasonal campaigns for business peaks.",
      "Use data-driven strategies for decision making.",
      "Maintain a clear vision for your business goals."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ===== Customer Engagement =====
  if (lower.includes("customer") || lower.includes("feedback") || lower.includes("review") || lower.includes("support")) {
    const replies = [
      "Engage with your customers regularly for better loyalty.",
      "Collect feedback to understand customer needs.",
      "Respond promptly to inquiries to build trust.",
      "Show appreciation for positive reviews.",
      "Address negative feedback constructively.",
      "Offer multiple ways for customers to contact you.",
      "Personalize communication to improve engagement.",
      "Follow up with customers after purchase for satisfaction.",
      "Use surveys to collect insights from customers.",
      "Reward loyal customers with special offers.",
      "Automate reminders for pending orders or renewals.",
      "Share updates and news to keep customers informed.",
      "Resolve issues quickly to maintain reputation.",
      "Encourage referrals for business growth.",
      "Keep communication clear and professional.",
      "Listen actively to customer suggestions.",
      "Analyze customer data to improve services.",
      "Respond in a friendly and helpful manner.",
      "Provide step-by-step guidance when needed.",
      "Always aim for a positive customer experience."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ===== Fallback =====
const fallbackReplies = [
  "Thanks for your message! Could you tell me more so I can assist you better?",
  "I’m here to help! Can you give me more details about what you need?",
  "Could you clarify your question a bit so I can provide the best answer?",
  "I want to make sure I understand. Can you explain a little more?",
  "Thanks for reaching out! Could you provide some more information?",
  "I’m happy to assist! Can you tell me exactly what you’re looking for?",
  "Let’s make sure I get it right. Can you elaborate a bit more?",
  "I’d love to help! Can you give me some more details?",
  "Can you explain a little more so I can give the best guidance?",
  "I’m here to support you! Could you share more about your question?"
];

// Use a random fallback reply
return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
};

  const sendMessageHandler = () => {
    if (!inputRef.current) return;
    const text = inputRef.current.value.trim();
    if (!text) return;

    sendMessage(text);
    inputRef.current.value = "";
  };

  //for the information og client
  const [openAccountModal, setOpenAccountModal] = useState(false);

const [accountData, setAccountData] = useState({
  name: "",
  email: "",
  company: "",
  phone: "",
});

const openAccountSettings = () => {
  setAccountData({
    name: client.name,
    email: "",
    company: "",
    phone: "",
  });

  setOpenAccountModal(true);
};

const handleChange = (e) => {
  setAccountData({
    ...accountData,
    [e.target.name]: e.target.value,
  });
};

const handleSave = () => {

  console.log("Saving account...");

  setTimeout(() => {

    const updatedClient = {
      ...client,
      name: accountData.name,
    };

    setClient(updatedClient);

    localStorage.setItem("clientName", accountData.name);

    console.log("Saved Account:", accountData);

    setOpenAccountModal(false);

  }, 2000); // 2 seconds delay

};

// for preview the website of client
const [openPreviewModal, setOpenPreviewModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Welcome, {client.name} </h1>
            <p className="text-gray-600">Here’s your website status & quick actions dashboard</p>
          </div>
          <button
  onClick={openAccountSettings}
  className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition"
>
  Account Settings
</button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Website Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <p className="text-gray-500">Your Website</p>
                <p className="text-3xl font-extrabold">{client.domain}</p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full hover:bg-gray-200 transition font-semibold">
                  <Pencil className="w-5 h-5" /> Edit Info
                </button>
                <button
  onClick={() => setOpenPreviewModal(!openPreviewModal)}
  className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full hover:bg-gray-200 transition font-semibold"
>
  <Eye className="w-5 h-5" /> Preview
</button>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="space-y-4 mt-6">
              <Step step={1} label="Payment Confirmed" />
              <Step step={2} label="Website Setup In Progress" />
              <Step step={3} label="Domain Connection" />
              <Step step={4} label="Website Launch" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-gray-500" />
                <p className="font-semibold text-gray-700">Business Info</p>
              </div>
              <p className="text-gray-500">Edit business details and logo</p>
            </div>

            <div 
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition cursor-pointer"
              onClick={openModal}
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-6 h-6 text-gray-500" />
                <p className="font-semibold text-gray-700">Support</p>
              </div>
              <p className="text-gray-500">Contact our team anytime</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-gray-500" />
                <p className="font-semibold text-gray-700">Upgrade Plan</p>
              </div>
              <p className="text-gray-500">Unlock advanced features & templates</p>
            </div>
          </div>
        </div>
      </div>

     {/* Chat Modal */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col overflow-hidden transform transition-all scale-95 animate-scale-in">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Support Chat</h2>
        <button onClick={closeModal}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[500px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                msg.type === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {typing && <p className="text-gray-500 italic">Assistant is typing...</p>}
      </div>

      {/* Input */}
<div className="p-4 border-t flex gap-2">
  <input
    ref={inputRef}
    type="text"
    placeholder="Type your message..."
    className="flex-grow min-w-0 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onKeyDown={(e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        sendMessageHandler();
      }
    }}
  />
  <button
    className="bg-blue-500 text-white px-5 py-2 rounded-full flex-shrink-0"
    onClick={sendMessageHandler}
  >
    Send
  </button>
</div>
    </div>
  </div>
)}

{/**
 for the account information modal
 */}
 {openAccountModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl p-8 w-[400px] shadow-xl">

      <h2 className="text-2xl font-bold mb-6">
        Account Settings
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={accountData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={accountData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={accountData.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={accountData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

      </div>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setOpenAccountModal(false)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Save
        </button>

      </div>

    </div>

  </div>
)}

{/* Preview Modal */}
{/* Desktop Preview Panel */}
{openPreviewModal && (
  <div className="hidden lg:block max-w-7xl mx-auto mt-10">
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Website Preview</h2>
        <button
          onClick={() => setOpenPreviewModal(false)}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          Close
        </button>
      </div>
      <div className="h-[700px]">
        <iframe
          src="/project/urbanTee"
          title="Website Preview"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  </div>
)}

{/* Mobile Preview Modal */}
{openPreviewModal && (
  <div className="lg:hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white w-[95%] h-[90vh] rounded-xl overflow-hidden shadow-2xl flex flex-col">
      <div className="flex justify-between items-center p-3 border-b">
        <p className="font-semibold">Website Preview</p>
        <button
          onClick={() => setOpenPreviewModal(false)}
          className="bg-black text-white px-3 py-1 rounded-full text-sm"
        >
          Close
        </button>
      </div>
      <iframe
        src="/project/urbanTee"
        title="Website Preview"
        className="flex-1 w-full border-none"
      />
    </div>
  </div>
)}

    </div>
  );
}