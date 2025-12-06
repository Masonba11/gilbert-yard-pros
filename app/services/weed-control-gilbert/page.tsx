import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Weed Control Gilbert AZ | Professional Weed Treatment | Gilbert Yard Pros",
  description:
    "Professional weed control services in Gilbert, Arizona. Effective weed treatment to keep your lawn healthy and weed-free. Free estimates!",
  openGraph: {
    title:
      "Weed Control Gilbert AZ | Professional Weed Treatment | Gilbert Yard Pros",
    description:
      "Professional weed control services in Gilbert, Arizona. Effective weed treatment to keep your lawn healthy and weed-free. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/weed-control-gilbert",
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
      "Weed Control Gilbert AZ | Professional Weed Treatment | Gilbert Yard Pros",
    description:
      "Professional weed control services in Gilbert, Arizona. Effective weed treatment to keep your lawn healthy and weed-free. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Weed Control Gilbert AZ",
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

export default function WeedControlPage() {
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
            label: "Weed Control Gilbert",
            href: "/services/weed-control-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/weedcontrol.jpg"
          alt="Weed Control Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center px-4 mb-6">
            Weed Control Gilbert AZ
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
              Professional Weed Control Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer weed control services in Gilbert, AZ. Our network of
              landscaping professionals provides effective weed treatment
              programs that eliminate existing weeds and prevent new ones from
              taking hold in your landscape.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Weeds compete with your grass and plants for water, nutrients, and
              sunlight, making weed control essential for a thriving landscape.
              We match you with contractors whose comprehensive weed control
              approach includes both pre-emergent and post-emergent treatments
              tailored to the specific weeds common in Gilbert's climate.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="weed control" />
          </section>

          {/* Professional Approach Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Weed Control Approach
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Get matched with contractors who use professional-grade herbicides
              and application methods that effectively target weeds while
              protecting your desirable plants. Their weed control programs can
              be integrated with your regular lawn care and maintenance services
              for optimal results. Effective weed control requires understanding
              weed life cycles and applying treatments at the right times.
            </p>
            <p className="text-lg text-gray-700">
              Gilbert's climate supports various weed species that can quickly
              take over lawns and landscape beds if not properly managed. Our
              contractors understand which weeds are common in the area and the
              most effective treatment methods for each. Pre-emergent treatments
              prevent weed seeds from germinating, while post-emergent
              treatments eliminate existing weeds. Timing is crucial - applying
              treatments at the wrong time can be ineffective or even harmful.
              Our contractors know when to apply treatments for maximum
              effectiveness while minimizing impact on desirable plants. Regular
              weed control is essential for maintaining a healthy, attractive
              landscape that enhances your property's value and appearance.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benefits of Professional Weed Control
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Eliminates existing weeds effectively</li>
            <li>Prevents new weeds from germinating</li>
            <li>Promotes healthy grass growth</li>
            <li>Improves lawn appearance and uniformity</li>
            <li>Reduces competition for water and nutrients</li>
            <li>Professional-grade products and application</li>
            <li>Customized treatment for your specific weeds</li>
            <li>Can be combined with fertilization programs</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What to Expect from Weed Control Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Weed Identification
              </h3>
              <p className="text-gray-700">
                We identify the specific weeds in your lawn and landscape, which
                helps us select the most effective treatment products and
                methods.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Treatment Plan
              </h3>
              <p className="text-gray-700">
                Contractors in our network develop a customized weed control
                plan that may include pre-emergent treatments to prevent weeds
                and post-emergent treatments to eliminate existing weeds.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Application
              </h3>
              <p className="text-gray-700">
                Our trained technicians apply weed control products using
                professional equipment and techniques, ensuring proper coverage
                and effectiveness.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Follow-Up
              </h3>
              <p className="text-gray-700">
                Contractors in our network monitor results and provide follow-up
                treatments as needed. Regular applications throughout the
                growing season maintain a weed-free lawn.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How often do I need weed control treatments in Gilbert?
              </h3>
              <p className="text-gray-700">
                Most lawns benefit from regular weed control treatments
                throughout the growing season. Pre-emergent treatments are
                typically applied in early spring and fall, with post-emergent
                treatments as needed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Are weed control products safe for pets and children?
              </h3>
              <p className="text-gray-700">
                We use professional-grade products that are safe when applied
                correctly. We follow all label instructions and safety
                guidelines. Typically, treated areas are safe for pets and
                children after the product has dried.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Will weed control harm my grass?
              </h3>
              <p className="text-gray-700">
                When applied correctly by professionals, weed control products
                target weeds without harming your healthy grass. We select
                products appropriate for your grass type.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can you control weeds in landscape beds?
              </h3>
              <p className="text-gray-700">
                Yes, we provide weed control for both lawns and landscape beds.
                Different products and methods may be used depending on the area
                and plants present.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How long does it take to see results?
              </h3>
              <p className="text-gray-700">
                Results vary by weed type and treatment method. Some weeds show
                signs of control within days, while others may take a few weeks.
                We'll discuss expected timelines during your consultation.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Weed Control in Gilbert?
            </h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional weed control services
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
