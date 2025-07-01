export default function Contact() {
  return (
    <section id="contact" className="bg-[#c7ebf0] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Office Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h2>
          <p className="text-gray-700 leading-6">
            287 Maplewood Drive<br />
            Los Angeles<br />
            CA 90026<br />
            <a
              href="https://www.google.com/maps"
              className="text-blue-600 underline mt-2 inline-block"
              target="_blank" rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Office Hours</h3>
          <p className="text-gray-700">
            <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
            <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Contact</h3>
          <p className="text-gray-700">📞 (323) 555-0192</p>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Get In Touch</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 ring-blue-300"
              required
            />
            <input
              type="email"
              placeholder="you@example.com"
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 ring-blue-300"
              required
            />
            <input
              type="tel"
              placeholder="(555) 234-5678"
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 ring-blue-300"
              required
            />
            <textarea
              placeholder="How can I help you?"
              rows={4}
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 ring-blue-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-700 text-white font-semibold py-2 px-6 rounded hover:bg-teal-800 transition"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            By submitting, you confirm you're 18+ and agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
