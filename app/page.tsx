import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PartnerSection from "@/components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gilbert Landscaping & Yard Maintenance Services | Gilbert Yard Pros",
  description:
    "Professional landscaping services in Gilbert, AZ. Expert lawn care, tree trimming, paver installation, artificial turf, irrigation, and yard maintenance. Free estimates!",
  openGraph: {
    title:
      "Gilbert Landscaping & Yard Maintenance Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services in Gilbert, AZ. Expert lawn care, tree trimming, paver installation, artificial turf, irrigation, and yard maintenance. Free estimates!",
    url: "https://www.gilbertyardpros.com",
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
    title:
      "Gilbert Landscaping & Yard Maintenance Services | Gilbert Yard Pros",
    description:
      "Professional landscaping services in Gilbert, AZ. Expert lawn care, tree trimming, paver installation, artificial turf, irrigation, and yard maintenance. Free estimates!",
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

const faqs = [
  {
    question: "What landscaping services do you offer in Gilbert, Arizona?",
    answer:
      "We offer comprehensive landscaping services including paver installation, artificial turf, irrigation systems, tree trimming, yard clean up, weed control, landscape maintenance, lawn care, landscape design, hardscaping, landscape lighting, and landscape rock installation throughout Gilbert, AZ.",
  },
  {
    question: "How much does landscape paver installation cost in Gilbert?",
    answer:
      "Paver installation costs vary based on the size of the project, type of pavers, and complexity. We provide free estimates for all paver installation projects in Gilbert. Contact us for a detailed quote.",
  },
  {
    question: "Do you offer artificial turf installation in Gilbert?",
    answer:
      "Yes! We specialize in high-quality artificial turf installation throughout Gilbert, Arizona. Our artificial turf solutions are perfect for low-maintenance, beautiful lawns that stay green year-round.",
  },
  {
    question: "What areas of Gilbert do you serve?",
    answer:
      "We serve all neighborhoods in Gilbert, Arizona, including Val Vista Lakes, Seville, Power Ranch, Higley, and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Do you provide irrigation system installation and repair?",
    answer:
      "Yes, we offer complete irrigation system installation and repair services in Gilbert. Our team can design, install, and maintain efficient irrigation systems to keep your landscape healthy.",
  },
];

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.gilbertyardpros.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[600px] md:h-[700px] overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <div className="text-center px-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Professional Landscaping Services in Gilbert, AZ
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Get matched with trusted local contractors for landscaping,
              maintenance, turf, pavers, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="cta-button cta-button-green">
                Get Quote Now
              </a>
              <a
                href="tel:4809876110"
                className="cta-button cta-button-primary"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8 text-center">
              About Gilbert Yard Pros
            </h2>

            {/* Introduction Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Connecting Homeowners with Trusted Landscaping Contractors
              </h2>
              <p className="text-lg text-white mb-4">
                Gilbert Yard Pros connects homeowners with experienced, local
                landscaping contractors throughout Gilbert, Arizona. Our network
                of landscaping professionals specializes in everything from lawn
                care and maintenance to complete landscape transformations. We
                understand that finding the right contractor for your
                landscaping project can be challenging, which is why we've built
                a trusted network of qualified professionals who are committed
                to delivering exceptional results.
              </p>
            </div>

            {/* Services and Expertise Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Specialized Services for Arizona's Desert Climate
              </h2>
              <p className="text-lg text-white mb-4">
                Whether you need tree trimming, paver installation, artificial
                turf, irrigation systems, or comprehensive landscape
                maintenance, we'll match you with qualified contractors who
                understand Gilbert's unique climate and landscaping needs.
                Arizona's desert environment requires specialized knowledge of
                drought-tolerant plants, water-efficient irrigation systems, and
                materials that can withstand intense heat and sun exposure. Our
                contractors have years of experience working in the East Valley
                and understand the specific challenges that come with
                maintaining beautiful landscapes in this region.
              </p>
            </div>

            {/* Matching Process Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Simple and Straightforward Matching Process
              </h2>
              <p className="text-lg text-white mb-4">
                Our matching process is simple and straightforward. When you
                contact us, we take the time to understand your specific project
                requirements, budget, and timeline. We then connect you with
                contractors who have the expertise and availability to meet your
                needs. This personalized approach ensures that you're matched
                with professionals who are the right fit for your project,
                whether you're looking for routine maintenance, a complete
                landscape redesign, or specialized services like hardscaping or
                landscape lighting.
              </p>
            </div>

            {/* Get Started Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Get Matched with Licensed and Insured Professionals
              </h2>
              <p className="text-lg text-white">
                Get matched with a trusted landscaping expert today. Simply tell
                us about your project, and we'll connect you with qualified
                local contractors who can provide free estimates for your
                landscaping needs. All contractors in our network are licensed,
                insured, and committed to providing quality workmanship and
                excellent customer service. We take pride in connecting Gilbert
                homeowners with professionals who will transform their outdoor
                spaces into beautiful, functional landscapes that enhance
                property value and provide years of enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Our Landscaping Services in Gilbert
          </h2>
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
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Ready to Transform Your Yard?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95">
            Get a free estimate for your landscaping project in Gilbert, Arizona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact-form" className="cta-button cta-button-primary">
              Get Quote
            </a>
            <a
              href="tel:4809876110"
              className="cta-button cta-button-secondary"
            >
              Call 480-987-6110
            </a>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <PartnerSection />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
