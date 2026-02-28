import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export default function WebAppDashboardSample() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6">
      {/* Hero */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Web App Dashboard
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Modern admin dashboard for web apps.  
          Clean UI, interactive components, and easy-to-read analytics panels.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get This Design</Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          "Analytics Overview",
          "Interactive Components",
          "Real-time Data"
        ].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-gray-900 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-400 mt-2">
              {item === "Analytics Overview" &&
                "Visualize key metrics and KPIs at a glance."}
              {item === "Interactive Components" &&
                "Tables, charts, and widgets with smooth interactions."}
              {item === "Real-time Data" &&
                "Keep your dashboard updated with live information."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">Want this dashboard?</h2>
        <p className="text-gray-400 mt-4">
          Click below and tell me you want the “Web App Dashboard” design.
        </p>
       
          <Button className="mt-6 px-8 py-6 text-lg">
            Book This Design
          </Button>
        
      </section>
    </div>
  );
}
