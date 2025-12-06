import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Paver Installation Gilbert AZ | Gilbert Yard Pros",
  description:
    "Professional landscape paver installation in Gilbert, Arizona. Expert patio, walkway, and driveway paver services. Free estimates!",
  openGraph: {
    title: "Landscape Paver Installation Gilbert AZ | Gilbert Yard Pros",
    description:
      "Professional landscape paver installation in Gilbert, Arizona. Expert patio, walkway, and driveway paver services. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/pavers-gilbert",
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
    title: "Landscape Paver Installation Gilbert AZ | Gilbert Yard Pros",
    description:
      "Professional landscape paver installation in Gilbert, Arizona. Expert patio, walkway, and driveway paver services. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pavers Gilbert AZ",
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

export default function PaversPage() {
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
          { label: "Pavers Gilbert", href: "/services/pavers-gilbert" },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/pavers.jpg"
          alt="Paver Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Pavers Gilbert AZ
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
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Paver Installation in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer paver installation in Gilbert, AZ. Our network of
              landscaping professionals specializes in creating stunning patios,
              walkways, driveways, and outdoor living areas using high-quality
              pavers that enhance both the beauty and functionality of your
              property.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We match you with qualified contractors who understand the unique
              climate and soil conditions in Gilbert, ensuring that every paver
              installation is built to last. Whether you're looking to create an
              elegant patio for entertaining, a durable driveway, or beautiful
              walkways throughout your landscape, our contractors have the
              expertise to bring your vision to life.
            </p>
          </section>

          {/* Paver Materials Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Paver Materials and Options
            </h2>
            <p className="text-lg text-gray-700">
              Get matched with contractors who work with a wide variety of paver
              materials including concrete pavers, natural stone, brick, and
              travertine, allowing you to choose the perfect style to complement
              your home's architecture and your personal preferences. Each
              material offers unique benefits - concrete pavers provide
              durability and cost-effectiveness, natural stone offers timeless
              beauty and character, brick delivers classic charm, and travertine
              provides elegant sophistication. Our contractors can help you
              select the best option based on your aesthetic preferences,
              budget, and functional requirements.
            </p>
          </section>

          {/* Climate Considerations Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Paver Installation for Gilbert's Climate
            </h2>
            <p className="text-lg text-gray-700">
              Paver installations in Gilbert require careful consideration of
              the local climate. The intense Arizona sun, temperature
              fluctuations, and occasional monsoon rains can impact hardscape
              materials. Our contractors understand these challenges and use
              installation techniques and materials specifically suited for
              desert conditions. They ensure proper base preparation, adequate
              drainage, and appropriate jointing materials to create
              installations that will withstand the test of time and weather.
              Whether you're creating a small patio for intimate gatherings or a
              large driveway for multiple vehicles, our contractors have the
              expertise to deliver results that combine beauty, functionality,
              and durability.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="paver installation" />
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Professional Paver Installation
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
              <li>
                Durable and long-lasting surface that withstands Gilbert's
                climate
              </li>
              <li>Low maintenance compared to other hardscape materials</li>
              <li>Increases property value and curb appeal</li>
              <li>Wide variety of colors, textures, and patterns available</li>
              <li>Permeable options available for better drainage</li>
              <li>Can be easily repaired or replaced if needed</li>
              <li>Creates defined outdoor living spaces</li>
              <li>
                Resistant to cracking and shifting when properly installed
              </li>
            </ul>
          </section>

          {/* Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect from Paver Installation Contractors
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Consultation & Design
                </h3>
                <p className="text-gray-700">
                  Contractors in our network begin with a comprehensive
                  consultation to understand your vision, assess your property,
                  and discuss your budget. They'll help you select the perfect
                  paver style and create a design plan.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Site Preparation
                </h3>
                <p className="text-gray-700">
                  Proper site preparation is crucial for a long-lasting
                  installation. Contractors excavate the area, ensure proper
                  drainage, and create a stable base using appropriate
                  materials.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Professional Installation
                </h3>
                <p className="text-gray-700">
                  Experienced contractors carefully place each paver according
                  to your design, ensuring precise alignment, consistent
                  spacing, and proper pattern execution. They complete the
                  installation with finishing touches and cleanup.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Professional Paver Installation in Gilbert
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Professional paver installation offers numerous advantages over
              DIY projects or alternative hardscape materials. When you work
              with contractors through Gilbert Yard Pros, you benefit from their
              extensive experience with local soil conditions, drainage
              requirements, and climate considerations. Proper installation is
              critical - even the highest quality pavers will fail if not
              installed correctly. Our contractors understand the importance of
              proper base preparation, which typically involves excavating to
              the appropriate depth, installing a compacted base layer, and
              ensuring proper slope for drainage.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In Gilbert's climate, thermal expansion and contraction can cause
              issues with improperly installed pavers. Our contractors account
              for these factors by using appropriate jointing materials, edge
              restraints, and installation techniques. They also understand
              local building codes and permit requirements, ensuring your
              project complies with all regulations. Additionally, professional
              installation typically comes with warranties, giving you peace of
              mind that your investment is protected.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Beyond technical expertise, our contractors bring design knowledge
              that can help you create outdoor spaces that are both beautiful
              and functional. They can suggest patterns, colors, and layouts
              that complement your home's architecture and maximize your
              property's potential. Whether you're looking to create a welcoming
              entryway, an entertainment area, or a functional driveway,
              professional installation ensures your vision becomes reality with
              lasting quality.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How much does paver installation cost in Gilbert?
                </h3>
                <p className="text-gray-700">
                  Paver installation costs vary based on the size of the
                  project, type of pavers selected, site preparation
                  requirements, and design complexity. Contractors in our
                  network provide detailed, free estimates for all projects in
                  Gilbert.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What types of pavers do you install?
                </h3>
                <p className="text-gray-700">
                  Contractors in our network install various paver types
                  including concrete pavers, natural stone, brick, travertine,
                  and permeable pavers. We'll help you choose the best option
                  for your specific needs and budget.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long does paver installation take?
                </h3>
                <p className="text-gray-700">
                  Installation time depends on the project size and complexity.
                  A typical patio installation takes 2-5 days, while larger
                  projects may take longer. We'll provide a timeline during your
                  consultation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do pavers require maintenance?
                </h3>
                <p className="text-gray-700">
                  Pavers are relatively low maintenance. Regular sweeping,
                  occasional power washing, and periodic resealing (if
                  applicable) will keep them looking great for years to come.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can pavers be installed over existing concrete?
                </h3>
                <p className="text-gray-700">
                  In some cases, pavers can be installed over existing concrete
                  if the surface is in good condition. However, proper
                  preparation and assessment are necessary to ensure a
                  successful installation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-primary-green text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Install Pavers in Gilbert?
              </h2>
              <p className="text-xl mb-6">
                Contact Gilbert Yard Pros for a free estimate on your paver
                installation project
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
          </section>

          <InternalLinks />
        </div>
      </article>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
