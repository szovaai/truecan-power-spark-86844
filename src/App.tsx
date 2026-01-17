import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import EVChargerInstallation from "./pages/services/EVChargerInstallation";
import PanelUpgrade from "./pages/services/PanelUpgrade";
import PotLightInstallation from "./pages/services/PotLightInstallation";
import HotTubSaunaWiring from "./pages/services/HotTubSaunaWiring";
import RenovationWiring from "./pages/services/RenovationWiring";
import EmergencyElectrician from "./pages/services/EmergencyElectrician";
import SurgeProtection from "./pages/services/SurgeProtection";
import EmergencyFAB from "./components/EmergencyFAB";
import ConversionToast from "./components/ConversionToast";
import LiveChat from "./components/LiveChat";
import SiteSchema from "./components/SiteSchema";
import ServiceAreas from "./pages/ServiceAreas";
import QuotesLayout from "./pages/quotes/QuotesLayout";
import QuotesList from "./pages/quotes/QuotesList";
import QuoteBuilder from "./pages/quotes/QuoteBuilder";
import MaterialsManager from "./pages/quotes/MaterialsManager";
import TemplatesManager from "./pages/quotes/TemplatesManager";
import QuotePreview from "./pages/quotes/QuotePreview";
// Calgary location pages
import CalgaryElectrician from "./pages/location/CalgaryElectrician";
import CalgaryEVCharger from "./pages/location/CalgaryEVCharger";
import CalgaryPanelUpgrade from "./pages/location/CalgaryPanelUpgrade";
import CalgaryPotLights from "./pages/location/CalgaryPotLights";
import CalgaryTroubleshooting from "./pages/location/CalgaryTroubleshooting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ConversionToast />
      <SiteSchema />
      <BrowserRouter>
        <LiveChat />
        <EmergencyFAB />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ev-charger-installation" element={<EVChargerInstallation />} />
          <Route path="/services/panel-upgrade" element={<PanelUpgrade />} />
          <Route path="/services/pot-light-installation" element={<PotLightInstallation />} />
          <Route path="/services/hot-tub-sauna-wiring" element={<HotTubSaunaWiring />} />
          <Route path="/services/renovation-wiring" element={<RenovationWiring />} />
          <Route path="/services/emergency-electrician" element={<EmergencyElectrician />} />
          <Route path="/services/surge-protection" element={<SurgeProtection />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Calgary location pages */}
          <Route path="/calgary-electrician" element={<CalgaryElectrician />} />
          <Route path="/calgary-ev-charger-installation" element={<CalgaryEVCharger />} />
          <Route path="/calgary-panel-upgrade" element={<CalgaryPanelUpgrade />} />
          <Route path="/calgary-pot-lights" element={<CalgaryPotLights />} />
          <Route path="/calgary-electrical-troubleshooting" element={<CalgaryTroubleshooting />} />
          {/* Hidden quoting app */}
          <Route path="/quotes" element={<QuotesLayout />}>
            <Route index element={<QuotesList />} />
            <Route path="new" element={<QuoteBuilder />} />
            <Route path="edit/:id" element={<QuoteBuilder />} />
            <Route path="materials" element={<MaterialsManager />} />
            <Route path="templates" element={<TemplatesManager />} />
            <Route path=":id" element={<QuotePreview />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
