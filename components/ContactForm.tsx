"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    serviceArea: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1559c162-e5a1-43b9-96a4-b7590be94401",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          serviceArea: formData.serviceArea,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: "Gilbert Yard Pros Contact Form",
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max max-w-2xl mx-auto">
        <div className="glass rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200/50">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-600 mb-10 text-center text-lg">
            Fill out the form below and we'll connect you with a qualified
            contractor
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base bg-white hover:border-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base bg-white hover:border-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base bg-white hover:border-gray-400"
                placeholder="480-987-6110"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base bg-white hover:border-gray-400"
              >
                <option value="">Select a service</option>
                <option value="pavers">Pavers</option>
                <option value="artificial-turf">Artificial Turf</option>
                <option value="irrigation">Irrigation</option>
                <option value="tree-trimming">Tree Trimming</option>
                <option value="yard-clean-up">Yard Clean Up</option>
                <option value="weed-control">Weed Control</option>
                <option value="landscape-maintenance">
                  Landscape Maintenance
                </option>
                <option value="lawn-care">Lawn Care</option>
                <option value="landscape-design">Landscape Design</option>
                <option value="hardscaping">Hardscaping</option>
                <option value="landscape-lighting">Landscape Lighting</option>
                <option value="landscape-rock">Landscape Rock</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="serviceArea"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Area
              </label>
              <select
                id="serviceArea"
                name="serviceArea"
                value={formData.serviceArea}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base bg-white hover:border-gray-400"
              >
                <option value="">Select a service area</option>
                <option value="gilbert">Gilbert</option>
                <option value="mesa">Mesa</option>
                <option value="chandler">Chandler</option>
                <option value="san-tan-valley">San Tan Valley</option>
                <option value="queen-creek">Queen Creek</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green outline-none transition-all duration-200 active:border-primary-green touch-manipulation text-base resize-y"
                placeholder="Tell us about your project..."
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-green/50 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 touch-manipulation shadow-xl"
            >
              {isSubmitting ? "Submitting..." : "Get Free Estimate"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
