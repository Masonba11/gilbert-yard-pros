import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landscape Lighting Gilbert AZ | Professional Installation | Gilbert Yard Pros",
  description:
    "Professional landscape lighting installation in Gilbert, Arizona. Expert outdoor lighting for safety and ambiance. Free estimates!",
  openGraph: {
    title:
      "Landscape Lighting Gilbert AZ | Professional Installation | Gilbert Yard Pros",
    description:
      "Professional landscape lighting installation in Gilbert, Arizona. Expert outdoor lighting for safety and ambiance. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/landscape-lighting-gilbert",
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
      "Landscape Lighting Gilbert AZ | Professional Installation | Gilbert Yard Pros",
    description:
      "Professional landscape lighting installation in Gilbert, Arizona. Expert outdoor lighting for safety and ambiance. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscape Lighting Gilbert AZ",
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

export default function LandscapeLightingPage() {
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
            label: "Landscape Lighting Gilbert",
            href: "/services/landscape-lighting-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/landscapelighting.jpg"
          alt="Landscape Lighting Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Landscape Lighting Gilbert AZ
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
              Professional Landscape Lighting Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer landscape lighting installation in Gilbert, AZ. Our
              network of landscaping professionals designs and installs outdoor
              lighting systems that enhance safety, security, and the beauty of
              your property after dark.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Well-designed landscape lighting extends the enjoyment of your
              outdoor space into the evening hours while providing important
              safety and security benefits. We match you with contractors whose
              lighting installations highlight architectural features,
              illuminate pathways, create ambiance, and deter intruders.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="landscape lighting" />
          </section>

          {/* Lighting Technology Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modern Landscape Lighting Technology
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Get matched with contractors who work with both low-voltage and
              line-voltage lighting systems, LED technology, and smart lighting
              controls. Their designs balance functionality with aesthetics,
              creating lighting schemes that enhance your landscape's best
              features while providing practical illumination where needed.
              Modern LED lighting technology offers energy efficiency, long
              lifespan, and excellent color rendering.
            </p>
          </section>

          {/* Landscape Lighting Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Professional Landscape Lighting
            </h2>
            <p className="text-lg text-gray-700">
              Landscape lighting serves multiple purposes beyond simple
              illumination. Well-placed lights enhance safety by illuminating
              pathways, steps, and potential hazards. Security lighting can
              deter intruders and provide peace of mind. Accent lighting
              highlights architectural features, trees, and other landscape
              elements, creating visual interest and extending the enjoyment of
              your outdoor space into the evening. In Gilbert, where evenings
              are often pleasant for outdoor activities, landscape lighting
              allows you to make the most of your outdoor spaces year-round. Our
              contractors understand lighting design principles and can create
              schemes that combine all these elements into a cohesive, beautiful
              system.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benefits of Professional Landscape Lighting
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Enhances safety with illuminated pathways</li>
            <li>Improves security by deterring intruders</li>
            <li>Extends outdoor living into evening hours</li>
            <li>Highlights landscape features and architecture</li>
            <li>Increases property value</li>
            <li>Energy-efficient LED options available</li>
            <li>Smart controls for convenience</li>
            <li>Creates beautiful nighttime ambiance</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What to Expect from Landscape Lighting Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Design Consultation
              </h3>
              <p className="text-gray-700">
                Contractors in our network assess your property, discuss your
                lighting goals, and design a lighting plan that addresses
                safety, security, and aesthetic needs. We consider your
                landscape features and usage patterns.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. System Planning
              </h3>
              <p className="text-gray-700">
                We plan fixture placement, select appropriate lighting types,
                determine power requirements, and design the electrical layout.
                We choose between low-voltage and line-voltage systems based on
                your needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Installation
              </h3>
              <p className="text-gray-700">
                Our licensed electricians install fixtures, run wiring, install
                transformers or connections, and set up controls. We ensure all
                work meets electrical codes and safety standards.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Programming & Testing
              </h3>
              <p className="text-gray-700">
                We program timers or smart controls, adjust fixture angles and
                brightness, and test the system to ensure optimal performance
                and appearance.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How much does landscape lighting cost in Gilbert?
              </h3>
              <p className="text-gray-700">
                Lighting costs vary based on the number of fixtures, system
                type, installation complexity, and features like smart controls.
                Contractors in our network provide detailed estimates for all
                lighting projects in Gilbert.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of landscape lighting do you install?
              </h3>
              <p className="text-gray-700">
                Contractors in our network install path lights, spotlights,
                floodlights, deck lights, step lights, wall wash lights, and
                more. We'll recommend appropriate fixtures for each application.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you install LED lighting?
              </h3>
              <p className="text-gray-700">
                Yes, we install energy-efficient LED landscape lighting. LED
                lights last longer, use less energy, and provide excellent
                illumination for outdoor spaces.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can lighting be controlled with smart systems?
              </h3>
              <p className="text-gray-700">
                Yes, we install smart lighting controls that allow you to adjust
                lighting from your phone, set schedules, and create lighting
                scenes. We can integrate with various smart home systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you provide lighting maintenance and repairs?
              </h3>
              <p className="text-gray-700">
                Yes, we provide maintenance and repair services for existing
                landscape lighting systems. We can replace fixtures, repair
                wiring, update controls, and maintain your lighting system.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for Landscape Lighting in Gilbert?
            </h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for a free estimate on your landscape
              lighting installation
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

          <InternalLinks />
        </div>
      </article>
      <PartnerSection />
      <ContactForm />
    </>
  );
}
