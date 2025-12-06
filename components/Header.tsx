"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceAreasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isServicesOpen && !isServiceAreasOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is outside services dropdown
      if (
        isServicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(target)
      ) {
        setIsServicesOpen(false);
      }

      // Check if click is outside service areas dropdown
      if (
        isServiceAreasOpen &&
        serviceAreasRef.current &&
        !serviceAreasRef.current.contains(target)
      ) {
        setIsServiceAreasOpen(false);
      }
    };

    // Use click event instead of mousedown to allow link clicks to process first
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isServicesOpen, isServiceAreasOpen]);

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

  const serviceAreas = [
    { name: "Gilbert", href: "/" },
    { name: "Mesa", href: "/service-areas/mesa" },
    { name: "Chandler", href: "/service-areas/chandler" },
    { name: "San Tan Valley", href: "/service-areas/san-tan-valley" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container-max py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/GYPLOGO.png"
              alt="Gilbert Yard Pros"
              width={300}
              height={90}
              className="h-20 md:h-24 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Home
            </Link>
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsServiceAreasOpen(false);
                }}
                onMouseEnter={() => {
                  if (!isServicesOpen) {
                    setIsServicesOpen(true);
                    setIsServiceAreasOpen(false);
                  }
                }}
                className="text-gray-700 hover:text-primary-green transition-colors font-medium flex items-center"
              >
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[100]"
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-green hover:text-white transition-colors font-medium"
                    onClick={(e) => {
                      setIsServicesOpen(false);
                      e.stopPropagation();
                    }}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-green hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        setIsServicesOpen(false);
                        e.stopPropagation();
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" ref={serviceAreasRef}>
              <button
                type="button"
                onClick={() => {
                  setIsServiceAreasOpen(!isServiceAreasOpen);
                  setIsServicesOpen(false);
                }}
                onMouseEnter={() => {
                  if (!isServiceAreasOpen) {
                    setIsServiceAreasOpen(true);
                    setIsServicesOpen(false);
                  }
                }}
                className="text-gray-700 hover:text-primary-green transition-colors font-medium flex items-center"
              >
                Service Areas
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isServiceAreasOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServiceAreasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[100]"
                  onMouseLeave={() => setIsServiceAreasOpen(false)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href="/service-areas"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-green hover:text-white transition-colors font-medium"
                    onClick={(e) => {
                      setIsServiceAreasOpen(false);
                      e.stopPropagation();
                    }}
                  >
                    All Service Areas
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-green hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        setIsServiceAreasOpen(false);
                        e.stopPropagation();
                      }}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:4809876110"
              className="bg-primary-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-green-dark transition-colors text-center"
            >
              480-987-6110
            </a>
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-primary-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-green transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-gray-200 my-1"></div>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-primary-green transition-colors font-medium px-2 py-2 flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/services"
                      className="block text-gray-600 hover:text-primary-green transition-colors text-sm px-2 py-1"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-600 hover:text-primary-green transition-colors text-sm px-2 py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                  className="w-full text-left text-gray-700 hover:text-primary-green transition-colors font-medium px-2 py-2 flex items-center justify-between"
                >
                  <span>Service Areas</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServiceAreasOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServiceAreasOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/service-areas"
                      className="block text-gray-600 hover:text-primary-green transition-colors text-sm px-2 py-1"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServiceAreasOpen(false);
                      }}
                    >
                      All Service Areas
                    </Link>
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block text-gray-600 hover:text-primary-green transition-colors text-sm px-2 py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServiceAreasOpen(false);
                        }}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary-green transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-green transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="tel:4809876110"
                className="bg-primary-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-green-dark transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                480-987-6110
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
