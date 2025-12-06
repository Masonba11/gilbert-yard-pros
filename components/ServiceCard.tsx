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
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-lg active:scale-[0.98] transition-all duration-200 overflow-hidden touch-manipulation"
    >
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        {imageUrl ? (
          imageUrl.endsWith(".mp4") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
              <source src={imageUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
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
        <span className="inline-block mt-4 text-primary-green font-semibold transition-transform duration-200 group-hover:translate-x-1">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
