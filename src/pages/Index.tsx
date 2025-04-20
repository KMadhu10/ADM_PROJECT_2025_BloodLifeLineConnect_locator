import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Droplet, Search, Heart, MapPin, Clock, Bell } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/f6a598fa-5bea-431c-9656-deeb92d7308d.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect Blood Donors with Those in Need
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our community to help save lives through blood donation. 
                Find donors, request blood, or become a donor today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button className="bg-blood-600 hover:bg-blood-700 text-lg h-12 px-8" asChild>
                  <Link to="/register?role=donor">Become a Donor</Link>
                </Button>
                <Button variant="outline" className="border-blood-600 text-blood-600 hover:bg-blood-50 text-lg h-12 px-8" asChild>
                  <Link to="/request">Request Blood</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Blood donation"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center mb-4">
                <Droplet className="h-6 w-6 text-blood-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Register as a Donor</h3>
              <p className="text-gray-600">
                Sign up to become a blood donor. Your donation can save up to three lives with just one unit of blood.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blood-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Donors Nearby</h3>
              <p className="text-gray-600">
                Search for donors by blood type and location. Connect directly with compatible donors in your area.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blood-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blood-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Request Blood</h3>
              <p className="text-gray-600">
                Submit a blood request for patients in need. Specify blood type, quantity, and urgency level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blood Type Compatibility</h2>
            <p className="text-gray-600">
              Understanding blood type compatibility is crucial for successful transfusions. 
              See which blood types are compatible with yours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-blood-600 text-white">
                  <th className="py-3 px-4 text-left font-semibold">Blood Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Can Donate To</th>
                  <th className="py-3 px-4 text-left font-semibold">Can Receive From</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">A+</td>
                  <td className="py-3 px-4">A+, AB+</td>
                  <td className="py-3 px-4">A+, A-, O+, O-</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">A-</td>
                  <td className="py-3 px-4">A+, A-, AB+, AB-</td>
                  <td className="py-3 px-4">A-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">B+</td>
                  <td className="py-3 px-4">B+, AB+</td>
                  <td className="py-3 px-4">B+, B-, O+, O-</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">B-</td>
                  <td className="py-3 px-4">B+, B-, AB+, AB-</td>
                  <td className="py-3 px-4">B-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">AB+</td>
                  <td className="py-3 px-4">AB+ only</td>
                  <td className="py-3 px-4">All Types</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">AB-</td>
                  <td className="py-3 px-4">AB+, AB-</td>
                  <td className="py-3 px-4">A-, B-, AB-, O-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">O+</td>
                  <td className="py-3 px-4">A+, B+, AB+, O+</td>
                  <td className="py-3 px-4">O+, O-</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">O-</td>
                  <td className="py-3 px-4">All Types</td>
                  <td className="py-3 px-4">O- only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blood-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blood-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location-Based Matching</h3>
                <p className="text-gray-600">
                  Our smart algorithm matches blood requests with nearby donors
                  to ensure the fastest possible response time.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blood-100 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-blood-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Privacy & Safety</h3>
                <p className="text-gray-600">
                  Your data is secure and private. We only share necessary information
                  when a match is made between donor and recipient.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blood-100 rounded-full flex items-center justify-center">
                  <Bell className="h-5 w-5 text-blood-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Notifications</h3>
                <p className="text-gray-600">
                  Receive instant alerts about urgent blood requests in your area 
                  or when someone matches your blood request.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blood-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blood-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Donation Tracking</h3>
                <p className="text-gray-600">
                  Track your donation history, receive reminders when you're eligible 
                  to donate again, and see the impact of your donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </MainLayout>
  );
};

export default Index;
