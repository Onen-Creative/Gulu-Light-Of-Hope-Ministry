"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Church } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      console.log('Submitting form data:', data)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)

      if (response.ok && result.success) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        e.currentTarget.reset();
      } else {
        setSubmitMessage(
          "Sorry, there was an error sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770032975490_vicd6p"
            alt="Contact Us"
            width={1920}
            height={400}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            We'd love to hear from you. Get in touch with Gulu Light of Hope
            Bible Church & Outreach Ministries.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-6 rounded-lg max-w-3xl mx-auto mt-8">
            <p className="text-lg italic mb-2">
              "Let all things be done decently and in order."
            </p>
            <p className="text-gray-200 font-semibold">
              1 Corinthians 14:40 (NKJV)
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-6 bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-primary-100 p-4 rounded-xl">
                    <MapPin className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Our Location
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Adak Village, Gulu District
                      <br />
                      Northern Uganda
                      <br />
                      P.O. Box: 361143, Gulu
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-6 bg-gradient-to-br from-secondary-50 to-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-secondary-100 p-4 rounded-xl">
                    <Phone className="h-8 w-8 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Phone Numbers
                    </h3>
                    <p className="text-lg text-gray-800">
                      <a
                        href="tel:+256782509058"
                        className="hover:text-primary-600 transition-colors block mb-2"
                      >
                        +256 782 509 058
                      </a>
                      <a
                        href="tel:+256779756720"
                        className="hover:text-primary-600 transition-colors block"
                      >
                        +256 779 756 720
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6 bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Email Address
                    </h3>
                    <p className="text-lg text-gray-800">
                      <a
                        href="mailto:gulohbcom@gmail.com"
                        className="hover:text-primary-600 transition-colors"
                      >
                        gulohbcom@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Service Times */}
                <div className="flex items-start space-x-6 bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-primary-100 p-4 rounded-xl">
                    <Clock className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Service Times
                    </h3>
                    <div className="text-lg text-gray-800 space-y-2">
                      <p>
                        <strong>Sunday Worship:</strong> 9:00 AM - 12:00 PM
                      </p>
                      <p>
                        <strong>Bible Study:</strong> Wednesday 6:00 PM
                      </p>
                      <p>
                        <strong>Prayer Meeting:</strong> Friday 6:00 PM
                      </p>
                      <p>
                        <strong>Youth Fellowship:</strong> Saturday 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-2xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-lg font-semibold text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-lg font-semibold text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="+256 xxx xxx xxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donations & Support</option>
                      <option value="school">
                        Beacon of Hope Junior School
                      </option>
                      <option value="projects">Ministry Projects</option>
                      <option value="pastoral">Pastoral Care</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-vertical"
                      placeholder="Please share your message, prayer request, or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-6 w-6 mr-3" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-lg text-center font-medium ${
                        submitMessage.includes("Thank you")
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Branches */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Branches
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <Church className="h-12 w-12 text-primary-600 mr-4" />
                <h3 className="text-3xl font-bold text-primary-800">
                  Pawel Branch
                </h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Headquarters
              </p>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                Adak Village, Gulu District, Northern Uganda
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Central worship, administration, and discipleship center of the
                Ministry
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <Church className="h-12 w-12 text-secondary-600 mr-4" />
                <h3 className="text-3xl font-bold text-secondary-800">
                  Arapai Branch
                </h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Extension Ministry
              </p>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                Arapai Village, Lamogi Sub-county, Amuru District
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Growing fellowship with 80+ committed believers and weekly
                services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Visit Us
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              You are always welcome to join us for worship, fellowship, and
              community activities. Come as you are and experience God's love in
              our welcoming community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">New Visitors</h3>
              <p className="text-lg leading-relaxed">
                First time visiting? We'd love to welcome you and help you feel
                at home in our community.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Prayer Requests</h3>
              <p className="text-lg leading-relaxed">
                Need prayer? Our pastoral team and prayer warriors are here to
                support you in prayer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="text-lg leading-relaxed">
                Interested in volunteering or joining a ministry? We have many
                ways to serve and grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
