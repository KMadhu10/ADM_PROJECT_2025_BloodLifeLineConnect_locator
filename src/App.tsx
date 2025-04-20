
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DonorProfile from "./pages/DonorProfile";
import DonorDashboard from "./pages/DonorDashboard";
import BloodRequest from "./pages/BloodRequest";
import RequestStatus from "./pages/RequestStatus";
import FindDonors from "./pages/FindDonors";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor-profile" element={<DonorProfile />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/request" element={<BloodRequest />} />
          <Route path="/request-status" element={<RequestStatus />} />
          <Route path="/donors" element={<FindDonors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
