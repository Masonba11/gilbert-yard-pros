import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            View our proud partner
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/TYE-Landscape-Services-Logo.png"
              alt="The Yard Experts"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/X20a8hMdoUA?start=1"
              title="The Yard Experts Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3_Jv61seQ9M"
              title="The Yard Experts Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
