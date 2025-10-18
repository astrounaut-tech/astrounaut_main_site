'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our experienced professionals bring years of industry knowledge to every project.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description:
      'We focus on delivering results that align with your business objectives.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Excellence is our standard. We never compromise on quality or attention to detail.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description:
      'Your success is our success. We build lasting partnerships with our clients.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">Astrounaut</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team dedicated to helping businesses thrive in
            the digital age. With innovative solutions and personalized service,
            we're your trusted partner for success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
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
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge solutions and exceptional
              service, helping them navigate the complexities of the modern
              marketplace and achieve sustainable growth. We believe in building
              long-term partnerships based on trust, innovation, and shared
              success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
