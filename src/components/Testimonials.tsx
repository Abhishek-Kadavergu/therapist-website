// components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="bg-[#c9eaef] py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Tag Label */}
        <div className="mb-4">
          <span className="bg-yellow-200 text-gray-800 text-sm font-medium px-4 py-1 rounded-full">
            Client Success Stories & Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Former Clients Say
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          Real experiences from individuals who have found healing and growth
          through our work together.
        </p>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-[#e8f5f7] rounded-xl shadow-md p-6 max-w-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Happy Client
            </h3>
            <p className="text-gray-700">
              Client testimonials are <strong>coming soon</strong>. Please
              check back later for insights from those who have worked with
              Ellie Shumaker, LCSW.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
