import Link from "next/link";

export default function Footer() {
  const services = [
    { name: "Pavers", href: "/services/pavers-gilbert" },
    { name: "Artificial Turf", href: "/services/artificial-turf-gilbert" },
    { name: "Irrigation", href: "/services/irrigation-gilbert" },
    { name: "Tree Trimming", href: "/services/tree-trimming-gilbert" },
    { name: "Yard Clean Up", href: "/services/yard-clean-up-gilbert" },
    { name: "Weed Control", href: "/services/weed-control-gilbert" },
    { name: "Maintenance", href: "/services/landscape-maintenance-gilbert" },
    { name: "Lawn Care", href: "/services/lawn-care-gilbert" },
    { name: "Landscape Design", href: "/services/landscape-design-gilbert" },
    { name: "Hardscaping", href: "/services/hardscaping-gilbert" },
    {
      name: "Landscape Lighting",
      href: "/services/landscape-lighting-gilbert",
    },
    { name: "Landscape Rock", href: "/services/landscape-rock-gilbert" },
  ];

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-green-light mb-4">
              Gilbert Yard Pros
            </h3>
            <p className="text-gray-400">
              Connect with trusted local landscaping contractors in Gilbert,
              Arizona.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary-green-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary-green-light transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/gilbert"
                  className="text-gray-400 hover:text-primary-green-light transition-colors"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 7).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-green-light transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">More Services</h4>
            <ul className="space-y-2">
              {services.slice(7).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-green-light transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Gilbert Yard Pros. All rights
            reserved.
          </p>
          <p className="text-center text-gray-500 text-sm max-w-3xl mx-auto mb-4">
            Gilbert Yard Pros is a referral and lead-generation platform. We
            connect homeowners with independent landscaping contractors. We do
            not perform landscaping work directly.
          </p>
          <p className="text-center text-gray-400 text-sm">
            Proud partner:{" "}
            <a
              href="https://theyardexperts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green-light hover:text-primary-green transition-colors"
            >
              The Yard Experts
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
