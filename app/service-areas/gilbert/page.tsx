import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Services in Gilbert, Arizona | Gilbert Yard Pros",
  description:
    "Professional landscaping services throughout Gilbert, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
  openGraph: {
    title: "Landscaping Services in Gilbert, Arizona | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout Gilbert, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    url: "https://www.gilbertyardpros.com/service-areas/gilbert",
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
    title: "Landscaping Services in Gilbert, Arizona | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout Gilbert, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gilbert Yard Pros",
  description:
    "Connect with trusted local landscaping contractors in Gilbert, Arizona",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gilbert",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Gilbert",
    sameAs: "https://en.wikipedia.org/wiki/Gilbert,_Arizona",
  },
  url: "https://www.gilbertyardpros.com",
  telephone: "480-987-6110",
};

const neighborhoods = [
  "Val Vista Lakes",
  "Seville",
  "Power Ranch",
  "Higley",
  "Agritopia",
  "Copper Basin",
  "San Tan Ranch",
  "Ocotillo",
  "Layton Lakes",
  "Gilbert Estates",
  "Mesquite Groves",
  "Sunset Ranch",
];

const services = [
  { name: "Pavers", href: "/services/pavers-gilbert" },
  { name: "Artificial Turf", href: "/services/artificial-turf-gilbert" },
  { name: "Irrigation Installations", href: "/services/irrigation-gilbert" },
  { name: "Tree Trimming", href: "/services/tree-trimming-gilbert" },
  { name: "Yard Clean Up", href: "/services/yard-clean-up-gilbert" },
  { name: "Weed Control", href: "/services/weed-control-gilbert" },
  { name: "Maintenance", href: "/services/landscape-maintenance-gilbert" },
  { name: "Lawn Care", href: "/services/lawn-care-gilbert" },
  { name: "Landscape Design", href: "/services/landscape-design-gilbert" },
  { name: "Hardscaping", href: "/services/hardscaping-gilbert" },
  { name: "Landscape Lighting", href: "/services/landscape-lighting-gilbert" },
  { name: "Landscape Rock", href: "/services/landscape-rock-gilbert" },
];

export default function GilbertServiceAreaPage() {
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
          { label: "Gilbert", href: "/service-areas/gilbert" },
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Landscaping Services in Gilbert, Arizona
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
              Professional Landscaping Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with trusted local
              landscaping contractors throughout Gilbert, Arizona. We're proud
              to serve homeowners and businesses across all neighborhoods in
              Gilbert, matching you with experienced professionals who provide
              expert care for your outdoor spaces.
            </p>
          </section>

          {/* Climate and Expertise Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gilbert's Desert Climate and Specialized Landscaping Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Gilbert's unique desert climate requires specialized knowledge and
              expertise in landscaping. Our network of contractors understands
              the specific needs of Arizona landscapes, from water-efficient
              design to proper plant selection and maintenance. They work with
              Gilbert's environment to create beautiful, sustainable landscapes
              that thrive in our climate.
            </p>
          </section>

          {/* Neighborhood Coverage Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services Across All Gilbert
              Neighborhoods
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're in Val Vista Lakes, Seville, Power Ranch, Higley,
              or any other Gilbert neighborhood, we bring the same commitment to
              quality and customer service. Our comprehensive services cover
              everything from routine lawn care to complete landscape
              transformations. Gilbert's reputation as one of Arizona's most
              desirable places to live is reflected in the quality of its
              neighborhoods and the attention homeowners pay to their
              properties.
            </p>
          </section>

          {/* Growth and Community Standards Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Working with Gilbert's Growing Communities and HOA Requirements
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Gilbert has experienced significant growth over the years,
              creating a mix of established communities with mature landscapes
              and newer developments where homeowners are establishing their
              outdoor spaces. Our contractors are experienced in working with
              both scenarios - maintaining and enhancing existing landscapes, as
              well as creating new ones from scratch. They understand Gilbert's
              community standards and HOA requirements, which can vary by
              neighborhood.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gilbert Yard Pros for Gilbert Landscaping
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The landscaping professionals in our network serving Gilbert bring
              local expertise that's invaluable for creating successful outdoor
              spaces. They understand the specific soil conditions, drainage
              patterns, and microclimates that can exist in different parts of
              Gilbert. This local knowledge, combined with their technical
              skills and design expertise, ensures that your landscaping project
              will be both beautiful and functional. Whether you're looking to
              enhance your home's curb appeal, create outdoor living spaces, or
              establish a low-maintenance landscape, our contractors can help
              you achieve your goals while working within Gilbert's water
              conservation guidelines and community standards.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in Gilbert
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide landscaping services throughout Gilbert, Arizona,
            including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-700">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Don't see your neighborhood listed? We serve all areas of Gilbert,
            Arizona. Contact us to confirm service availability in your specific
            location.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services in Gilbert
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer comprehensive landscaping services throughout Gilbert:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-primary-green text-white rounded-lg p-4 hover:bg-primary-green-dark transition-colors"
              >
                <p className="font-semibold">{service.name}</p>
              </Link>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Gilbert Yard Pros?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Local expertise in Gilbert's climate and landscaping needs</li>
            <li>Comprehensive services from design to maintenance</li>
            <li>Water-efficient solutions for Arizona landscapes</li>
            <li>Experienced, professional team</li>
            <li>Competitive pricing and free estimates</li>
            <li>Commitment to customer satisfaction</li>
            <li>Serving all Gilbert neighborhoods</li>
            <li>Licensed and insured professionals</li>
          </ul>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional landscaping services in
              Gilbert, Arizona
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
