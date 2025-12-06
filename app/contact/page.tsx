import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Gilbert Yard Pros | Free Estimates",
  description:
    "Contact Gilbert Yard Pros for professional landscaping services in Gilbert, Arizona. Get matched with trusted local contractors. Free estimates available!",
  openGraph: {
    title: "Contact Us | Gilbert Yard Pros | Free Estimates",
    description:
      "Contact Gilbert Yard Pros for professional landscaping services in Gilbert, Arizona. Get matched with trusted local contractors. Free estimates available!",
    url: "https://www.gilbertyardpros.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.gilbertyardpros.com/GYPLOGO.png",
        width: 1200,
        height: 630,
        alt: "Gilbert Yard Pros Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Gilbert Yard Pros | Free Estimates",
    description:
      "Contact Gilbert Yard Pros for professional landscaping services in Gilbert, Arizona. Get matched with trusted local contractors. Free estimates available!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.gilbertyardpros.com/contact",
  description:
    "Contact Gilbert Yard Pros for professional landscaping services in Gilbert, Arizona. Get matched with trusted local contractors.",
  contactOption: "CustomerService",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Gilbert Yard Pros",
    telephone: "480-987-6110",
    email: "info@gilbertyardpros.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gilbert",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-white text-gray-700 h-[400px] md:h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/homepageheroqc.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/landscapeinstallation.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <div className="container-max text-center z-10 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Gilbert Yard Pros
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
              Get matched with trusted local contractors for your landscaping
              project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-block bg-primary-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-green-dark transition-colors text-center"
              >
                Get Quote Now
              </a>
              <a
                href="tel:4809876110"
                className="inline-block bg-white text-primary-green border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fill out the form below and we'll connect you with qualified local
              contractors who can provide free estimates for your landscaping
              project. Our network of professionals is ready to help transform
              your outdoor space.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <a
                href="tel:4809876110"
                className="text-2xl font-bold text-primary-green hover:text-primary-green-dark transition-colors"
              >
                480-987-6110
              </a>
              <p className="text-gray-700 mt-2">
                Available Monday - Sunday, 8:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Area
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                We serve the following areas:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Gilbert, Arizona</li>
                <li>• Mesa, Arizona</li>
                <li>• Chandler, Arizona</li>
                <li>• San Tan Valley, Arizona</li>
                <li>• Queen Creek, Arizona</li>
              </ul>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-primary-green text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Tell Us About Your Project
                </h3>
                <p className="text-gray-700/90">
                  Fill out the form below with details about your landscaping
                  needs, budget, and timeline.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We Match You with a Contractor
                </h3>
                <p className="text-gray-700/90">
                  We'll connect you with qualified local contractors who
                  specialize in your specific project type.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Get Your Free Estimate
                </h3>
                <p className="text-gray-700/90">
                  The contractor will contact you directly with a free estimate
                  and project timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Gilbert Yard Pros?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trusted Network
              </h3>
              <p className="text-gray-700">
                All contractors in our network are licensed, insured, and
                committed to providing quality workmanship and excellent
                customer service.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free Estimates
              </h3>
              <p className="text-gray-700">
                Get free estimates from qualified professionals. No obligation,
                no hidden fees.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-700">
                Our contractors understand Gilbert's unique climate and
                landscaping needs, ensuring your project thrives in Arizona's
                desert environment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive Services
              </h3>
              <p className="text-gray-700">
                From routine maintenance to complete landscape transformations,
                we connect you with experts for any project size.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PartnerSection />
    </>
  );
}
