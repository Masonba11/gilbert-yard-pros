import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landscape Design Gilbert AZ | Custom Design Services | Gilbert Yard Pros",
  description:
    "Professional landscape design services in Gilbert, Arizona. Custom landscape design to transform your outdoor space. Free consultations!",
  openGraph: {
    title:
      "Landscape Design Gilbert AZ | Custom Design Services | Gilbert Yard Pros",
    description:
      "Professional landscape design services in Gilbert, Arizona. Custom landscape design to transform your outdoor space. Free consultations!",
    url: "https://www.gilbertyardpros.com/services/landscape-design-gilbert",
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
      "Landscape Design Gilbert AZ | Custom Design Services | Gilbert Yard Pros",
    description:
      "Professional landscape design services in Gilbert, Arizona. Custom landscape design to transform your outdoor space. Free consultations!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscape Design Gilbert AZ",
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

export default function LandscapeDesignPage() {
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
            label: "Landscape Design Gilbert",
            href: "/services/landscape-design-gilbert",
          },
        ]}
      />
      <article className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Landscape Design Gilbert AZ
          </h1>

          {/* Introduction Section */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer landscape design services in Gilbert, AZ. Our network of
              landscaping professionals creates custom landscape designs that
              reflect your style, enhance your property's value, and provide
              beautiful, functional outdoor living spaces.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A well-designed landscape is more than just plants and
              hardscape—it's a cohesive plan that considers your lifestyle,
              property characteristics, and local climate. We match you with
              contractors whose design process combines creativity with
              practical knowledge of Gilbert's desert climate, ensuring your
              landscape will thrive while meeting your aesthetic and functional
              goals.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="landscape design" />
          </section>

          {/* Design Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Professional Landscape Design Process
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're starting from scratch or renovating an existing
              landscape, we'll connect you with contractors whose design
              services help you visualize and plan your ideal outdoor space.
              They work with you to create designs that incorporate
              water-efficient plants, appropriate hardscaping, outdoor living
              areas, and all the elements that make a landscape both beautiful
              and practical. A well-designed landscape is an investment that
              enhances your property value and quality of life.
            </p>
            <p className="text-lg text-gray-700">
              Professional landscape design involves much more than simply
              selecting plants and placing them in the ground. It requires
              understanding site conditions, drainage patterns, sun exposure,
              soil characteristics, and how all these elements work together.
              Our contractors bring this expertise to every design project,
              creating plans that are both aesthetically pleasing and
              functionally sound. They consider your lifestyle, maintenance
              preferences, and budget to create designs that you'll love for
              years to come. In Gilbert, where water conservation is important,
              design expertise is particularly valuable in creating landscapes
              that are both beautiful and environmentally responsible.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Professional Landscape Design
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Creates a cohesive, well-planned landscape</li>
            <li>Maximizes your property's potential</li>
            <li>Increases property value significantly</li>
            <li>Designs for water efficiency and low maintenance</li>
            <li>Incorporates your style and preferences</li>
            <li>Considers Gilbert's climate and conditions</li>
            <li>Provides a clear plan for implementation</li>
            <li>Creates functional outdoor living spaces</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Landscape Design Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Consultation
              </h3>
              <p className="text-gray-700">
                We meet with you to understand your vision, lifestyle needs,
                budget, and preferences. Contractors in our network assess your
                property, discuss goals, and gather information to guide the
                design process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Site Analysis
              </h3>
              <p className="text-gray-700">
                We analyze your property including soil conditions, drainage,
                sun exposure, existing features, and microclimates. This
                analysis ensures the design works with your site's
                characteristics.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Design Development
              </h3>
              <p className="text-gray-700">
                Contractors in our network create a comprehensive design plan
                including plant selections, hardscape elements, irrigation
                planning, lighting, and layout. We consider water efficiency,
                maintenance, and aesthetic appeal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Design Presentation
              </h3>
              <p className="text-gray-700">
                We present the design with detailed plans, plant lists, material
                specifications, and visual representations. We discuss the
                design, answer questions, and make adjustments based on your
                feedback.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                5. Implementation Support
              </h3>
              <p className="text-gray-700">
                Contractors can assist with implementation, either performing
                the installation ourselves or working with your contractor to
                ensure the design is executed according to plan.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How much does landscape design cost in Gilbert?
              </h3>
              <p className="text-gray-700">
                Design costs vary based on project scope and complexity. Simple
                designs may be included with installation, while comprehensive
                designs for large properties are priced separately. Contractors
                in our network provide design cost estimates during your
                consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you design for water-efficient landscapes?
              </h3>
              <p className="text-gray-700">
                Yes, contractors in our network specialize in water-efficient
                landscape design using native and adapted plants, efficient
                irrigation, and xeriscaping principles. Contractors in our
                network create beautiful landscapes that conserve water and
                thrive in Gilbert's climate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can you design for specific styles or themes?
              </h3>
              <p className="text-gray-700">
                Absolutely. Contractors in our network design landscapes in
                various styles including desert, modern, traditional,
                Mediterranean, and more. Contractors in our network work with
                you to create a design that matches your home's architecture and
                personal style.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you provide 3D renderings or visualizations?
              </h3>
              <p className="text-gray-700">
                Contractors in our network provide detailed design plans and can
                discuss visualization options during your consultation. The
                contractor's designs include detailed layouts, plant lists, and
                material specifications to help you visualize the final result.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can you redesign an existing landscape?
              </h3>
              <p className="text-gray-700">
                Yes, contractors provide landscape renovation and redesign
                services. They can work with existing features, update
                plantings, add new elements, or completely transform your
                landscape based on your goals.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Landscape Design in Gilbert?
            </h2>
            <p className="text-xl text-white mb-6">
              Contact Gilbert Yard Pros for a free consultation on your
              landscape design project
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
                name: "How much does landscape design cost in Gilbert?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Design costs vary based on project scope and complexity. Simple designs may be included with installation, while comprehensive designs for large properties are priced separately. Contractors in our network provide design cost estimates during your consultation.",
                },
              },
              {
                "@type": "Question",
                name: "Do you design for water-efficient landscapes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, contractors in our network specialize in water-efficient landscape design using native and adapted plants, efficient irrigation, and xeriscaping principles. Contractors in our network create beautiful landscapes that conserve water and thrive in Gilbert's climate.",
                },
              },
              {
                "@type": "Question",
                name: "Can you design for specific styles or themes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Contractors in our network design landscapes in various styles including desert, modern, traditional, Mediterranean, and more. Contractors in our network work with you to create a design that matches your home's architecture and personal style.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide 3D renderings or visualizations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contractors in our network provide detailed design plans and can discuss visualization options during your consultation. The contractor's designs include detailed layouts, plant lists, and material specifications to help you visualize the final result.",
                },
              },
              {
                "@type": "Question",
                name: "Can you redesign an existing landscape?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, contractors provide landscape renovation and redesign services. They can work with existing features, update plantings, add new elements, or completely transform your landscape based on your goals.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
