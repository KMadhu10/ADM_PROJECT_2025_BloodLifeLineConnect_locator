
import React from "react";
import { Droplet, Search, Heart } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Droplet />}
            title="Register as a Donor"
            description="Sign up to become a blood donor. Your donation can save up to three lives with just one unit of blood."
          />
          <FeatureCard
            icon={<Search />}
            title="Find Donors Nearby"
            description="Search for donors by blood type and location. Connect directly with compatible donors in your area."
          />
          <FeatureCard
            icon={<Heart />}
            title="Request Blood"
            description="Submit a blood request for patients in need. Specify blood type, quantity, and urgency level."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
    <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center mb-4">
      <div className="h-6 w-6 text-blood-600">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;
