'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#e0f3f3] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/serena.jpg"
            alt="Dr. Serena Blake"
            width={300}
            height={300}
            className="rounded-md object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I&apos;m a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with 8 years of experience and 500+ client sessions.
            I blend evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.
            Whether you meet in my Maplewood Drive office or connect virtually via Zoom, I&apos;m committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
