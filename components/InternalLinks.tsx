import Link from "next/link";

const services = [
  { name: "Pavers", href: "/services/pavers-gilbert" },
  { name: "Artificial Turf", href: "/services/artificial-turf-gilbert" },
  { name: "Irrigation Installations", href: "/services/irrigation-gilbert" },
  { name: "Tree Trimming", href: "/services/tree-trimming-gilbert" },
  { name: "Yard Clean Up", href: "/services/yard-clean-up-gilbert" },
  { name: "Weed Control", href: "/services/weed-control-gilbert" },
  { name: "Maintenance", href: "/services/landscape-maintenance-gilbert" },
  { name: "Lawn Care", href: "/services/lawn-care-gilbert" },
  { name: "Landscape Design", href: "/services/landscape-design-gilbert" },
  { name: "Hardscaping", href: "/services/hardscaping-gilbert" },
  { name: "Landscape Lighting", href: "/services/landscape-lighting-gilbert" },
  { name: "Landscape Rock", href: "/services/landscape-rock-gilbert" },
];

export default function InternalLinks() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-12">
      <p className="text-gray-700 mb-4">
        Looking for more services in Gilbert? We also offer{" "}
        {services.map((service, index) => (
          <span key={service.href}>
            {index > 0 && index < services.length - 1 && ", "}
            {index === services.length - 1 && " and "}
            <Link
              href={service.href}
              className="text-primary-green hover:text-primary-green-dark font-semibold"
            >
              {service.name}
            </Link>
          </span>
        ))}{" "}
        services throughout Gilbert, Arizona.
      </p>
    </div>
  );
}
