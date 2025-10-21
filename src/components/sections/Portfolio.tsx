'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  Globe,
  Smartphone,
  BarChart3,
  Palette,
  Shield,
  Zap,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  Star,
  Sparkles,
  Rocket,
  Code,
  Layers,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextReveal } from '@/components/common/TextReveal';

const categories = [
  { id: 'all', name: 'All', icon: Filter, color: 'from-gray-500 to-gray-600' },
  { id: 'web', name: 'Web', icon: Globe, color: 'from-blue-500 to-cyan-600' },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'design',
    name: 'Design',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'transformation',
    name: 'Transformation',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    subtitle: 'Next-Gen Shopping Platform',
    description:
      'A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    category: 'web',
    image: '/api/placeholder/800/600',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
    duration: '6 months',
    stats: {
      users: '50K+',
      revenue: '$2M+',
      conversion: '+35%',
    },
    gradient: 'from-blue-500 via-purple-600 to-indigo-700',
    emoji: '🛒',
    accent: 'blue',
    complexity: 'High',
    impact: 'Revolutionary',
  },
  {
    id: 2,
    title: 'Banking App',
    subtitle: 'Secure Mobile Banking',
    description:
      'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
    category: 'mobile',
    image: '/api/placeholder/800/600',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Biometric'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
    duration: '8 months',
    stats: {
      users: '100K+',
      transactions: '1M+',
      rating: '4.9/5',
    },
    gradient: 'from-green-500 via-teal-600 to-cyan-700',
    emoji: '🏦',
    accent: 'green',
    complexity: 'High',
    impact: 'Game-changing',
  },
  {
    id: 3,
    title: 'Health Analytics',
    subtitle: 'AI-Powered Dashboard',
    description:
      'Real-time healthcare analytics dashboard for patient monitoring and medical data visualization.',
    category: 'analytics',
    image: '/api/placeholder/800/600',
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'ML'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2023',
    duration: '4 months',
    stats: {
      patients: '25K+',
      accuracy: '99.2%',
      efficiency: '+40%',
    },
    gradient: 'from-red-500 via-pink-600 to-rose-700',
    emoji: '🏥',
    accent: 'red',
    complexity: 'Medium',
    impact: 'Life-saving',
  },
  {
    id: 4,
    title: 'SaaS Platform',
    subtitle: 'Modern UI Design',
    description:
      'Modern, intuitive user interface design for a B2B SaaS platform with advanced user experience optimization.',
    category: 'design',
    image: '/api/placeholder/800/600',
    technologies: ['Figma', 'Framer', 'Design Systems', 'Prototyping'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2023',
    duration: '3 months',
    stats: {
      users: '15K+',
      satisfaction: '95%',
      adoption: '+60%',
    },
    gradient: 'from-orange-500 via-yellow-600 to-amber-700',
    emoji: '🎨',
    accent: 'orange',
    complexity: 'Medium',
    impact: 'Transformative',
  },
  {
    id: 5,
    title: 'CyberShield',
    subtitle: 'Security Suite',
    description:
      'Comprehensive cybersecurity solution with threat detection, incident response, and compliance monitoring.',
    category: 'security',
    image: '/api/placeholder/800/600',
    technologies: ['Python', 'Elasticsearch', 'Kubernetes', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    year: '2024',
    duration: '10 months',
    stats: {
      threats: '10K+',
      blocked: '99.8%',
      response: '<5min',
    },
    gradient: 'from-gray-500 via-slate-600 to-zinc-700',
    emoji: '🛡️',
    accent: 'gray',
    complexity: 'High',
    impact: 'Critical',
  },
  {
    id: 6,
    title: 'Digital Evolution',
    subtitle: 'Manufacturing Transformation',
    description:
      'Complete digital overhaul for a traditional manufacturing company, modernizing processes and systems.',
    category: 'transformation',
    image: '/api/placeholder/800/600',
    technologies: ['Cloud Migration', 'Process Automation', 'IoT', 'AI/ML'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: '2023',
    duration: '12 months',
    stats: {
      efficiency: '+50%',
      cost: '-30%',
      time: '-45%',
    },
    gradient: 'from-indigo-500 via-blue-600 to-purple-700',
    emoji: '🏭',
    accent: 'indigo',
    complexity: 'High',
    impact: 'Revolutionary',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.icon;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.name;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117]">
      <section className="relative section-padding bg-gradient-to-br from-primary-50 to-white dark:from-[#0b0f14] dark:to-[#0b0f14] overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              <span>Innovation in Action</span>
              <Rocket className="h-4 w-4" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Selected
              <span className="text-gradient block">Work</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Where creativity meets technology. Each project tells a story of
              innovation, problem-solving, and exceptional results that push
              boundaries and exceed expectations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2 bg-white dark:bg-[#161b22] px-4 py-2 rounded-full shadow-sm">
                  <Users className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium">50+ Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#161b22] px-4 py-2 rounded-full shadow-sm">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">98% Success</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-[#161b22] px-4 py-2 rounded-full shadow-sm">
                  <Code className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">15+ Tech Stacks</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Creative Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden',
                  activeCategory === category.id
                    ? 'text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <TextReveal className="text-sm font-medium">
                    {category.name}
                  </TextReveal>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Creative Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative bg-white dark:bg-[#161b22] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-[#30363d] h-full">
                      {/* Creative Project Visual */}
                      <div className="relative">
                        <div
                          className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                        >
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
                          </div>

                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                          {/* Creative Project Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                scale: hoveredProject === project.id ? 1.3 : 1,
                                rotate: hoveredProject === project.id ? 15 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="relative"
                            >
                              <div className="text-6xl">{project.emoji}</div>
                              {/* Floating particles effect */}
                              {hoveredProject === project.id && (
                                <>
                                  <motion.div
                                    animate={{
                                      y: [-10, -30, -10],
                                      opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                    className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full"
                                  />
                                  <motion.div
                                    animate={{
                                      y: [-5, -25, -5],
                                      opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.5,
                                    }}
                                    className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white rounded-full"
                                  />
                                </>
                              )}
                            </motion.div>
                          </div>

                          {/* Creative Badges */}
                          {project.featured && (
                            <div className="absolute top-4 left-4">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-1 rounded-full shadow-lg"
                              >
                                <Star className="h-3 w-3 fill-current" />
                                <span className="text-xs font-bold">
                                  Featured
                                </span>
                              </motion.div>
                            </div>
                          )}

                          <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-1 bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                              {CategoryIcon && (
                                <CategoryIcon className="h-3 w-3 text-primary-600" />
                              )}
                              <span className="text-xs font-medium text-gray-900 dark:text-white">
                                {getCategoryName(project.category)}
                              </span>
                            </div>
                          </div>

                          <div className="absolute bottom-4 left-4">
                            <div className="bg-white/90 dark:bg-[#161b22]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                              <span className="text-xs font-bold text-gray-900 dark:text-white">
                                {project.year}
                              </span>
                            </div>
                          </div>

                          {/* Impact Badge */}
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-gradient-to-r from-green-400 to-green-500 text-green-900 px-2 py-1 rounded-full shadow-sm">
                              <span className="text-xs font-bold">
                                {project.impact}
                              </span>
                            </div>
                          </div>

                          {/* Creative Hover Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            className="absolute inset-0 bg-primary-600/95 flex items-center justify-center gap-6"
                          >
                            <motion.a
                              href={project.liveUrl}
                              className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View live project"
                            >
                              <ExternalLink className="h-6 w-6 text-primary-600" />
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View source code"
                            >
                              <Github className="h-6 w-6 text-primary-600" />
                            </motion.a>
                          </motion.div>
                        </div>
                      </div>

                      {/* Enhanced Project Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale:
                                    hoveredProject === project.id
                                      ? [1, 1.2, 1]
                                      : 1,
                                }}
                                transition={{
                                  duration: 0.5,
                                  delay: i * 0.1,
                                  repeat:
                                    hoveredProject === project.id
                                      ? Infinity
                                      : 0,
                                }}
                                className="w-2 h-2 bg-primary-400 rounded-full"
                              />
                            ))}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                          {project.subtitle}
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Creative Technology Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-2 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-[#161b22] text-gray-600 dark:text-gray-300 text-xs rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Enhanced Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex gap-4">
                            {Object.entries(project.stats)
                              .slice(0, 2)
                              .map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                                    {key}
                                  </div>
                                </div>
                              ))}
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium"
                          >
                            <TextReveal className="text-sm font-medium">
                              Explore
                            </TextReveal>
                            <ArrowRight className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Creative CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-[#0f1a24] dark:via-[#0e1720] dark:to-[#0f1a24] rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
              {/* Creative Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-sm" />
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full blur-sm" />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Layers className="h-12 w-12 text-white/80" />
                </motion.div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Build Something Extraordinary?
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's collaborate to create innovative solutions that not only
                  meet your goals but exceed your wildest expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    <TextReveal className="text-primary-600 font-semibold">
                      Start Your Project
                    </TextReveal>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors shadow-lg"
                  >
                    <TextReveal className="text-white font-semibold">
                      View Case Studies
                    </TextReveal>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
