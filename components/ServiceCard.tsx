import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageUrl,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-video bg-gray-200 relative">
        {imageUrl ? (
          imageUrl.endsWith(".mp4") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={imageUrl} type="video/mp4" />
            </video>
          ) : (
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          )
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-green-light to-primary-green flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <span className="inline-block mt-4 text-primary-green font-semibold">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
