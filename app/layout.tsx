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
  openGraph: {
    title:
      "Gilbert Yard Pros | Professional Landscaping & Yard Maintenance Services",
    description:
      "Expert landscaping, lawn care, tree trimming, and yard maintenance services in Gilbert, Arizona. Professional paver installation, artificial turf, irrigation, and more.",
    url: "https://www.gilbertyardpros.com",
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
      "Gilbert Yard Pros | Professional Landscaping & Yard Maintenance Services",
    description:
      "Expert landscaping, lawn care, tree trimming, and yard maintenance services in Gilbert, Arizona. Professional paver installation, artificial turf, irrigation, and more.",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Gilbert Yard Pros",
              description:
                "Professional landscaping and yard maintenance services in Gilbert, Arizona. Connect with trusted local contractors for pavers, turf, irrigation, lawn care, and tree trimming.",
              url: "https://www.gilbertyardpros.com",
              telephone: "480-987-6110",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gilbert",
                addressRegion: "AZ",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.3528,
                longitude: -111.789,
              },
              openingHours: "Mo-Su 08:00-18:00",
              areaServed: ["Gilbert AZ"],
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
