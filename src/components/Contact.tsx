'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.reason) newErrors.reason = 'Please share why you’re contacting';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

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
              target="_blank"
              rel="noopener noreferrer"
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  errors.name ? 'ring-red-400' : 'ring-blue-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  errors.phone ? 'ring-red-400' : 'ring-blue-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  errors.email ? 'ring-red-400' : 'ring-blue-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Reason */}
            <div>
              <textarea
                name="reason"
                placeholder="What brings you here?"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  errors.reason ? 'ring-red-400' : 'ring-blue-300'
                }`}
              ></textarea>
              {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
            </div>

            {/* Preferred Time */}
            <div>
              <input
                type="text"
                name="preferredTime"
                placeholder="Preferred time to reach you"
                value={formData.preferredTime}
                onChange={handleChange}
                className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  errors.preferredTime ? 'ring-red-400' : 'ring-blue-300'
                }`}
              />
              {errors.preferredTime && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
              )}
            </div>

            {/* Agree to be contacted */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="agree" className="text-gray-700 text-sm">
                I agree to be contacted
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="bg-teal-700 text-white font-semibold py-2 px-6 rounded hover:bg-teal-800 transition"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            By submitting, you confirm you&apos;re 18+ and agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
