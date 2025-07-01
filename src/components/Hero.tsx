"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/hero-bg.png')`,
      }}
    >
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Counseling for Healing & Growth
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">
          Personalized therapy with Dr. Serena Blake, PsyD
        </h2>
        <a
          href="#contact"
          className="bg-white text-gray-800 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
