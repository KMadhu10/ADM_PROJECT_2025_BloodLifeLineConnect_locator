
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can donate blood?</AccordionTrigger>
              <AccordionContent>
                Generally, anyone aged 18-65 years old, weighing at least 50kg, and in good health can donate blood. However, specific eligibility criteria may vary based on your location and the blood bank's requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How often can I donate blood?</AccordionTrigger>
              <AccordionContent>
                You can donate whole blood every 12 weeks (3 months). This allows your body enough time to replenish the donated blood cells. For plasma donations, you can donate more frequently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What happens during a blood donation?</AccordionTrigger>
              <AccordionContent>
                The process takes about 10-15 minutes. After a health screening, a sterile needle is used to collect blood from your arm. The entire appointment, including registration and recovery, usually takes about an hour.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is blood donation safe?</AccordionTrigger>
              <AccordionContent>
                Yes, blood donation is very safe. All equipment is sterile and used only once. The process is conducted by trained professionals in a controlled environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How should I prepare for blood donation?</AccordionTrigger>
              <AccordionContent>
                Get a good night's sleep, eat a healthy meal, drink plenty of water, and avoid fatty foods before donating. Wear comfortable clothing with sleeves that can be easily rolled up.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
