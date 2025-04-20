
import React from "react";
import { MapPin, Heart, Bell, Clock } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Blood Lifeline?</h2>
          <p className="text-gray-600">
            Our platform offers unique features designed to make blood donation 
            and requests efficient, secure, and accessible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitItem
            icon={<MapPin />}
            title="Location-Based Matching"
            description="Our smart algorithm matches blood requests with nearby donors to ensure the fastest possible response time."
          />
          <BenefitItem
            icon={<Heart />}
            title="Privacy & Safety"
            description="Your data is secure and private. We only share necessary information when a match is made between donor and recipient."
          />
          <BenefitItem
            icon={<Bell />}
            title="Real-Time Notifications"
            description="Receive instant alerts about urgent blood requests in your area or when someone matches your blood request."
          />
          <BenefitItem
            icon={<Clock />}
            title="Donation Tracking"
            description="Track your donation history, receive reminders when you're eligible to donate again, and see the impact of your donations."
          />
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-blood-100 rounded-full flex items-center justify-center">
        <div className="h-5 w-5 text-blood-600">{icon}</div>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Benefits;
