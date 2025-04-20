
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blood-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-gray-900">
                Blood<span className="text-blood-600">Lifeline</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Connecting blood donors with those in need. Save lives through blood donation.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blood-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blood-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/donors" className="text-gray-600 hover:text-blood-600 text-sm">
                  Find Donors
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-gray-600 hover:text-blood-600 text-sm">
                  Request Blood
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blood-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-600 hover:text-blood-600 text-sm">
                  Donor Eligibility
                </Link>
              </li>
              <li>
                <Link to="/blood-types" className="text-gray-600 hover:text-blood-600 text-sm">
                  Blood Types
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-blood-600 text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blood-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@bloodlifeline.com" className="text-gray-600 hover:text-blood-600 text-sm">
                  info@bloodlifeline.com
                </a>
              </li>
              <li>
                <a href="tel:+1800-BLOOD-HELP" className="text-gray-600 hover:text-blood-600 text-sm">
                  1-800-BLOOD-HELP
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} BloodLifeline Connect. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-blood-600 text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-blood-600 text-xs">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-blood-600 text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
