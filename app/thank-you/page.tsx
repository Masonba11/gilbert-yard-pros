import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Gilbert Yard Pros",
  description: "Thank you for contacting Gilbert Yard Pros. We'll be in touch soon!",
  openGraph: {
    title: "Thank You | Gilbert Yard Pros",
    description: "Thank you for contacting Gilbert Yard Pros. We'll be in touch soon!",
    url: "https://www.gilbertyardpros.com/thank-you",
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
    title: "Thank You | Gilbert Yard Pros",
    description: "Thank you for contacting Gilbert Yard Pros. We'll be in touch soon!",
    images: ["https://www.gilbertyardpros.com/GYPLOGO.png"],
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-primary-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We've received your message and will contact you soon.
        </p>
        <p className="text-gray-600 mb-8">
          One of our trusted local contractors will reach out to you shortly to
          discuss your landscaping project and provide a free estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-green-dark transition-colors"
          >
            Return to Home
          </Link>
          <a
            href="tel:4809876110"
            className="inline-block bg-white text-primary-green border-2 border-primary-green px-8 py-3 rounded-lg font-semibold hover:bg-primary-green hover:text-white transition-colors"
          >
            Call 480-987-6110
          </a>
        </div>
      </div>
    </div>
  );
}

