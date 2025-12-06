import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lawn Care Gilbert AZ | Professional Lawn Services | Gilbert Yard Pros",
  description:
    "Professional lawn care services in Gilbert, Arizona. Complete lawn care including fertilization, aeration, and more. Free estimates!",
  openGraph: {
    title:
      "Lawn Care Gilbert AZ | Professional Lawn Services | Gilbert Yard Pros",
    description:
      "Professional lawn care services in Gilbert, Arizona. Complete lawn care including fertilization, aeration, and more. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/lawn-care-gilbert",
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
      "Lawn Care Gilbert AZ | Professional Lawn Services | Gilbert Yard Pros",
    description:
      "Professional lawn care services in Gilbert, Arizona. Complete lawn care including fertilization, aeration, and more. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Lawn Care Gilbert AZ",
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

export default function LawnCarePage() {
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
          { label: "Lawn Care Gilbert", href: "/services/lawn-care-gilbert" },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/lawncare.jpg"
          alt="Lawn Care Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Lawn Care Gilbert AZ
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Professional Lawn Care Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer lawn care services in Gilbert, AZ. Our network of
              landscaping professionals provides comprehensive lawn care
              programs that include fertilization, aeration, overseeding, weed
              control, and more to keep your grass thriving.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A well-maintained lawn enhances your property's curb appeal and
              provides a beautiful outdoor space for your family. We match you
              with contractors whose lawn care services are tailored to the
              specific needs of grass types common in Gilbert, including
              Bermuda, fescue, and other warm-season and cool-season varieties.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="lawn care" />
          </section>

          {/* Customized Lawn Care Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Customized Lawn Care Programs
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Get matched with contractors who understand that different grass
              types have different care requirements and customize their lawn
              care programs accordingly. From seasonal fertilization to aeration
              and overseeding, their comprehensive approach ensures your lawn
              receives the nutrients and care it needs to stay healthy and
              green. In Gilbert's climate, lawn care requires understanding the
              seasonal cycles and adjusting treatments accordingly.
            </p>
          </section>

          {/* Desert Climate Lawn Care Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Lawn Care for Arizona's Desert Climate
            </h2>
            <p className="text-lg text-gray-700">
              Arizona's desert climate presents unique challenges for lawn care.
              The intense summer heat, low humidity, and water restrictions
              require specialized knowledge and techniques. Our contractors
              understand how to maintain healthy lawns in these conditions,
              using appropriate fertilization schedules, proper watering
              techniques, and treatments that help grass withstand heat stress.
              They also know when to aerate, overseed, and apply treatments for
              optimal results throughout the year. A well-maintained lawn not
              only enhances your property's appearance but also provides a
              comfortable outdoor space for your family to enjoy.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Professional Lawn Care
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Promotes healthy, thick grass growth</li>
            <li>Provides essential nutrients through fertilization</li>
            <li>Reduces weeds and improves lawn density</li>
            <li>Enhances lawn color and appearance</li>
            <li>Improves soil health through aeration</li>
            <li>Prevents disease and pest problems</li>
            <li>Increases property value</li>
            <li>Customized care for your grass type</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Lawn Care Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Lawn Assessment
              </h3>
              <p className="text-gray-700">
                Contractors in our network evaluate your lawn, identify grass
                type, assess soil conditions, and test for nutrient deficiencies
                to develop a customized care plan.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Fertilization Program
              </h3>
              <p className="text-gray-700">
                Contractors in our network develop a seasonal fertilization
                schedule using appropriate nutrients for your grass type and
                soil conditions, promoting healthy growth throughout the year.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Aeration & Overseeding
              </h3>
              <p className="text-gray-700">
                Contractors in our network provide core aeration to improve soil
                compaction and overseeding to fill in thin areas, creating a
                thicker, healthier lawn.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Weed & Pest Control
              </h3>
              <p className="text-gray-700">
                We integrate weed control and pest management into your lawn
                care program, preventing problems before they damage your grass.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                5. Ongoing Monitoring
              </h3>
              <p className="text-gray-700">
                Contractors in our network monitor your lawn's health throughout
                the seasons, adjusting treatments as needed to maintain optimal
                condition.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How often should I fertilize my lawn in Gilbert?
              </h3>
              <p className="text-gray-700">
                Fertilization frequency depends on grass type. Most lawns
                benefit from 4-6 applications per year, with timing adjusted for
                warm-season or cool-season grasses. We'll develop a schedule
                during your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is lawn aeration and why is it important?
              </h3>
              <p className="text-gray-700">
                Aeration involves removing small plugs of soil to reduce
                compaction, improve water and nutrient absorption, and promote
                root growth. It's especially important for lawns with heavy clay
                soil or high traffic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can lawn care help with brown spots?
              </h3>
              <p className="text-gray-700">
                Yes, our lawn care programs address brown spots through proper
                fertilization, aeration, overseeding, and identifying underlying
                issues like disease, pests, or irrigation problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you provide organic lawn care options?
              </h3>
              <p className="text-gray-700">
                Contractors can discuss organic and eco-friendly lawn care
                options during your consultation. They offer various treatment
                approaches to meet your preferences and needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How long does it take to see results from lawn care?
              </h3>
              <p className="text-gray-700">
                Results vary, but you typically see improvements in lawn color
                and health within a few weeks of starting a program. Significant
                improvements in thickness and overall condition develop over
                several months with consistent care.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Lawn Care in Gilbert?
            </h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional lawn care services
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
