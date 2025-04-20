
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blood-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@bloodlifeline.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blood-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-6 w-6 text-blood-600" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full bg-blood-600 hover:bg-blood-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
