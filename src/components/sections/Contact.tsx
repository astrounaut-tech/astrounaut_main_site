// /Users/dev-harsh0218/Business/Astrounaut/main-site/src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@astrounaut.com',
    description: "Send us an email and we'll get back to you within 24 hours",
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Speak directly with our team during business hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'San Francisco, CA',
    description: 'Come visit our office for an in-person consultation',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri, 9AM - 6PM PST',
    description: "We're available during standard business hours",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-[#0b0f14]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Let's discuss how we
            can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-white dark:from-[#0f1a24] dark:to-[#0e1720] rounded-3xl p-8 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-[#0f1a24] rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send us a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-[#161b22] text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-[#161b22] text-gray-900 dark:text-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-[#161b22] text-gray-900 dark:text-white"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-[#161b22] text-gray-900 dark:text-white"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 w-full sm:w-auto"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We'd love to hear from you. Reach out to us through any of the
                following channels, and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-[#161b22] rounded-2xl shadow-sm border border-gray-100 dark:border-[#30363d] hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-[#0f1a24] rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-[#0f1a24] dark:to-[#0e1720] rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">
                Ready to Start Your Project?
              </h4>
              <p className="mb-6 opacity-90">
                Let's schedule a free consultation to discuss your needs and how
                we can help.
              </p>
              <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Schedule a Call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
