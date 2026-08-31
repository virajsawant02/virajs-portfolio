
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Viraj Sawant for collaborations, freelance projects, software development opportunities, and professional inquiries.",
};

export default function ContactPage() {
  return <Contact/>
}