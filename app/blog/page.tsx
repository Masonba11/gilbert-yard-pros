import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Blog | Tips, Guides & Expert Advice | Gilbert Yard Pros",
  description:
    "Read our landscaping blog for expert tips, guides, and advice on lawn care, irrigation, hardscaping, and more in Gilbert, Arizona.",
  openGraph: {
    title:
      "Landscaping Blog | Tips, Guides & Expert Advice | Gilbert Yard Pros",
    description:
      "Read our landscaping blog for expert tips, guides, and advice on lawn care, irrigation, hardscaping, and more in Gilbert, Arizona.",
    url: "https://www.gilbertyardpros.com/blog",
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
      "Landscaping Blog | Tips, Guides & Expert Advice | Gilbert Yard Pros",
    description:
      "Read our landscaping blog for expert tips, guides, and advice on lawn care, irrigation, hardscaping, and more in Gilbert, Arizona.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

// Sample blog posts - in a real app, these would come from a CMS or database
const blogPosts = [
  {
    id: "best-artificial-turf-gilbert",
    title: "Best Artificial Turf Options for Gilbert, Arizona Homes",
    excerpt:
      "Discover the top artificial turf options perfect for Gilbert's desert climate. Learn about durability, maintenance, and water savings.",
    image: "/turf.jpg",
    date: "2024-01-15",
    category: "Artificial Turf",
  },
  {
    id: "irrigation-system-maintenance",
    title: "How to Maintain Your Irrigation System in Arizona",
    excerpt:
      "Keep your irrigation system running efficiently with these essential maintenance tips for Arizona homeowners.",
    image: "/irrigation.mp4",
    date: "2024-01-10",
    category: "Irrigation",
  },
  {
    id: "paver-installation-guide",
    title: "Complete Guide to Paver Installation in Gilbert",
    excerpt:
      "Everything you need to know about installing pavers for patios, walkways, and driveways in Gilbert's climate.",
    image: "/pavers.jpg",
    date: "2024-01-05",
    category: "Hardscaping",
  },
  {
    id: "desert-landscaping-tips",
    title: "Desert Landscaping Tips for Arizona Homeowners",
    excerpt:
      "Create a beautiful, water-efficient landscape that thrives in Arizona's desert climate with these expert tips.",
    image: "/landscapedesign.jpg",
    date: "2023-12-28",
    category: "Landscape Design",
  },
  {
    id: "tree-trimming-season",
    title: "When is the Best Time to Trim Trees in Gilbert?",
    excerpt:
      "Learn the optimal timing for tree trimming in Gilbert to promote healthy growth and prevent damage.",
    image: "/treetrimming.png",
    date: "2023-12-20",
    category: "Tree Care",
  },
  {
    id: "water-efficient-landscaping",
    title: "Water-Efficient Landscaping Solutions for Gilbert",
    excerpt:
      "Reduce your water usage while maintaining a beautiful landscape with these water-efficient landscaping strategies.",
    image: "/0T6A2167.jpg",
    date: "2023-12-15",
    category: "Landscape Design",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[400px] md:h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/homepageheroqc.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/landscapeinstallation.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <div className="container-max text-center z-10 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Landscaping Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Expert tips, guides, and advice for your Gilbert landscaping needs
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 w-full">
                    {post.image.endsWith(".mp4") ? (
                      <video
                        src={post.image}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-green font-semibold">
                        {post.category}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-primary-green transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white mb-4">{post.excerpt}</p>
                    <span className="text-primary-green font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl mb-6">
            Get matched with trusted local contractors for your landscaping
            project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-block bg-gray-900 text-primary-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Quote Now
            </a>
            <a
              href="tel:4809876110"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900/10 transition-colors text-center"
            >
              Call 480-987-6110
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
