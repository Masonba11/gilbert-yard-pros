import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Tan Valley Landscaping Services | Gilbert Yard Pros",
  description:
    "Professional landscaping services throughout San Tan Valley, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
  openGraph: {
    title: "San Tan Valley Landscaping Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout San Tan Valley, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    url: "https://www.gilbertyardpros.com/service-areas/san-tan-valley",
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
    title: "San Tan Valley Landscaping Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services throughout San Tan Valley, Arizona. Serving all neighborhoods with expert lawn care, tree trimming, paver installation, and more.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gilbert Yard Pros",
  description:
    "Connect with trusted local landscaping contractors in San Tan Valley, Arizona",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Tan Valley",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "San Tan Valley",
  },
  url: "https://www.gilbertyardpros.com",
  telephone: "480-987-6110",
};

const neighborhoods = [
  "Johnson Ranch",
  "San Tan Heights",
  "San Tan Foothills",
  "Encanterra",
  "Anthem",
  "San Tan Ranch",
  "Ironwood Crossing",
  "San Tan Mountain",
  "San Tan Heights",
  "San Tan Lakes",
  "San Tan Ridge",
  "San Tan Estates",
];

export default function SanTanValleyServiceAreaPage() {
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
          { label: "San Tan Valley", href: "/service-areas/san-tan-valley" },
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
              San Tan Valley Landscaping Services
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
              Professional Landscaping Services in San Tan Valley, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with trusted local
              landscaping contractors throughout San Tan Valley, Arizona. We're
              proud to serve homeowners and businesses across all neighborhoods
              in San Tan Valley, matching you with experienced professionals who
              provide expert care for your outdoor spaces.
            </p>
          </section>

          {/* Climate and Expertise Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              San Tan Valley's Desert Climate and Specialized Landscaping
              Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              San Tan Valley's unique desert climate requires specialized
              knowledge and expertise in landscaping. Our network of contractors
              understands the specific needs of Arizona landscapes, from
              water-efficient design to proper plant selection and maintenance.
              They work with San Tan Valley's environment to create beautiful,
              sustainable landscapes that thrive in our climate.
            </p>
          </section>

          {/* Neighborhood Coverage Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Services Across All San Tan Valley
              Neighborhoods
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're in Johnson Ranch, San Tan Heights, Encanterra, or
              any other San Tan Valley neighborhood, we bring the same
              commitment to quality and customer service. Our comprehensive
              services cover everything from routine lawn care to complete
              landscape transformations. San Tan Valley's rapid growth has
              created many new communities, each offering opportunities to
              establish beautiful landscapes from the ground up.
            </p>
          </section>

          {/* Growth and Opportunities Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Landscaping Opportunities in San Tan Valley's Growing Communities
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              As one of the fastest-growing areas in the East Valley, San Tan
              Valley presents unique landscaping opportunities and challenges.
              New construction often means starting with bare lots, allowing for
              complete landscape design and installation. Our contractors excel
              at working with new construction sites, understanding how to
              establish landscapes that will mature beautifully over time. They
              also work with established properties, helping homeowners refresh
              and update their outdoor spaces.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gilbert Yard Pros for San Tan Valley Landscaping
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The contractors serving San Tan Valley through Gilbert Yard Pros
              understand the area's specific characteristics, including its
              proximity to the San Tan Mountains and the unique microclimates
              that can exist in different parts of the valley. They're
              experienced in working with the native soil conditions and can
              recommend plants and materials that will thrive in this
              environment. Whether you're a new homeowner establishing your
              first landscape or a long-time resident ready for a change, our
              contractors bring the expertise needed to create outdoor spaces
              that enhance your property and lifestyle.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in San Tan Valley
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide landscaping services throughout San Tan Valley, Arizona,
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
            Don't see your neighborhood listed? We serve all areas of San Tan
            Valley, Arizona. Contact us to confirm service availability in your
            specific location.
          </p>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional landscaping services in
              San Tan Valley, Arizona
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
