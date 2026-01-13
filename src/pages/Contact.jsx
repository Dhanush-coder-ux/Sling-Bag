import React, { useState } from "react";
import NavBar from "../section/NavBar";
import { MobileAppBar } from "../section/MobileAppBar";
import { isMobile } from "react-device-detect";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen max-sm:mb-20">
      {isMobile ? (
        <MobileAppBar appbarTitle="Contact Us" withBackArrow={false} />
      ) : (
        <NavBar />
      )}

      {/* HERO */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Get in <span className="text-black">Touch</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have a question, feedback, or need support?  
          We’d love to hear from you.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* CONTACT INFO */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
            <p className="text-gray-600">
              123 Fashion Street,<br />
              Chennai, Tamil Nadu
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">✉ Email</h3>
            <p className="text-gray-600">support@yourstore.com</p>
          </div>

          
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@email.com"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-black">
                Message Sent 🎉
              </h2>
              <p className="mt-3 text-gray-600">
                We’ll get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
