
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import BloodTypes from "@/components/home/BloodTypes";
import Benefits from "@/components/home/Benefits";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <BloodTypes />
      <Benefits />
      <CTA />
    </MainLayout>
  );
};

export default Index;
