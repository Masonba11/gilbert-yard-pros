import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Services in Gilbert, Arizona | Gilbert Yard Pros",
  description:
    "Complete landscaping services in Gilbert, AZ. Paver installation, artificial turf, irrigation, tree trimming, yard clean up, weed control, and more.",
  openGraph: {
    title: "Landscaping Services in Gilbert, Arizona | Gilbert Yard Pros",
    description:
      "Complete landscaping services in Gilbert, AZ. Paver installation, artificial turf, irrigation, tree trimming, yard clean up, weed control, and more.",
    url: "https://www.gilbertyardpros.com/services",
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
      "Complete landscaping services in Gilbert, AZ. Paver installation, artificial turf, irrigation, tree trimming, yard clean up, weed control, and more.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const services = [
  {
    title: "Landscape Paver Installation",
    description:
      "Professional paver installation for patios, walkways, and driveways in Gilbert.",
    href: "/services/pavers-gilbert",
    imageUrl: "/pavers.jpg",
  },
  {
    title: "Artificial Turf",
    description:
      "High-quality artificial turf installation for a beautiful, low-maintenance lawn.",
    href: "/services/artificial-turf-gilbert",
    imageUrl: "/turf.jpg",
  },
  {
    title: "Irrigation Systems",
    description:
      "Expert irrigation system installation and repair services in Gilbert.",
    href: "/services/irrigation-gilbert",
    imageUrl: "/irrigation.mp4",
  },
  {
    title: "Tree Trimming",
    description:
      "Professional tree trimming and pruning services in Gilbert, Arizona.",
    href: "/services/tree-trimming-gilbert",
    imageUrl: "/treetrimming.png",
  },
  {
    title: "Yard Clean Up",
    description:
      "Complete yard clean up services to restore your outdoor space.",
    href: "/services/yard-clean-up-gilbert",
    imageUrl: "/cleanup.webp",
  },
  {
    title: "Weed Control",
    description:
      "Effective weed control treatments to keep your lawn healthy and weed-free.",
    href: "/services/weed-control-gilbert",
    imageUrl: "/weedcontrol.jpg",
  },
  {
    title: "Landscape Maintenance",
    description:
      "Comprehensive landscape maintenance programs for year-round beauty.",
    href: "/services/landscape-maintenance-gilbert",
    imageUrl: "/homepageheroqc.mp4",
  },
  {
    title: "Lawn Care",
    description:
      "Complete lawn care services including fertilization, aeration, and more.",
    href: "/services/lawn-care-gilbert",
    imageUrl: "/lawncare.jpg",
  },
  {
    title: "Landscape Design",
    description:
      "Custom landscape design services to transform your outdoor space.",
    href: "/services/landscape-design-gilbert",
    imageUrl: "/landscapedesign.jpg",
  },
  {
    title: "Hardscaping",
    description:
      "Custom hardscaping solutions including patios, retaining walls, and more.",
    href: "/services/hardscaping-gilbert",
    imageUrl: "/landscapeinstallation.mp4",
  },
  {
    title: "Landscape Lighting",
    description:
      "Professional landscape lighting installation for safety and ambiance.",
    href: "/services/landscape-lighting-gilbert",
    imageUrl: "/landscapelighting.jpg",
  },
  {
    title: "Landscape Rock",
    description:
      "Landscape rock installation for beautiful, low-maintenance yards.",
    href: "/services/landscape-rock-gilbert",
    imageUrl: "/0T6A2167.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      {/* Hero Section */}
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              Landscaping Services in Gilbert, Arizona
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Get matched with trusted local contractors for landscaping,
              maintenance, turf, pavers, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-block bg-primary-green text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-green-dark transition-colors text-center"
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
              From lawn care to hardscaping, connect with trusted local
              contractors who offer comprehensive landscaping services to keep
              your Gilbert property looking its best year-round.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Gilbert Yard Pros serves as your connection to experienced
              landscaping professionals throughout Gilbert, Arizona, and the
              surrounding East Valley communities. Our network includes
              contractors specializing in every aspect of landscape design,
              installation, and maintenance. Whether you're a new homeowner
              looking to establish your landscape, or a long-time resident ready
              to refresh your outdoor space, we can connect you with the right
              professionals for your project.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The landscaping needs in Gilbert are unique due to our desert
              climate, water conservation requirements, and the desire for
              low-maintenance yet beautiful outdoor spaces. Our contractors
              understand these challenges and specialize in creating landscapes
              that are both aesthetically pleasing and environmentally
              responsible. From xeriscaping with native plants to installing
              efficient irrigation systems, our network of professionals brings
              expertise in all aspects of Arizona-friendly landscaping.
            </p>
            <p className="text-lg text-gray-700">
              Each service listed below represents a specialized area where our
              contractors excel. We carefully vet all professionals in our
              network to ensure they meet high standards for quality,
              reliability, and customer service. When you're ready to start your
              landscaping project, simply reach out to us, and we'll match you
              with qualified contractors who can provide free estimates and help
              bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 text-white">
            Get matched with trusted local contractors for your landscaping
            project
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
      </section>

      <PartnerSection />
      <ContactForm />
    </>
  );
}
