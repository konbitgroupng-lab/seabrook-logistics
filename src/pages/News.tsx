import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
const blessVideo = '/bless.mp4';
import seabrookTanker from '../assets/seabrook-tanker.jpg';
import storageTanks from '../assets/seabrook-storage-tanks.jpg';

const articles = [
  {
    title: 'Seabrook Logistics Expands Storage Capacity to 3.1 Million Barrels',
    date: 'March 15, 2026',
    category: 'Operations',
    excerpt:
      'The completion of our latest tank expansion project marks a significant milestone, increasing total storage capacity and enhancing our ability to serve growing customer demand on the Gulf Coast.',
    image: storageTanks,
  },
  {
    title: 'New Marine Dock Operational Ahead of Schedule',
    date: 'February 28, 2026',
    category: 'Marine',
    excerpt:
      'Our second deepwater dock is now fully operational, enabling simultaneous loading of Aframax and Suezmax vessels and reducing vessel wait times by over 30%.',
    image: seabrookTanker,
  },
  {
    title: 'Seabrook Logistics Achieves 365 Days Without a Lost Time Incident',
    date: 'January 10, 2026',
    category: 'Safety',
    excerpt:
      'This milestone reflects the dedication of our entire team to maintaining a culture where safety is the top priority in every task, every shift, every day.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'UAB-Online Digital Platform Integration Complete',
    date: 'December 5, 2025',
    category: 'Technology',
    excerpt:
      'Customers can now manage bookings, documentation, and compliance digitally through our integrated UAB-Online platform, streamlining operations and reducing paperwork.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Seabrook Logistics Partners with Local Environmental Group for Bay Cleanup',
    date: 'November 18, 2025',
    category: 'Community',
    excerpt:
      'Our team volunteered alongside local conservation organizations for the annual Galveston Bay shoreline cleanup, removing over 500 pounds of debris.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Leadership Transition: New Terminal Director Appointed',
    date: 'October 3, 2025',
    category: 'Company',
    excerpt:
      'We are pleased to announce the appointment of our new Terminal Director, bringing over 20 years of experience in bulk liquid storage and marine operations.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
];

const News: React.FC = () => {
  return (
    <div>
      {/* Page hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        {/* Background video — z-index 0 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={blessVideo} type="video/mp4" />
        </video>

        {/* Dark navy overlay — z-index 1 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(11,31,58,0.72)',
            zIndex: 1,
          }}
        />

        {/* Content — z-index 2 */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            NEWS & UPDATES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            The latest from Seabrook Logistics — operations, milestones, and community engagement.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Articles grid */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-steel text-xs font-body">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1 text-gold text-xs font-body">
                      <Tag size={12} />
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-navy text-lg mb-2 leading-tight group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-navy/70 font-body text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-semibold group-hover:underline">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
