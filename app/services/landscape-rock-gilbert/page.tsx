import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landscape Rock Gilbert AZ | Rock Installation Services | Gilbert Yard Pros",
  description:
    "Professional landscape rock installation in Gilbert, Arizona. Beautiful, low-maintenance rock landscaping. Free estimates!",
  openGraph: {
    title:
      "Landscape Rock Gilbert AZ | Rock Installation Services | Gilbert Yard Pros",
    description:
      "Professional landscape rock installation in Gilbert, Arizona. Beautiful, low-maintenance rock landscaping. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/landscape-rock-gilbert",
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
      "Landscape Rock Gilbert AZ | Rock Installation Services | Gilbert Yard Pros",
    description:
      "Professional landscape rock installation in Gilbert, Arizona. Beautiful, low-maintenance rock landscaping. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscape Rock Installation Gilbert AZ",
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

export default function LandscapeRockPage() {
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
            label: "Landscape Rock Gilbert",
            href: "/services/landscape-rock-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/0T6A2167.jpg"
          alt="Landscape Rock Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Landscape Rock Gilbert AZ
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
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer landscape rock installation in Gilbert, AZ. Our network
              of landscaping professionals installs various types of decorative
              rock, gravel, and stone to enhance your property's appearance
              while reducing maintenance needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Landscape rock is an excellent choice for Gilbert's climate,
              providing a water-efficient, low-maintenance alternative to
              traditional mulch or ground cover. We match you with contractors
              whose rock installations create clean, modern looks that
              complement desert landscapes while helping conserve water and
              reduce maintenance.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="landscape rock installation" />
          </section>

          {/* Rock Types and Installation Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Landscape Rock Types and Installation
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Get matched with contractors who work with various rock types
              including decomposed granite, river rock, lava rock, pea gravel,
              and decorative stone in multiple colors and sizes. Whether you're
              looking to replace mulch, create pathways, or design a complete
              rock landscape, they have the materials and expertise to achieve
              your vision. Each rock type offers unique characteristics in terms
              of appearance, texture, and functionality.
            </p>
          </section>

          {/* Water-Efficient Landscape Rock Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Water-Efficient Landscape Rock for Gilbert
            </h2>
            <p className="text-lg text-gray-700">
              Landscape rock is particularly well-suited for Gilbert's climate
              and water conservation goals. Unlike organic mulches that break
              down and need regular replacement, rock provides a permanent,
              low-maintenance ground cover. It doesn't decompose, blow away, or
              require watering, making it an ideal choice for water-efficient
              landscapes. Our contractors understand how to properly install
              landscape rock with appropriate depth, weed barriers, and edge
              restraints to ensure long-lasting results. They can help you
              select rock types and colors that complement your home's
              architecture and create the aesthetic you desire, whether you're
              looking for a natural desert look or a more polished, modern
              appearance.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Landscape Rock
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>
              Extremely low maintenance - no watering or replacement needed
            </li>
            <li>Water-efficient alternative to mulch or grass</li>
            <li>Prevents weed growth when properly installed</li>
            <li>Durable and long-lasting</li>
            <li>Wide variety of colors, sizes, and textures</li>
            <li>Complements desert and modern landscapes</li>
            <li>Improves drainage in landscape beds</li>
            <li>Reduces maintenance costs over time</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Landscape Rock Installation Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Consultation & Selection
              </h3>
              <p className="text-gray-700">
                We help you select the right rock type, color, and size for your
                landscape. We consider your aesthetic preferences, maintenance
                goals, and budget to recommend the best options.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Site Preparation
              </h3>
              <p className="text-gray-700">
                Contractors in our network prepare the installation area by
                removing existing mulch or ground cover, leveling the surface,
                and installing weed barrier fabric to prevent weed growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Rock Installation
              </h3>
              <p className="text-gray-700">
                We spread rock evenly to the appropriate depth, typically 2-4
                inches depending on rock size. We ensure consistent coverage and
                proper depth for optimal appearance and function.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Finishing
              </h3>
              <p className="text-gray-700">
                We rake and level the rock, clean up edges, and ensure a
                professional finish. Contractors in our network remove any
                excess rock and clean hard surfaces.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of landscape rock do you install?
              </h3>
              <p className="text-gray-700">
                Contractors in our network install various rock types including
                decomposed granite, river rock, lava rock, pea gravel, crushed
                granite, and decorative stone in multiple colors and sizes.
                We'll help you choose based on your preferences and needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How much does landscape rock installation cost in Gilbert?
              </h3>
              <p className="text-gray-700">
                Rock installation costs vary based on the area size, rock type
                selected, and preparation requirements. Contractors in our
                network provide detailed estimates for all rock installation
                projects in Gilbert.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you install weed barrier under rock?
              </h3>
              <p className="text-gray-700">
                Yes, we typically install weed barrier fabric under landscape
                rock to prevent weed growth. This is essential for maintaining a
                clean, low-maintenance appearance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How deep should landscape rock be installed?
              </h3>
              <p className="text-gray-700">
                Rock depth depends on the size of the rock. Smaller rocks like
                pea gravel typically need 2-3 inches, while larger rocks may
                need 3-4 inches. We'll install to the appropriate depth for your
                selected rock type.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can rock be used in combination with plants?
              </h3>
              <p className="text-gray-700">
                Absolutely. Landscape rock works well with plants, creating
                attractive, low-maintenance landscapes. We can design
                installations that incorporate both rock and plantings for
                beautiful results.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Landscape Rock in Gilbert?
            </h2>
            <p className="text-xl text-white mb-6">
              Contact Gilbert Yard Pros for a free estimate on your landscape
              rock installation
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of landscape rock do you install?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contractors in our network install various rock types including decomposed granite, river rock, lava rock, pea gravel, crushed granite, and decorative stone in multiple colors and sizes. We'll help you choose based on your preferences and needs.",
                },
              },
              {
                "@type": "Question",
                name: "How much does landscape rock installation cost in Gilbert?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rock installation costs vary based on the area size, rock type selected, and preparation requirements. Contractors in our network provide detailed estimates for all rock installation projects in Gilbert.",
                },
              },
              {
                "@type": "Question",
                name: "Do you install weed barrier under rock?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we typically install weed barrier fabric under landscape rock to prevent weed growth. This is essential for maintaining a clean, low-maintenance appearance.",
                },
              },
              {
                "@type": "Question",
                name: "How deep should landscape rock be installed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rock depth depends on the size of the rock. Smaller rocks like pea gravel typically need 2-3 inches, while larger rocks may need 3-4 inches. We'll install to the appropriate depth for your selected rock type.",
                },
              },
              {
                "@type": "Question",
                name: "Can rock be used in combination with plants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Landscape rock works well with plants, creating attractive, low-maintenance landscapes. We can design installations that incorporate both rock and plantings for beautiful results.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
