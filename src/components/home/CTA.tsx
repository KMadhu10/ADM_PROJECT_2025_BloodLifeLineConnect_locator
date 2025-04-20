
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-blood-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing community of blood donors and recipients.
            Every donation counts, every life matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blood-600 hover:bg-gray-100 text-lg h-12 px-8" asChild>
              <Link to="/register">Create an Account</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blood-700 text-lg h-12 px-8" asChild>
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
