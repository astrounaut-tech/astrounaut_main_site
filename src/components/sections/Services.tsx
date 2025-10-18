'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  BarChart3,
  Palette,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Performance',
      'Secure & Scalable',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android',
      'Cross-Platform',
      'App Store Optimization',
      'Push Notifications',
    ],
  },
  {
    icon: BarChart3,
    title: 'Business Analytics',
    description:
      'Data-driven insights to help you make informed decisions and drive growth.',
    features: [
      'Custom Dashboards',
      'Real-time Reports',
      'Data Visualization',
      'Performance Tracking',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive designs that engage users and drive conversions.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description:
      'Comprehensive security measures to protect your business and customer data.',
    features: [
      'Security Audits',
      'Data Encryption',
      'Compliance',
      '24/7 Monitoring',
    ],
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description:
      'Complete digital overhaul to modernize your business processes and operations.',
    features: [
      'Process Automation',
      'Cloud Migration',
      'Integration',
      'Training & Support',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services to help your business
            thrive in the digital landscape. From development to design, we've
            got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
                <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our
              comprehensive services.
            </p>
            <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
