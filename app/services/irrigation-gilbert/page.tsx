import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation System Installation Gilbert AZ | Gilbert Yard Pros",
  description:
    "Professional irrigation system installation and repair in Gilbert, Arizona. Expert sprinkler system services for efficient lawn watering. Free estimates!",
  openGraph: {
    title: "Irrigation System Installation Gilbert AZ | Gilbert Yard Pros",
    description:
      "Professional irrigation system installation and repair in Gilbert, Arizona. Expert sprinkler system services for efficient lawn watering. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/irrigation-gilbert",
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
    title: "Irrigation System Installation Gilbert AZ | Gilbert Yard Pros",
    description:
      "Professional irrigation system installation and repair in Gilbert, Arizona. Expert sprinkler system services for efficient lawn watering. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Irrigation Gilbert AZ",
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

export default function IrrigationPage() {
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
          { label: "Irrigation Gilbert", href: "/services/irrigation-gilbert" },
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
          <source src="/irrigation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 text-center px-4 mb-6">
            Irrigation Gilbert AZ
          </h1>
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
      </section>
      <article className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Introduction Section */}
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Professional Irrigation System Installation in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer irrigation system installation in Gilbert, AZ. Our
              network of landscaping professionals designs and installs
              efficient, water-saving irrigation systems that ensure your lawn,
              plants, and trees receive the right amount of water at the right
              time.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In Gilbert's desert climate, proper irrigation is essential for
              maintaining a thriving landscape. We match you with contractors
              who understand the unique watering needs of Arizona landscapes and
              create customized irrigation solutions that maximize water
              efficiency while promoting healthy plant growth.
            </p>
          </section>

          {/* Irrigation Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Comprehensive Irrigation Services
            </h2>
            <p className="text-lg text-gray-700">
              Whether you need a complete new irrigation system, system
              upgrades, repairs, or maintenance, we'll connect you with
              qualified contractors who work with quality components and modern
              technology including smart controllers, drip irrigation, and
              efficient sprinkler systems to help you conserve water and reduce
              costs. Water efficiency is crucial in Gilbert, where water
              conservation regulations and costs make efficient irrigation
              systems essential for responsible landscape management.
            </p>
          </section>

          {/* Modern Irrigation Technology Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Modern Irrigation Technology
            </h2>
            <p className="text-lg text-gray-700">
              Modern irrigation technology has revolutionized landscape watering
              in Arizona. Smart controllers can adjust watering schedules based
              on weather conditions, soil moisture levels, and local water
              restrictions. Drip irrigation systems deliver water directly to
              plant roots, minimizing evaporation and runoff. Our contractors
              understand how to design and install systems that maximize
              efficiency while ensuring your landscape receives adequate
              hydration. They're also experienced in working with Gilbert's
              water regulations and can help you create systems that comply with
              local requirements while maintaining beautiful, healthy
              landscapes.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="irrigation system installation" />
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Benefits of Professional Irrigation Systems
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
              <li>
                Efficient water usage - saves money and conserves resources
              </li>
              <li>Consistent, automated watering for healthy landscapes</li>
              <li>Customizable zones for different plant watering needs</li>
              <li>Smart controllers for weather-based adjustments</li>
              <li>Reduces manual watering time and effort</li>
              <li>Prevents overwatering and underwatering</li>
              <li>Increases property value with professional installation</li>
              <li>Drip irrigation options for water-efficient plant care</li>
            </ul>
          </section>

          {/* Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              What to Expect from Irrigation Installation Contractors
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1. Site Analysis & Design
                </h3>
                <p className="text-gray-700">
                  Contractors in our network assess your property, identify
                  plant types and watering needs, and design a customized
                  irrigation system. The contractor's design considers water
                  pressure, coverage areas, and efficiency requirements.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2. System Planning
                </h3>
                <p className="text-gray-700">
                  Contractors in our network create a detailed plan including
                  zone layouts, sprinkler placement, controller location, and
                  water source connections. This ensures optimal coverage and
                  efficiency.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  3. Installation
                </h3>
                <p className="text-gray-700">
                  Qualified contractors install pipes, valves, sprinkler heads,
                  and controllers according to your design. They ensure proper
                  depth, spacing, and connections for reliable operation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  4. Controller Programming
                </h3>
                <p className="text-gray-700">
                  Contractors program your irrigation controller with
                  appropriate schedules for each zone, considering plant needs,
                  season, and local watering restrictions in Gilbert.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  5. Testing & Training
                </h3>
                <p className="text-gray-700">
                  Contractors thoroughly test the system, adjust sprinkler
                  coverage, and provide training on system operation and
                  maintenance. We ensure everything works perfectly before
                  completion.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  How much does irrigation system installation cost in Gilbert?
                </h3>
                <p className="text-gray-700">
                  Irrigation system costs vary based on property size, number of
                  zones, system type, and installation complexity. Contractors
                  in our network provide detailed, free estimates for all
                  irrigation projects in Gilbert.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  What types of irrigation systems do you install?
                </h3>
                <p className="text-gray-700">
                  Contractors in our network install sprinkler systems, drip
                  irrigation, soaker hoses, and smart irrigation systems. We'll
                  recommend the best solution based on your landscape needs and
                  water efficiency goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Do you repair existing irrigation systems?
                </h3>
                <p className="text-gray-700">
                  Yes, contractors in our network provide comprehensive
                  irrigation repair services including fixing broken sprinkler
                  heads, repairing leaks, replacing valves, and updating
                  controllers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  How often should I water my lawn in Gilbert?
                </h3>
                <p className="text-gray-700">
                  Watering frequency depends on season, grass type, and weather
                  conditions. Generally, lawns in Gilbert need 2-3 times per
                  week in summer and less in cooler months. Contractors will
                  program your system accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Can you install smart irrigation controllers?
                </h3>
                <p className="text-gray-700">
                  Yes, contractors install and program smart irrigation
                  controllers that adjust watering based on weather conditions,
                  soil moisture, and local restrictions, helping you save water
                  and money.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-primary-green text-gray-700 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Irrigation Services in Gilbert?
              </h2>
              <p className="text-xl mb-6">
                Contact Gilbert Yard Pros for a free estimate on your irrigation
                system installation or repair
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
