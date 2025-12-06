import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Yard Clean Up Gilbert AZ | Professional Cleanup Services | Gilbert Yard Pros",
  description:
    "Professional yard clean up services in Gilbert, Arizona. Complete cleanup to restore your outdoor space. Free estimates!",
  openGraph: {
    title:
      "Yard Clean Up Gilbert AZ | Professional Cleanup Services | Gilbert Yard Pros",
    description:
      "Professional yard clean up services in Gilbert, Arizona. Complete cleanup to restore your outdoor space. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/yard-clean-up-gilbert",
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
      "Yard Clean Up Gilbert AZ | Professional Cleanup Services | Gilbert Yard Pros",
    description:
      "Professional yard clean up services in Gilbert, Arizona. Complete cleanup to restore your outdoor space. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Yard Clean Up Gilbert AZ",
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

export default function YardCleanUpPage() {
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
            label: "Yard Clean Up Gilbert",
            href: "/services/yard-clean-up-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/cleanup.webp"
          alt="Yard Clean Up Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Yard Clean Up Gilbert AZ
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
              Professional Yard Clean Up Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer yard clean up services in Gilbert, AZ. Our network of
              landscaping professionals provides comprehensive cleanup services
              that transform neglected or overgrown yards into clean, beautiful
              landscapes ready for regular maintenance.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Whether your yard needs a one-time deep clean after a storm,
              seasonal cleanup, or preparation for a new landscaping project,
              we'll match you with contractors who handle everything from debris
              removal to pruning and trimming. We understand that life gets
              busy, and sometimes yards need professional attention to get back
              on track.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="yard clean up" />
          </section>

          {/* What to Expect Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Yard Clean Up Services
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Get matched with contractors whose yard clean up services are
              thorough and efficient, leaving your property looking its best.
              They remove all debris, trim overgrown vegetation, clean up
              landscape beds, and ensure your yard is ready for ongoing
              maintenance or new landscaping projects. Yard clean up is often
              the first step in restoring a neglected property or preparing for
              a new landscape installation.
            </p>
            <p className="text-lg text-gray-700">
              In Gilbert, yard clean up may be needed for various reasons -
              after monsoon storms that bring down branches and debris, when
              preparing a property for sale, after a period of neglect, or as
              part of seasonal maintenance. Our contractors bring the equipment
              and expertise to handle jobs of all sizes, from small residential
              cleanups to larger commercial properties. They understand proper
              disposal methods and can help you determine what materials can be
              recycled or composted. A thorough clean up not only improves your
              property's appearance but also sets the foundation for healthy
              landscape growth and easier ongoing maintenance.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Professional Yard Clean Up
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Restores your yard to a clean, attractive condition</li>
            <li>Removes debris, leaves, and unwanted vegetation</li>
            <li>Prepares yard for regular maintenance</li>
            <li>Saves you time and physical effort</li>
            <li>Improves property curb appeal</li>
            <li>Prevents pest and disease issues</li>
            <li>Creates a fresh start for new landscaping</li>
            <li>Professional disposal of all yard waste</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Yard Clean Up Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Assessment
              </h3>
              <p className="text-gray-700">
                Contractors in our network evaluate your yard to identify all
                cleanup needs, including debris removal, trimming requirements,
                and any special considerations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Debris Removal
              </h3>
              <p className="text-gray-700">
                Contractors in our network remove all leaves, branches, dead
                plants, trash, and other debris from your yard, landscape beds,
                and hard surfaces.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Trimming & Pruning
              </h3>
              <p className="text-gray-700">
                Contractors in our network trim overgrown shrubs, trees, and
                plants, removing dead or damaged branches and shaping vegetation
                for better appearance.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                4. Landscape Bed Cleanup
              </h3>
              <p className="text-gray-700">
                We clean out landscape beds, remove weeds, edge beds, and
                refresh mulch or rock as needed for a polished look.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                5. Final Cleanup
              </h3>
              <p className="text-gray-700">
                We blow off hard surfaces, remove all debris from the property,
                and ensure your yard looks clean and well-maintained.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                What is included in yard clean up service?
              </h3>
              <p className="text-gray-700">
                Our yard clean up includes debris removal, leaf removal,
                trimming overgrown vegetation, landscape bed cleanup, weed
                removal, and general yard tidying. Contractors can customize
                services based on your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                How much does yard clean up cost in Gilbert?
              </h3>
              <p className="text-gray-700">
                Yard clean up costs vary based on yard size, amount of debris,
                and scope of work needed. Contractors in our network provide
                free estimates for all clean up projects in Gilbert.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Do you haul away debris?
              </h3>
              <p className="text-gray-700">
                Yes, contractors remove and properly dispose of all yard debris,
                including leaves, branches, dead plants, and other waste
                materials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Can you do a one-time clean up or do you require ongoing
                service?
              </h3>
              <p className="text-gray-700">
                Contractors offer both one-time yard clean up services and can
                set up regular maintenance schedules. Many customers start with
                a clean up and then transition to regular maintenance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                How long does a yard clean up take?
              </h3>
              <p className="text-gray-700">
                Clean up time depends on yard size and condition. Most
                residential clean ups are completed in a few hours to a full
                day. We'll provide an estimated timeline during your
                consultation.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Yard Clean Up in Gilbert?
            </h2>
            <p className="text-xl mb-6">
              Contact Gilbert Yard Pros for professional yard clean up services
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
