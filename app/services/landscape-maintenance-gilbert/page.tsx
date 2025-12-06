import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landscape Maintenance Gilbert AZ | Professional Maintenance Services | Gilbert Yard Pros",
  description:
    "Professional landscape maintenance services in Gilbert, Arizona. Comprehensive maintenance programs for year-round beauty. Free estimates!",
  openGraph: {
    title:
      "Landscape Maintenance Gilbert AZ | Professional Maintenance Services | Gilbert Yard Pros",
    description:
      "Professional landscape maintenance services in Gilbert, Arizona. Comprehensive maintenance programs for year-round beauty. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/landscape-maintenance-gilbert",
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
      "Landscape Maintenance Gilbert AZ | Professional Maintenance Services | Gilbert Yard Pros",
    description:
      "Professional landscape maintenance services in Gilbert, Arizona. Comprehensive maintenance programs for year-round beauty. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscape Maintenance Gilbert AZ",
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

export default function MaintenancePage() {
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
            label: "Landscape Maintenance Gilbert",
            href: "/services/landscape-maintenance-gilbert",
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
          <source src="/homepageheroqc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Landscape Maintenance Gilbert AZ
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
              Professional Landscape Maintenance Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer landscape maintenance services in Gilbert, AZ. Our
              network of landscaping professionals offers comprehensive
              maintenance programs that handle all aspects of landscape care,
              ensuring your property always looks its best.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Regular landscape maintenance is essential for preserving the
              beauty and health of your outdoor space. We match you with
              contractors whose maintenance programs are customized to your
              property's specific needs and can include lawn care, pruning,
              weeding, irrigation management, fertilization, and seasonal
              cleanups.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="landscape maintenance" />
          </section>

          {/* Maintenance Programs Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Landscape Maintenance Programs
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you need weekly, bi-weekly, or monthly maintenance visits,
              we'll connect you with contractors who provide consistent,
              professional service that keeps your landscape thriving. Our
              contractors understand the unique maintenance requirements of
              Gilbert's climate and work proactively to prevent problems before
              they develop. Regular maintenance is the key to preserving your
              landscape investment and ensuring long-term health and beauty.
            </p>
          </section>

          {/* Seasonal Maintenance Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Year-Round Seasonal Maintenance
            </h2>
            <p className="text-lg text-gray-700">
              A comprehensive maintenance program addresses all aspects of
              landscape care throughout the year. In Gilbert, maintenance needs
              change with the seasons - spring brings growth and the need for
              fertilization and pruning, summer requires careful water
              management and heat stress protection, fall is ideal for cleanup
              and preparation, and winter may involve protection of sensitive
              plants. Our contractors understand these seasonal cycles and
              adjust their maintenance approach accordingly. They also stay
              current with local water restrictions and can help you maintain
              beautiful landscapes while complying with regulations. Consistent
              maintenance prevents small problems from becoming major issues,
              saving you time and money in the long run.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Professional Landscape Maintenance
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Consistent, professional landscape care</li>
            <li>Saves you time and effort</li>
            <li>Prevents problems before they develop</li>
            <li>Maintains property value and curb appeal</li>
            <li>Customized programs for your specific needs</li>
            <li>Year-round landscape health and beauty</li>
            <li>Expert knowledge of Gilbert's climate</li>
            <li>Comprehensive care in one service</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Landscape Maintenance Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Property Assessment
              </h3>
              <p className="text-gray-700">
                Contractors in our network evaluate your landscape, identify
                maintenance needs, and develop a customized maintenance plan
                tailored to your property and preferences.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Regular Service Visits
              </h3>
              <p className="text-gray-700">
                Qualified contractors visits on a scheduled basis to perform all
                maintenance tasks including mowing, trimming, weeding, edging,
                and general cleanup.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Seasonal Adjustments
              </h3>
              <p className="text-gray-700">
                We adjust maintenance tasks based on seasons, addressing
                specific needs for spring, summer, fall, and winter in Gilbert's
                climate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Ongoing Monitoring
              </h3>
              <p className="text-gray-700">
                Contractors in our network monitor your landscape's health,
                identify issues early, and address problems proactively to
                maintain optimal condition.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is included in landscape maintenance?
              </h3>
              <p className="text-gray-700">
                Maintenance programs typically include lawn mowing, edging,
                trimming, weeding, pruning, fertilization, irrigation checks,
                and cleanup. Services can be customized based on your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How often should I schedule maintenance visits?
              </h3>
              <p className="text-gray-700">
                Frequency depends on your landscape needs and preferences.
                Weekly visits are common during peak growing season, while
                bi-weekly or monthly may be sufficient at other times. We'll
                recommend a schedule during your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can maintenance be customized to my needs?
              </h3>
              <p className="text-gray-700">
                Yes, we customize maintenance programs to match your specific
                needs, budget, and preferences. We can focus on particular areas
                or include comprehensive care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you provide maintenance for commercial properties?
              </h3>
              <p className="text-gray-700">
                Yes, we provide landscape maintenance for both residential and
                commercial properties throughout Gilbert. Commercial programs
                are tailored to business needs and schedules.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What happens if issues are found during maintenance?
              </h3>
              <p className="text-gray-700">
                We identify and address issues proactively. If problems require
                specialized attention, we'll discuss options with you and can
                coordinate additional services as needed.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Landscape Maintenance in Gilbert?
            </h2>
            <p className="text-xl text-white mb-6">
              Contact Gilbert Yard Pros for professional landscape maintenance
              services
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
