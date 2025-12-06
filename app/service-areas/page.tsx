import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Gilbert Yard Pros",
  description:
    "Landscaping services in Gilbert, Mesa, Chandler, Queen Creek, and San Tan Valley, Arizona.",
  openGraph: {
    title: "Service Areas | Gilbert Yard Pros",
    description:
      "Landscaping services in Gilbert, Mesa, Chandler, Queen Creek, and San Tan Valley, Arizona.",
    url: "https://www.gilbertyardpros.com/service-areas",
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
    title: "Service Areas | Gilbert Yard Pros",
    description:
      "Landscaping services in Gilbert, Mesa, Chandler, Queen Creek, and San Tan Valley, Arizona.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceAreas = [
  {
    name: "Gilbert",
    title: "Gilbert Landscaping",
    href: "/",
    description:
      "Professional landscaping services throughout Gilbert, Arizona",
  },
  {
    name: "Mesa",
    title: "Mesa Landscaping",
    href: "/service-areas/mesa",
    description: "Expert landscaping services in Mesa, Arizona",
  },
  {
    name: "Chandler",
    title: "Chandler Landscaping",
    href: "/service-areas/chandler",
    description: "Quality landscaping services in Chandler, Arizona",
  },
  {
    name: "Queen Creek",
    title: "Queen Creek Landscaping",
    href: "/",
    description: "Landscaping services in Queen Creek, Arizona",
  },
  {
    name: "San Tan Valley",
    title: "San Tan Valley Landscaping",
    href: "/service-areas/san-tan-valley",
    description: "Professional landscaping in San Tan Valley, Arizona",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
        ]}
      />
      {/* Hero Section */}
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
              Our Service Areas
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-700 mb-4 text-center">
              Gilbert Yard Pros connects homeowners with trusted local
              landscaping contractors throughout the East Valley, Arizona.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The East Valley of Arizona, encompassing Gilbert, Mesa, Chandler,
              Queen Creek, and San Tan Valley, represents one of the
              fastest-growing regions in the state. This growth has created a
              strong demand for quality landscaping services, from new
              construction installations to maintenance and renovation of
              existing landscapes. Our network of contractors serves all these
              communities, bringing local expertise and understanding of the
              unique challenges and opportunities that exist in each area.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Each city in the East Valley has its own character, community
              standards, and specific landscaping needs. Gilbert is known for
              its family-friendly neighborhoods and well-maintained properties.
              Mesa offers a mix of established communities and newer
              developments. Chandler combines urban amenities with suburban
              living. Queen Creek maintains its rural character while
              experiencing growth. San Tan Valley represents one of the newest
              growth areas with many opportunities for new landscape
              installations. Our contractors understand these differences and
              can provide services tailored to each community's unique
              characteristics.
            </p>
            <p className="text-lg text-gray-700">
              When you work with contractors through Gilbert Yard Pros, you're
              connecting with professionals who understand the East Valley's
              climate, soil conditions, water regulations, and community
              standards. They bring years of experience working in these
              communities and can help you create landscapes that are both
              beautiful and appropriate for your specific location. Whether
              you're establishing a new landscape, maintaining an existing one,
              or renovating your outdoor space, our contractors have the
              expertise to deliver results that enhance your property and
              lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-gray-50 rounded-lg p-6 hover:bg-primary-green hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-3">{area.title}</h2>
                <p className="text-gray-600 hover:text-white">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
