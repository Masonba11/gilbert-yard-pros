import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesa Landscaping Services | Gilbert Yard Pros",
  description:
    "Professional landscaping services throughout Mesa, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
  openGraph: {
    title: "Mesa Landscaping Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout Mesa, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    url: "https://www.gilbertyardpros.com/service-areas/mesa",
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
    title: "Mesa Landscaping Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout Mesa, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gilbert Yard Pros",
  description:
    "Connect with trusted local landscaping contractors in Mesa, Arizona",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mesa",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Mesa",
    sameAs: "https://en.wikipedia.org/wiki/Mesa,_Arizona",
  },
  url: "https://www.gilbertyardpros.com",
  telephone: "480-987-6110",
};

const neighborhoods = [
  "Dobson Ranch",
  "Las Sendas",
  "Red Mountain Ranch",
  "Superstition Springs",
  "Valley Ranch",
  "Eastmark",
  "Mesa Grande",
  "Sunridge",
  "Falcon Field",
  "Riverview",
  "Alta Mesa",
  "Mountain View",
];

export default function MesaServiceAreaPage() {
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
          { label: "Mesa", href: "/service-areas/mesa" },
        ]}
      />
      <section className="relative bg-white text-gray-700 h-[600px] md:h-[700px]">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mesa Landscaping Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
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
              Professional Landscaping Services in Mesa, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with trusted local
              landscaping contractors throughout Mesa, Arizona. We're proud to
              serve homeowners and businesses across all neighborhoods in Mesa,
              matching you with experienced professionals who provide expert
              care for your outdoor spaces.
            </p>
          </section>

          {/* Climate and Expertise Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mesa's Desert Climate and Specialized Landscaping Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Mesa's unique desert climate requires specialized knowledge and
              expertise in landscaping. Our network of contractors understands
              the specific needs of Arizona landscapes, from water-efficient
              design to proper plant selection and maintenance. They work with
              Mesa's environment to create beautiful, sustainable landscapes
              that thrive in our climate.
            </p>
          </section>

          {/* Neighborhood Coverage Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services Across All Mesa Neighborhoods
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're in Dobson Ranch, Las Sendas, Red Mountain Ranch, or
              any other Mesa neighborhood, we bring the same commitment to
              quality and customer service. Our comprehensive services cover
              everything from routine lawn care to complete landscape
              transformations. Mesa's diverse neighborhoods each have their own
              character and landscaping needs, from established communities with
              mature trees to newer developments requiring complete landscape
              installation.
            </p>
          </section>

          {/* Landscaping Challenges Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Addressing Mesa's Unique Landscaping Challenges
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The landscaping challenges in Mesa are similar to those throughout
              the East Valley - water conservation, heat tolerance, and low
              maintenance requirements are priorities for most homeowners. Our
              contractors specialize in creating landscapes that address these
              concerns while still providing beautiful, functional outdoor
              spaces. They understand the importance of selecting plants that
              thrive in Mesa's climate, designing irrigation systems that
              maximize efficiency, and choosing materials that can withstand the
              intense Arizona sun.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gilbert Yard Pros for Mesa Landscaping
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When you work with contractors through Gilbert Yard Pros, you're
              not just getting landscaping services - you're getting access to
              professionals who understand Mesa's unique environment and can
              help you create outdoor spaces that enhance your quality of life
              and property value. From small maintenance tasks to major
              landscape renovations, our contractors are equipped to handle
              projects of all sizes and complexities. They stay current with the
              latest landscaping trends, techniques, and materials, ensuring you
              receive modern solutions that are both beautiful and practical.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in Mesa
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide landscaping services throughout Mesa, Arizona, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-700">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Don't see your neighborhood listed? We serve all areas of Mesa,
            Arizona. Contact us to confirm service availability in your specific
            location.
          </p>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional landscaping services in
              Mesa, Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Get Quote
              </a>
              <a
                href="tel:4809876110"
                className="inline-block bg-transparent text-gray-700 border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
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
