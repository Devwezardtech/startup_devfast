import React from "react";
import { Routes, Route } from "react-router-dom";
import DevfastLanding from "./page/home";
import LandingSample from "./page/sample/landing";
import WebAppDashboardSample from "./page/sample/web";
import CanelsaHotelLanding from "./page/sample/business";
import LoreCafeLanding from "./page/sample/LoreCafeLanding";
import ContractorLanding from "./page/sample/enginner";
import EventsWebinarLanding from "./page/sample/events";
import AutoGalaxyProductLanding from "./page/sample/AutoGalaxy";
import EachaCafeLanding from "./page/sample/EachaRestaurant";
import InkMasterLanding from "./page/sample/Inkmaster";
import UrbanTeeLanding from "./page/sample/UrbanTee";
import DonLeoFitnessLanding from "./page/sample/DonLeoFitness";
import PrimeNestRealtyLanding from "./page/sample/PrimeNestRealty";


export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<DevfastLanding />} />

      {/* Sample Projects */}
      <Route path="/project/landing" element={<LandingSample />} />
      <Route path="/project/business" element={<CanelsaHotelLanding />} />
      <Route path="/project/webapp" element={<WebAppDashboardSample />} />
      <Route path="/project/lorecafe" element={<LoreCafeLanding />} />
      <Route path="/project/engineer" element={<ContractorLanding />} />
      <Route path="/project/events/webinar" element={<EventsWebinarLanding />} />
      <Route path="/project/autogalaxy" element={<AutoGalaxyProductLanding />} />
      <Route path="/project/eacha" element={<EachaCafeLanding />} />
      <Route path="/project/inkmaster" element={<InkMasterLanding />} />
      <Route path="/project/urbanTee" element={<UrbanTeeLanding />} />
      <Route path="/project/donLeoFitness" element={<DonLeoFitnessLanding />} />
      <Route path="/project/primeNestRealty" element={<PrimeNestRealtyLanding />} />
      
    

      {/* 404 Fallback (optional but recommended) */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
            <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}


