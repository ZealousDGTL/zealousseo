import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Zealous Digital Solutions",
  description: "Get in touch with Zealous Digital Solutions. Let's discuss your digital marketing needs.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
