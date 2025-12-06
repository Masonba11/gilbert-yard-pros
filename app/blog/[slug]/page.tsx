import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
    excerpt: string;
  }
> = {
  "best-artificial-turf-gilbert": {
    title: "Best Artificial Turf Options for Gilbert, Arizona Homes",
    excerpt:
      "Discover the top artificial turf options perfect for Gilbert's desert climate.",
    image: "/turf.jpg",
    date: "2024-01-15",
    category: "Artificial Turf",
    content: `
      <h2>Why Choose Artificial Turf in Gilbert?</h2>
      <p>Gilbert, Arizona's desert climate presents unique challenges for maintaining natural grass. With scorching summers, limited water resources, and intense sun exposure, many homeowners are turning to artificial turf as a practical and beautiful solution.</p>
      
      <h2>Top Artificial Turf Options for Desert Climates</h2>
      <p>When selecting artificial turf for your Gilbert home, consider these key factors:</p>
      <ul>
        <li><strong>UV Resistance:</strong> Look for turf with high UV resistance to prevent fading in Arizona's intense sunlight.</li>
        <li><strong>Heat Resistance:</strong> Quality turf should stay cool underfoot even during hot summer days.</li>
        <li><strong>Durability:</strong> Choose turf designed to withstand heavy foot traffic and outdoor elements.</li>
        <li><strong>Drainage:</strong> Proper drainage is essential for monsoon season in Arizona.</li>
      </ul>
      
      <h2>Benefits of Artificial Turf in Gilbert</h2>
      <p>Artificial turf offers numerous advantages for Gilbert homeowners:</p>
      <ul>
        <li>Significant water savings - up to 70% reduction in water usage</li>
        <li>No mowing, fertilizing, or pesticide applications needed</li>
        <li>Year-round green appearance regardless of season</li>
        <li>Reduced maintenance costs and time</li>
        <li>Perfect for pet-friendly yards</li>
      </ul>
      
      <h2>Installation Considerations</h2>
      <p>Proper installation is crucial for artificial turf longevity. Our network of contractors ensures:</p>
      <ul>
        <li>Proper base preparation with appropriate drainage</li>
        <li>Correct infill selection for your specific needs</li>
        <li>Professional seam work for seamless appearance</li>
        <li>Warranty coverage on materials and installation</li>
      </ul>
      
      <h2>Maintenance Tips</h2>
      <p>While artificial turf requires minimal maintenance, regular care extends its life:</p>
      <ul>
        <li>Rinse periodically to remove dust and debris</li>
        <li>Brush occasionally to keep fibers upright</li>
        <li>Remove leaves and organic matter promptly</li>
        <li>Address pet waste immediately</li>
      </ul>
      
      <h2>Get Started with Artificial Turf</h2>
      <p>Ready to transform your yard with artificial turf? Gilbert Yard Pros connects you with experienced contractors who specialize in artificial turf installation in Gilbert, Arizona. Get matched with a qualified professional who can help you choose the perfect turf for your home and budget.</p>
    `,
  },
  "irrigation-system-maintenance": {
    title: "How to Maintain Your Irrigation System in Arizona",
    excerpt:
      "Keep your irrigation system running efficiently with these essential maintenance tips.",
    image: "/irrigation.mp4",
    date: "2024-01-10",
    category: "Irrigation",
    content: `
      <h2>Why Irrigation Maintenance Matters in Arizona</h2>
      <p>In Gilbert's desert climate, a well-maintained irrigation system is essential for keeping your landscape healthy while conserving water. Regular maintenance prevents costly repairs and ensures your plants receive the right amount of water.</p>
      
      <h2>Monthly Maintenance Tasks</h2>
      <p>Perform these tasks monthly to keep your system running smoothly:</p>
      <ul>
        <li>Inspect all sprinkler heads for damage or misalignment</li>
        <li>Check for leaks in the system</li>
        <li>Test each zone to ensure proper coverage</li>
        <li>Clear debris from sprinkler heads</li>
        <li>Adjust watering schedules based on season</li>
      </ul>
      
      <h2>Seasonal Maintenance</h2>
      <p>Different seasons require different maintenance approaches:</p>
      <ul>
        <li><strong>Spring:</strong> Full system inspection, replace damaged components, adjust for increased watering needs</li>
        <li><strong>Summer:</strong> Monitor for increased water needs, check for heat-related issues</li>
        <li><strong>Fall:</strong> Prepare for reduced watering, inspect before winter</li>
        <li><strong>Winter:</strong> Protect from freezing, reduce watering schedules</li>
      </ul>
      
      <h2>Common Irrigation Problems</h2>
      <p>Watch for these common issues:</p>
      <ul>
        <li>Clogged sprinkler heads</li>
        <li>Broken or damaged pipes</li>
        <li>Controller malfunctions</li>
        <li>Water pressure problems</li>
        <li>Uneven water distribution</li>
      </ul>
      
      <h2>When to Call a Professional</h2>
      <p>While some maintenance can be DIY, consider professional help for:</p>
      <ul>
        <li>System design and installation</li>
        <li>Major repairs or replacements</li>
        <li>Controller programming and optimization</li>
        <li>Water efficiency audits</li>
        <li>Complex troubleshooting</li>
      </ul>
      
      <h2>Water Conservation Tips</h2>
      <p>Maximize water efficiency with these strategies:</p>
      <ul>
        <li>Water during early morning hours</li>
        <li>Use drip irrigation for plants and trees</li>
        <li>Group plants with similar water needs</li>
        <li>Install rain sensors to prevent unnecessary watering</li>
        <li>Regularly adjust schedules based on weather</li>
      </ul>
    `,
  },
  "paver-installation-guide": {
    title: "Complete Guide to Paver Installation in Gilbert",
    excerpt:
      "Everything you need to know about installing pavers in Gilbert's climate.",
    image: "/pavers.jpg",
    date: "2024-01-05",
    category: "Hardscaping",
    content: `
      <h2>Why Pavers Are Perfect for Gilbert</h2>
      <p>Pavers offer durability, beauty, and functionality that make them ideal for Gilbert's climate. They withstand temperature fluctuations, provide excellent drainage, and create stunning outdoor spaces.</p>
      
      <h2>Choosing the Right Paver Material</h2>
      <p>Select pavers based on your needs and budget:</p>
      <ul>
        <li><strong>Concrete Pavers:</strong> Cost-effective, durable, wide variety of styles</li>
        <li><strong>Natural Stone:</strong> Timeless beauty, unique character, higher cost</li>
        <li><strong>Brick:</strong> Classic appearance, excellent durability</li>
        <li><strong>Travertine:</strong> Elegant, cool underfoot, perfect for patios</li>
      </ul>
      
      <h2>Installation Process</h2>
      <p>Professional paver installation involves several critical steps:</p>
      <ul>
        <li>Site preparation and excavation</li>
        <li>Base material installation and compaction</li>
        <li>Sand bed preparation</li>
        <li>Paver placement and leveling</li>
        <li>Edge restraint installation</li>
        <li>Joint sand installation</li>
        <li>Final compaction and sealing</li>
      </ul>
      
      <h2>Climate Considerations for Gilbert</h2>
      <p>Gilbert's climate requires special attention:</p>
      <ul>
        <li>Proper base depth to prevent shifting</li>
        <li>Adequate drainage to handle monsoon rains</li>
        <li>UV-resistant jointing materials</li>
        <li>Expansion joints for temperature changes</li>
      </ul>
      
      <h2>Maintenance and Care</h2>
      <p>Keep your pavers looking great with regular maintenance:</p>
      <ul>
        <li>Sweep regularly to remove debris</li>
        <li>Wash periodically with appropriate cleaners</li>
        <li>Replenish joint sand as needed</li>
        <li>Seal pavers to protect from stains and weather</li>
        <li>Address weeds promptly</li>
      </ul>
    `,
  },
  "desert-landscaping-tips": {
    title: "Desert Landscaping Tips for Arizona Homeowners",
    excerpt:
      "Create a beautiful, water-efficient landscape that thrives in Arizona's desert climate.",
    image: "/landscapedesign.jpg",
    date: "2023-12-28",
    category: "Landscape Design",
    content: `
      <h2>Understanding Desert Landscaping</h2>
      <p>Desert landscaping, also known as xeriscaping, focuses on creating beautiful outdoor spaces that thrive with minimal water. In Gilbert, this approach is both environmentally responsible and cost-effective.</p>
      
      <h2>Choose Native and Desert-Adapted Plants</h2>
      <p>Select plants that naturally thrive in Arizona's climate:</p>
      <ul>
        <li>Desert trees: Mesquite, Palo Verde, Ironwood</li>
        <li>Native shrubs: Texas Sage, Desert Marigold, Fairy Duster</li>
        <li>Succulents: Agave, Aloe, Yucca</li>
        <li>Ground covers: Lantana, Verbena, Gazania</li>
      </ul>
      
      <h2>Water-Efficient Design Principles</h2>
      <p>Design your landscape to minimize water usage:</p>
      <ul>
        <li>Group plants by water needs (hydrozoning)</li>
        <li>Use mulch to retain moisture</li>
        <li>Install efficient irrigation systems</li>
        <li>Incorporate hardscaping to reduce plant areas</li>
        <li>Use landscape rock for low-maintenance areas</li>
      </ul>
      
      <h2>Soil Preparation</h2>
      <p>Proper soil preparation is crucial for desert plants:</p>
      <ul>
        <li>Improve drainage with amendments</li>
        <li>Test soil pH and adjust as needed</li>
        <li>Add organic matter for better water retention</li>
        <li>Consider raised beds for better drainage</li>
      </ul>
      
      <h2>Hardscaping Elements</h2>
      <p>Incorporate hardscaping to reduce water needs:</p>
      <ul>
        <li>Patios and walkways using pavers or stone</li>
        <li>Retaining walls for elevation changes</li>
        <li>Fire features for evening enjoyment</li>
        <li>Outdoor kitchens for entertaining</li>
      </ul>
      
      <h2>Maintenance Tips</h2>
      <p>Desert landscapes require less maintenance but still need care:</p>
      <ul>
        <li>Water deeply but infrequently</li>
        <li>Prune during appropriate seasons</li>
        <li>Monitor for pests and diseases</li>
        <li>Refresh mulch annually</li>
        <li>Adjust irrigation seasonally</li>
      </ul>
    `,
  },
  "tree-trimming-season": {
    title: "When is the Best Time to Trim Trees in Gilbert?",
    excerpt:
      "Learn the optimal timing for tree trimming in Gilbert to promote healthy growth.",
    image: "/treetrimming.png",
    date: "2023-12-20",
    category: "Tree Care",
    content: `
      <h2>Understanding Tree Trimming Seasons in Gilbert</h2>
      <p>Proper timing for tree trimming in Gilbert depends on the tree species, its health, and your goals. Understanding when to trim helps promote healthy growth and prevent damage.</p>
      
      <h2>Best Times for Different Tree Types</h2>
      <p>Tree trimming timing varies by species:</p>
      <ul>
        <li><strong>Deciduous Trees:</strong> Late fall to early winter when dormant</li>
        <li><strong>Evergreen Trees:</strong> Late winter to early spring</li>
        <li><strong>Fruit Trees:</strong> Late winter before bud break</li>
        <li><strong>Flowering Trees:</strong> After flowering to avoid removing buds</li>
      </ul>
      
      <h2>Seasonal Considerations</h2>
      <p>Each season offers different advantages:</p>
      <ul>
        <li><strong>Winter:</strong> Trees are dormant, easier to see structure, less stress on trees</li>
        <li><strong>Spring:</strong> Good for shaping and removing deadwood</li>
        <li><strong>Summer:</strong> Light pruning only, avoid heavy trimming</li>
        <li><strong>Fall:</strong> Minimal trimming, focus on safety pruning</li>
      </ul>
      
      <h2>When to Avoid Trimming</h2>
      <p>Certain times should be avoided:</p>
      <ul>
        <li>During active growth periods (stressful for trees)</li>
        <li>Extreme heat of summer</li>
        <li>When trees are stressed from drought</li>
        <li>Right before monsoon season</li>
      </ul>
      
      <h2>Emergency Trimming</h2>
      <p>Some situations require immediate attention regardless of season:</p>
      <ul>
        <li>Dead or damaged branches</li>
        <li>Branches threatening structures</li>
        <li>Safety hazards</li>
        <li>Disease or pest issues</li>
      </ul>
      
      <h2>Professional Tree Trimming</h2>
      <p>For best results, work with experienced tree care professionals who understand:</p>
      <ul>
        <li>Proper pruning techniques</li>
        <li>Tree biology and growth patterns</li>
        <li>Safety protocols</li>
        <li>Local tree species and their needs</li>
      </ul>
    `,
  },
  "water-efficient-landscaping": {
    title: "Water-Efficient Landscaping Solutions for Gilbert",
    excerpt: "Reduce your water usage while maintaining a beautiful landscape.",
    image: "/0T6A2167.jpg",
    date: "2023-12-15",
    category: "Landscape Design",
    content: `
      <h2>The Importance of Water Efficiency in Gilbert</h2>
      <p>Water conservation is essential in Gilbert's desert climate. Creating a water-efficient landscape helps reduce costs, conserve resources, and maintain beautiful outdoor spaces.</p>
      
      <h2>Xeriscaping Principles</h2>
      <p>Xeriscaping focuses on water-efficient landscaping:</p>
      <ul>
        <li>Planning and design for water efficiency</li>
        <li>Soil improvement for better water retention</li>
        <li>Appropriate plant selection</li>
        <li>Practical turf areas</li>
        <li>Efficient irrigation</li>
        <li>Use of mulches</li>
        <li>Appropriate maintenance</li>
      </ul>
      
      <h2>Water-Saving Plant Choices</h2>
      <p>Select plants that thrive with minimal water:</p>
      <ul>
        <li>Native Arizona plants</li>
        <li>Desert-adapted species</li>
        <li>Drought-tolerant varieties</li>
        <li>Low-water ground covers</li>
      </ul>
      
      <h2>Efficient Irrigation Systems</h2>
      <p>Maximize water efficiency with proper irrigation:</p>
      <ul>
        <li>Drip irrigation for targeted watering</li>
        <li>Smart controllers with weather sensors</li>
        <li>Proper zone design</li>
        <li>Regular system maintenance</li>
        <li>Watering during optimal times</li>
      </ul>
      
      <h2>Hardscaping for Water Conservation</h2>
      <p>Incorporate hardscaping to reduce water needs:</p>
      <ul>
        <li>Pavers and stone for patios</li>
        <li>Landscape rock instead of grass</li>
        <li>Retaining walls and raised beds</li>
        <li>Pathways and walkways</li>
      </ul>
      
      <h2>Maintenance for Water Efficiency</h2>
      <p>Proper maintenance reduces water needs:</p>
      <ul>
        <li>Regular mulching</li>
        <li>Appropriate pruning</li>
        <li>Weed control</li>
        <li>Soil improvement</li>
        <li>Seasonal adjustments</li>
      </ul>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found | Gilbert Yard Pros",
    };
  }

  return {
    title: `${post.title} | Gilbert Yard Pros Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

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
            <Link
              href="/blog"
              className="text-white/80 hover:text-white mb-4 inline-block"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <span>{post.category}</span>
              <span>•</span>
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            {post.image.endsWith(".mp4") ? (
              <video
                src={post.image}
                className="w-full h-full object-cover"
                muted
                playsInline
                autoPlay
                loop
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

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 bg-primary-green text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Landscape?
            </h2>
            <p className="text-xl mb-6">
              Get matched with trusted local contractors for your landscaping
              project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-block bg-white text-primary-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Quote Now
              </a>
              <a
                href="tel:4809876110"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Call 480-987-6110
              </a>
            </div>
          </div>
        </div>
      </article>

      <PartnerSection />
      <ContactForm />
    </>
  );
}
