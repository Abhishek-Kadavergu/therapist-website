'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Christian Individual Counseling in Richmond, VA',
    description: 'Discover Peace, Purpose, and God’s Truth in Richmond, VA.',
    image: '/individual.png',
  },
  {
    title: 'Christian Couples Counseling in Richmond, VA',
    description: 'Heal Your Relationship, Grow Closer to God Together in Richmond.',
    image: '/couple.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">How I Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#c7e4e5] border border-gray-400 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={300}
                className="rounded-t-xl w-full object-cover h-60"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional right-bottom corner plant image */}
      <div className="hidden lg:block absolute bottom-4 right-4">
        <Image src="/plant.png" alt="plant" width={120} height={120} />
      </div>
    </section>
  );
}
