'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TextReveal } from '@/components/common/TextReveal';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                Welcome to the Future
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Business
                <span className="text-gradient block">Partner</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Astrounaut provides innovative solutions and exceptional service
                to help your business reach new heights. We're here to guide you
                through every step of your journey.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                <TextReveal className="text-white font-medium text-lg">
                  Get Started
                </TextReveal>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
                <TextReveal className="text-secondary-900 dark:text-gray-100 font-medium text-lg">
                  Learn More
                </TextReveal>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <div className="text-6xl font-bold">🚀</div>
                <h3 className="text-2xl font-semibold">Astrounaut</h3>
                <p className="text-primary-100 dark:text-primary-200">
                  Launching Your Success
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">⭐</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-xl">💡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
