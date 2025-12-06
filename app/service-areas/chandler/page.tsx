import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chandler Landscaping Services | Gilbert Yard Pros",
  description:
    "Professional landscaping services throughout Chandler, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingCompany",
  name: "Gilbert Yard Pros",
  description:
    "Connect with trusted local landscaping contractors in Chandler, Arizona",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Chandler",
    sameAs: "https://en.wikipedia.org/wiki/Chandler,_Arizona",
  },
  url: "https://www.gilbertyardpros.com",
  telephone: "480-987-6110",
};

const neighborhoods = [
  "Ocotillo",
  "Sun Lakes",
  "Chandler Heights",
  "Tuscany",
  "Chandler Ranch",
  "Valley Vista",
  "Chandler Park",
  "San Marcos",
  "Chandler West",
  "Pecos",
  "Dobson Ranch",
  "Chandler North",
];

export default function ChandlerServiceAreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: "Chandler", href: "/service-areas/chandler" },
        ]}
      />
      <section className="relative bg-gray-900 text-white h-[600px] md:h-[700px]">
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
          <div className="text-center px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Chandler Landscaping Services
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Get matched with trusted local contractors for landscaping,
              maintenance, turf, pavers, and more.
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
      <article className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Landscaping Services in Chandler, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with trusted local
              landscaping contractors throughout Chandler, Arizona. We're proud
              to serve homeowners and businesses across all neighborhoods in
              Chandler, matching you with experienced professionals who provide
              expert care for your outdoor spaces.
            </p>
          </section>

          {/* Climate and Expertise Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chandler's Desert Climate and Specialized Landscaping Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Chandler's unique desert climate requires specialized knowledge
              and expertise in landscaping. Our network of contractors
              understands the specific needs of Arizona landscapes, from
              water-efficient design to proper plant selection and maintenance.
              They work with Chandler's environment to create beautiful,
              sustainable landscapes that thrive in our climate.
            </p>
          </section>

          {/* Neighborhood Coverage Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services Across All Chandler
              Neighborhoods
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're in Ocotillo, Sun Lakes, Chandler Heights, Tuscany,
              or any other Chandler neighborhood, we bring the same commitment
              to quality and customer service. Our comprehensive services cover
              everything from routine lawn care to complete landscape
              transformations. Chandler's growth over the years has created a
              diverse mix of established neighborhoods and newer developments,
              each with unique landscaping needs and opportunities.
            </p>
          </section>

          {/* Water Conservation Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Water Conservation and Sustainable Landscaping in Chandler
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Chandler homeowners face the same desert landscaping challenges as
              other East Valley communities, but they also benefit from the
              city's commitment to water conservation and sustainable
              landscaping practices. Our contractors are well-versed in
              Chandler's water regulations and can help you create landscapes
              that are both compliant and beautiful. They understand how to work
              with the local soil conditions, which can vary significantly
              across different areas of the city.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gilbert Yard Pros for Chandler Landscaping
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The contractors in our network serving Chandler bring years of
              local experience and a deep understanding of what works in this
              environment. They can help you navigate the balance between
              creating a beautiful landscape and maintaining water efficiency,
              which is increasingly important in Arizona. Whether you're looking
              to establish a new landscape, renovate an existing one, or
              maintain what you have, our contractors provide the expertise and
              service quality that Chandler homeowners expect.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in Chandler
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide landscaping services throughout Chandler, Arizona,
            including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Don't see your neighborhood listed? We serve all areas of Chandler,
            Arizona. Contact us to confirm service availability in your specific
            location.
          </p>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional landscaping services in
              Chandler, Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-block bg-white text-primary-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Quote
              </a>
              <a
                href="tel:4809876110"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Call 480-987-6110
              </a>
            </div>
          </div>
        </div>
      </article>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
