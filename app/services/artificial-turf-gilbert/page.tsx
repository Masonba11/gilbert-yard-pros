import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Artificial Turf Gilbert AZ | Professional Installation | Gilbert Yard Pros",
  description:
    "Professional artificial turf installation in Gilbert, Arizona. High-quality synthetic grass for low-maintenance, beautiful lawns. Free estimates!",
  openGraph: {
    title: "Artificial Turf Gilbert AZ | Professional Installation | Gilbert Yard Pros",
    description:
      "Professional artificial turf installation in Gilbert, Arizona. High-quality synthetic grass for low-maintenance, beautiful lawns. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/artificial-turf-gilbert",
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
    title: "Artificial Turf Gilbert AZ | Professional Installation | Gilbert Yard Pros",
    description:
      "Professional artificial turf installation in Gilbert, Arizona. High-quality synthetic grass for low-maintenance, beautiful lawns. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Artificial Turf Gilbert AZ",
  areaServed: {
    "@type": "City",
    name: "Gilbert",
  },
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Gilbert Yard Pros",
    url: "https://www.gilbertyardpros.com",
  },
};

export default function ArtificialTurfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Artificial Turf Gilbert",
            href: "/services/artificial-turf-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/turf.jpg"
          alt="Artificial Turf Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Artificial Turf Gilbert AZ
          </h1>
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
      </section>
      <article className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Artificial Turf Installation in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer artificial turf installation in Gilbert, AZ. Our network
              of landscaping professionals specializes in high-quality synthetic
              grass solutions that provide a lush, green appearance without the
              constant maintenance and water requirements of natural grass.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Artificial turf is an excellent choice for Gilbert homeowners who
              want to conserve water, reduce maintenance costs, and enjoy a
              beautiful lawn regardless of the season. Get matched with
              contractors who work with premium turf products designed to
              withstand Arizona's intense sun and heat while maintaining their
              vibrant appearance and soft texture.
            </p>
          </section>

          {/* Why Choose Artificial Turf Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Artificial Turf in Gilbert
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We connect you with contractors who work with industry-leading
              artificial turf manufacturers to offer you the best options for
              your specific needs. Whether you're looking to replace your entire
              lawn, create a pet-friendly area, or install turf in a challenging
              location, our contractors ensure a seamless, professional result
              that enhances your property's value and appeal. Modern artificial
              turf technology has advanced significantly, offering products that
              look and feel remarkably like natural grass while providing
              superior durability and performance.
            </p>
            <p className="text-lg text-gray-700">
              In Gilbert's climate, artificial turf offers significant
              advantages over natural grass. Water conservation is a major
              concern in Arizona, and artificial turf eliminates the need for
              regular watering, saving thousands of gallons of water annually.
              Additionally, you'll save time and money on mowing, fertilizing,
              and other maintenance tasks. Our contractors understand the
              importance of proper installation, including adequate drainage
              systems that prevent water accumulation during monsoon season.
              They also know how to select turf products with UV protection to
              prevent fading in Arizona's intense sunlight, ensuring your
              investment maintains its appearance for years to come.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="artificial turf installation" />
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Artificial Turf
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
              <li>Significant water savings - perfect for Gilbert's climate</li>
              <li>No mowing, fertilizing, or watering required</li>
              <li>Stays green and beautiful year-round</li>
              <li>Pet-friendly and durable for high-traffic areas</li>
              <li>Reduces maintenance time and costs</li>
              <li>Eco-friendly alternative to natural grass</li>
              <li>Perfect for areas with poor soil or drainage</li>
              <li>Increases property value with low-maintenance landscaping</li>
            </ul>
          </section>

          {/* Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect from Artificial Turf Installation Contractors
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Site Assessment & Design
                </h3>
                <p className="text-gray-700">
                  Contractors in our network evaluate your property, discuss
                  your goals, and help you select the perfect artificial turf
                  product. They consider factors like usage, drainage, and
                  aesthetic preferences.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Site Preparation
                </h3>
                <p className="text-gray-700">
                  Proper preparation is essential. Contractors remove existing
                  grass, level the surface, and ensure proper drainage. This
                  foundation work ensures your turf will look great and perform
                  well for years.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Base Installation
                </h3>
                <p className="text-gray-700">
                  Contractors install a compacted base layer, typically using
                  decomposed granite or similar material, which provides
                  stability, drainage, and a level surface for the turf.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  4. Turf Installation
                </h3>
                <p className="text-gray-700">
                  Skilled contractors carefully lay the artificial turf,
                  ensuring proper alignment, seamless seams, and precise cutting
                  around obstacles and edges.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  5. Finishing & Infill
                </h3>
                <p className="text-gray-700">
                  Contractors apply infill material to support the turf fibers,
                  add weight for stability, and enhance the natural look and
                  feel. They complete the installation with final trimming and
                  cleanup.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How much does artificial turf cost in Gilbert?
                </h3>
                <p className="text-gray-700">
                  Artificial turf costs vary based on the size of the area, type
                  of turf selected, site preparation requirements, and
                  installation complexity. Contractors in our network provide
                  detailed, free estimates for all projects in Gilbert.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long does artificial turf last?
                </h3>
                <p className="text-gray-700">
                  High-quality artificial turf can last 15-20 years or more with
                  proper installation and minimal maintenance. The lifespan
                  depends on the product quality, usage, and environmental
                  factors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is artificial turf safe for pets?
                </h3>
                <p className="text-gray-700">
                  Yes, modern artificial turf is pet-friendly. It's easy to
                  clean, drains well, and doesn't harbor pests. We can recommend
                  specific pet-friendly turf options and installation
                  techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Does artificial turf get hot in the Arizona sun?
                </h3>
                <p className="text-gray-700">
                  Artificial turf can get warm in direct sunlight, but modern
                  products are designed to minimize heat retention. We can
                  discuss cooling options and placement strategies during your
                  consultation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can artificial turf be installed over existing grass?
                </h3>
                <p className="text-gray-700">
                  No, existing grass must be removed before installation. Proper
                  site preparation is essential for a successful, long-lasting
                  artificial turf installation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-primary-green text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready for Artificial Turf in Gilbert?
              </h2>
              <p className="text-xl mb-6">
                Contact Gilbert Yard Pros for a free estimate on your artificial
                turf installation
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

          <InternalLinks />
        </div>
      </article>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
