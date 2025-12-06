export default function HowItWorks({ serviceName }: { serviceName: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Tell us about your project
          </h3>
          <p className="text-gray-700">
            Share details about your {serviceName.toLowerCase()} needs and
            preferences.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            We match you with a qualified local contractor
          </h3>
          <p className="text-gray-700">
            We connect you with experienced {serviceName.toLowerCase()}{" "}
            contractors in Gilbert.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            The contractor contacts you with a quote
          </h3>
          <p className="text-gray-700">
            Your matched contractor reaches out with a free estimate for your
            project.
          </p>
        </div>
      </div>
    </div>
  );
}
