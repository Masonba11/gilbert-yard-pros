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
      className="group block card-modern touch-manipulation active:scale-[0.98]"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {imageUrl ? (
          imageUrl.endsWith(".mp4") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
              <source src={imageUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )
        ) : (
          <div className="w-full h-full gradient-primary flex items-center justify-center">
            <span className="text-white text-5xl font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 bg-gray-900">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-green transition-colors duration-200">{title}</h3>
        <p className="text-white mb-4 leading-relaxed">{description}</p>
        <span className="inline-flex items-center text-primary-green font-bold transition-all duration-300 group-hover:translate-x-2">
          Learn More
          <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
