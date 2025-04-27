"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "id-card",
      question: "What identification documents can you help recover?",
      answer:
        "Our service specializes in recovering lost government-issued IDs, passports, driving licenses, title deeds, and educational certificates. We work with government agencies, educational institutions, and property offices to help verify your identity and expedite replacement of these critical documents.",
    },
    {
      id: "item-2",
      icon: "shield",
      question:
        "How do you ensure the security of found identification documents?",
      answer:
        "All found identification documents are handled with strict security protocols. Our couriers use tamper-proof bags and our verification specialists work in secure environments. We never share document details with unauthorized parties, and our database is encrypted and compliant with international identity protection standards.",
    },
    {
      id: "item-3",
      icon: "clock",
      question:
        "How quickly can I get my ID documents back if they've been found?",
      answer:
        "Once a matching document is reported in our system, we typically notify you within 24 hours. After identity verification, passport and ID cards can often be returned within 1-3 business days. Title deeds and educational certificates may take 3-5 business days due to additional verification requirements with issuing institutions.",
    },
    {
      id: "item-4",
      icon: "map-pin",
      question: "What should I do if I find someone's passport or ID card?",
      answer:
        "If you find someone's passport, ID card, driving license, title deed, or educational certificate, please report it through our \"Report Found Documents\" button. You'll be asked for minimal details to help us identify the owner. We offer rewards for returned documents.. For passports and government IDs, we work with official authorities to ensure proper handling while protecting your privacy.",
    },
    {
      id: "item-5",
      icon: "dollar-sign",
      question:
        "What are the fees for document recovery services and finder rewards?",
      answer:
        "Reporting a lost document on our site is completely free - you only pay if we successfully find and return your documents. There are no upfront registration or search fees. ",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                ID Document Recovery FAQs
              </h2>
              <p className="text-muted-foreground mt-4">
                Need help with lost passports, IDs, or certificates? Contact our{" "}
                <Link
                  href="/identity-specialists"
                  className="text-primary font-medium hover:underline"
                >
                  identity document specialists
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
