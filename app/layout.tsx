import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Gilbert Yard Pros | Professional Landscaping & Yard Maintenance Services",
  description:
    "Expert landscaping, lawn care, tree trimming, and yard maintenance services in Gilbert, Arizona. Professional paver installation, artificial turf, irrigation, and more.",
  keywords:
    "landscaping gilbert az, landscape paver installation gilbert az, artificial turf gilbert az, irrigation gilbert az, lawn service gilbert, tree removal gilbert az, yard clean up gilbert az, weed control gilbert, tree trimming gilbert az, gilbert landscaping maintenance, lawn care gilbert az, landscape design gilbert az, custom hardscaping gilbert az, landscape lighting gilbert az, landscape rock gilbert az",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingCompany",
              name: "Gilbert Yard Pros",
              description:
                "Connect with trusted local landscaping contractors in Gilbert, Arizona. Professional landscaping services including lawn care, tree trimming, paver installation, artificial turf, irrigation, and yard maintenance.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gilbert",
                addressRegion: "AZ",
                addressCountry: "US",
              },
              url: "https://www.gilbertyardpros.com",
              telephone: "480-987-6110",
              priceRange: "$$",
              openingHours: "Mo-Su 8:00-18:00",
              areaServed: {
                "@type": "City",
                name: "Gilbert",
                sameAs: "https://en.wikipedia.org/wiki/Gilbert,_Arizona",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gilbert Yard Pros",
              url: "https://www.gilbertyardpros.com",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
