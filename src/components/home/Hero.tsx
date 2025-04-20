
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative blood-drop-bg bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect Blood Donors with Those in Need
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our community to help save lives through blood donation. 
            Find donors, request blood, or become a donor today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blood-600 hover:bg-blood-700 text-lg h-12 px-8" asChild>
              <Link to="/register?role=donor">Become a Donor</Link>
            </Button>
            <Button variant="outline" className="border-blood-600 text-blood-600 hover:bg-blood-50 text-lg h-12 px-8" asChild>
              <Link to="/request">Request Blood</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
