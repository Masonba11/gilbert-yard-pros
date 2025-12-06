import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import InternalLinks from "@/components/InternalLinks";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tree Trimming Gilbert AZ | Professional Tree Pruning | Gilbert Yard Pros",
  description:
    "Professional tree trimming and pruning services in Gilbert, Arizona. Expert tree care for healthy, beautiful trees. Free estimates!",
  openGraph: {
    title:
      "Tree Trimming Gilbert AZ | Professional Tree Pruning | Gilbert Yard Pros",
    description:
      "Professional tree trimming and pruning services in Gilbert, Arizona. Expert tree care for healthy, beautiful trees. Free estimates!",
    url: "https://www.gilbertyardpros.com/services/tree-trimming-gilbert",
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
      "Tree Trimming Gilbert AZ | Professional Tree Pruning | Gilbert Yard Pros",
    description:
      "Professional tree trimming and pruning services in Gilbert, Arizona. Expert tree care for healthy, beautiful trees. Free estimates!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tree Trimming Gilbert AZ",
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

export default function TreeTrimmingPage() {
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
            label: "Tree Trimming Gilbert",
            href: "/services/tree-trimming-gilbert",
          },
        ]}
      />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/treetrimming.png"
          alt="Tree Trimming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 mb-6">
            Tree Trimming Gilbert AZ
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
              Professional Tree Trimming Services in Gilbert, Arizona
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gilbert Yard Pros connects homeowners with experienced contractors
              who offer tree trimming services in Gilbert, AZ. Our network of
              landscaping professionals provides expert tree pruning and
              trimming that promotes tree health, enhances appearance, and
              ensures safety around your property.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Regular tree trimming is essential for maintaining tree health,
              preventing disease, and managing growth. We match you with skilled
              contractors who understand the specific needs of trees common in
              Gilbert's climate, including citrus, mesquite, palo verde, and
              other desert-adapted species.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <HowItWorks serviceName="tree trimming" />
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Professional Tree and Shrub Trimming Services
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Whether you need routine maintenance trimming, storm damage
              cleanup, or shaping for aesthetic purposes, we'll connect you with
              contractors who use proper techniques and professional equipment
              to ensure your trees remain healthy and attractive. They
              prioritize tree health and safety in every trimming job. Proper
              tree trimming requires understanding tree biology, growth
              patterns, and the best times to prune different species.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our contractors also provide shrub trimming services, helping
              maintain the health and appearance of your landscape shrubs.
              Whether you need routine maintenance trimming, shaping for formal
              landscapes, or rejuvenation pruning for overgrown shrubs, we'll
              connect you with skilled contractors who use proper techniques
              that maintain plant health while achieving your desired aesthetic.
            </p>
            <p className="text-lg text-gray-700">
              Tree and shrub trimming in Gilbert requires understanding the
              specific needs of desert-adapted species. Citrus trees need
              different care than mesquite or palo verde trees. Our contractors
              understand these differences and apply appropriate techniques for
              each species. They also know when to trim - timing is crucial for
              tree health and can affect flowering, fruiting, and overall vigor.
              Regular trimming helps maintain tree structure, prevents disease,
              and reduces the risk of storm damage. It also improves air
              circulation and light penetration, benefiting both the trees and
              the plants growing beneath them.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-white mb-4">
            Benefits of Professional Tree Trimming
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
            <li>Promotes healthy tree growth and structure</li>
            <li>Prevents disease and pest infestations</li>
            <li>Removes dead or dangerous branches</li>
            <li>Improves tree appearance and shape</li>
            <li>Reduces risk of storm damage</li>
            <li>Increases sunlight and air circulation</li>
            <li>Protects property from falling branches</li>
            <li>Maintains safe clearance from structures</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-4">
            What to Expect from Tree Trimming Contractors
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Tree Assessment
              </h3>
              <p className="text-gray-700">
                Contractors in our network evaluate each tree's health,
                structure, and specific needs. We identify dead or diseased
                branches, assess growth patterns, and determine the best
                trimming approach.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Planning
              </h3>
              <p className="text-gray-700">
                Contractors in our network develop a trimming plan that
                addresses your goals while maintaining tree health. We consider
                the tree species, growth habits, and your aesthetic preferences.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Professional Trimming
              </h3>
              <p className="text-gray-700">
                Qualified contractors use proper pruning techniques, making
                clean cuts at the right locations to promote healing and prevent
                damage. We use appropriate tools and safety equipment.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Cleanup
              </h3>
              <p className="text-gray-700">
                Contractors in our network remove all trimmed branches and
                debris, clean up the work area, and ensure your property is left
                in excellent condition. We can chip branches for mulch if
                desired.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How often should trees be trimmed in Gilbert?
              </h3>
              <p className="text-gray-700">
                Most trees benefit from trimming every 2-3 years, though some
                fast-growing species may need annual attention. We'll assess
                your trees and recommend an appropriate schedule.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is the best time of year to trim trees in Arizona?
              </h3>
              <p className="text-gray-700">
                Late fall through early spring is generally ideal for most trees
                in Gilbert, as they're dormant. However, timing can vary by
                species, and we can trim most trees year-round if needed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you remove trees or just trim them?
              </h3>
              <p className="text-gray-700">
                We primarily focus on tree trimming and pruning. For tree
                removal, we can refer you to qualified tree removal specialists
                or assist with smaller removals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Will trimming harm my trees?
              </h3>
              <p className="text-gray-700">
                Proper trimming actually benefits trees by removing dead or
                diseased branches and promoting healthy growth. Our certified
                arborists use techniques that protect tree health.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you trim palm trees?
              </h3>
              <p className="text-gray-700">
                Yes, we provide palm tree trimming services. Palm trees have
                specific trimming needs, and we're experienced in proper palm
                tree care throughout Gilbert.
              </p>
            </div>
          </div>

          <div className="bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Tree Trimming in Gilbert?
            </h2>
            <p className="text-xl text-white mb-6">
              Contact Gilbert Yard Pros for professional tree trimming services
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
    </>
  );
}
