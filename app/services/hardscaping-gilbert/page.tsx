import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hardscaping Gilbert AZ | Custom Hardscape Installation | Gilbert Yard Pros",
  description:
    "Professional hardscaping services in Gilbert, Arizona. Custom patios, retaining walls, fire features, and more. Free estimates!",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hardscaping Gilbert AZ",
  provider: {
    "@type": "LandscapingCompany",
    name: "Gilbert Yard Pros",
  },
  areaServed: "Gilbert, Arizona",
};

export default function HardscapingPage() {
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
            label: "Hardscaping Gilbert",
            href: "/services/hardscaping-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landscapeinstallation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Hardscaping Gilbert AZ
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
              Professional Hardscaping Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer hardscaping services in Gilbert, AZ. Our network of
              landscaping professionals designs and installs custom hardscape
              features including patios, retaining walls, fire features, outdoor
              kitchens, and more to enhance your property's beauty and
              functionality.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Hardscaping adds structure, functionality, and visual interest to
              your landscape. We match you with contractors who combine design
              expertise with quality craftsmanship to create hardscape features
              that complement your home and provide years of enjoyment. They
              work with various materials including natural stone, pavers,
              concrete, and more.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="hardscaping" />
          </section>

          {/* Hardscaping Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Hardscaping Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              From intimate patios to expansive outdoor living areas, get
              matched with contractors whose hardscaping services transform your
              outdoor space into functional extensions of your home. Our
              contractors understand Gilbert's climate and soil conditions,
              ensuring every hardscape installation is built to last and perform
              beautifully in Arizona's environment. Hardscaping projects
              represent significant investments that should provide years of
              enjoyment and enhance property value.
            </p>
          </section>

          {/* Hardscape Design and Installation Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Hardscape Design and Installation
            </h2>
            <p className="text-lg text-gray-700">
              The design and installation of hardscape features requires careful
              planning and execution. Our contractors consider factors such as
              drainage, slope, material selection, and integration with existing
              landscape features. They understand how to create outdoor spaces
              that are both beautiful and functional, whether you're looking for
              a simple patio for morning coffee or a complete outdoor kitchen
              for entertaining. In Gilbert's climate, materials must withstand
              intense sun, heat, and occasional heavy rains. Our contractors
              select and install materials that are appropriate for these
              conditions, ensuring your hardscape investment maintains its
              appearance and functionality for years to come.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benefits of Professional Hardscaping
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Creates functional outdoor living spaces</li>
            <li>Increases property value significantly</li>
            <li>Low maintenance compared to plantings</li>
            <li>Defines and organizes outdoor areas</li>
            <li>Durable and long-lasting</li>
            <li>Adds visual interest and texture</li>
            <li>Improves drainage and erosion control</li>
            <li>Extends usable living space outdoors</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What to Expect from Hardscaping Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Design & Planning
              </h3>
              <p className="text-gray-700">
                Contractors in our network work with you to design hardscape
                features that meet your needs and complement your property. We
                consider function, aesthetics, materials, and budget in the
                planning process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Site Preparation
              </h3>
              <p className="text-gray-700">
                Proper site preparation is crucial for long-lasting hardscapes.
                We excavate, level, and prepare the base according to project
                requirements and local conditions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Installation
              </h3>
              <p className="text-gray-700">
                Our skilled craftsmen install hardscape features with attention
                to detail, ensuring proper construction, alignment, and
                finishing for professional results.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Finishing & Cleanup
              </h3>
              <p className="text-gray-700">
                Contractors in our network complete installations with final
                touches, sealing if applicable, and thorough cleanup. We ensure
                your property is ready to enjoy immediately.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What hardscape features do you install?
              </h3>
              <p className="text-gray-700">
                Contractors in our network install patios, walkways, driveways,
                retaining walls, fire pits, fireplaces, outdoor kitchens,
                pergolas, water features, and more. We can discuss specific
                features during your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How much does hardscaping cost in Gilbert?
              </h3>
              <p className="text-gray-700">
                Hardscaping costs vary significantly based on project size,
                materials selected, complexity, and site conditions. Contractors
                in our network provide detailed estimates for all hardscaping
                projects in Gilbert.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What materials do you work with?
              </h3>
              <p className="text-gray-700">
                Contractors in our network work with various materials including
                natural stone, pavers, concrete, flagstone, travertine, and
                more. We'll help you select materials that fit your style and
                budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do hardscapes require permits in Gilbert?
              </h3>
              <p className="text-gray-700">
                Some hardscape projects may require permits, especially for
                structures like retaining walls or fire features. We handle
                permit applications and ensure all work meets local codes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How long does hardscape installation take?
              </h3>
              <p className="text-gray-700">
                Installation time varies by project size and complexity. Simple
                patios may take a few days, while larger projects with multiple
                features may take several weeks. We'll provide timelines during
                your consultation.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Hardscaping in Gilbert?
            </h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for a free estimate on your hardscaping
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

          <InternalLinks />
        </div>
      </article>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
