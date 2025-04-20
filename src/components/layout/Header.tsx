import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blood-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-montserrat font-bold text-gray-900">
            Blood<span className="text-blood-600">Lifeline</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blood-600 transition-colors">
            Home
          </Link>
          <Link to="/donors" className="text-gray-700 hover:text-blood-600 transition-colors">
            Find Donors
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-blood-600 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blood-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="bg-blood-600 hover:bg-blood-700" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t animate-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blood-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/donors" 
              className="text-gray-700 hover:text-blood-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Donors
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-blood-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blood-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full justify-center">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
              </Button>
              <Button className="w-full justify-center bg-blood-600 hover:bg-blood-700" asChild>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
