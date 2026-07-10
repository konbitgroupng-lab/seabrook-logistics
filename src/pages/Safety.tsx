import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import { Shield, HardHat, AlertTriangle, HeartPulse } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import hero1Video from '../assets/hero-1.mp4';
import 'swiper/css';
import 'swiper/css/pagination';

const stats = [
  { value: 0, suffix: '', label: 'Lost Time Incidents', icon: AlertTriangle },
  { value: 365, suffix: '+', label: 'Days Without Incident', icon: Shield },
  { value: 100, suffix: '%', label: 'Safety Training Compliance', icon: HardHat },
  { value: 24, suffix: '/7', label: 'On-Site Safety Coverage', icon: HeartPulse },
];

const quotes = [
  {
    name: 'James Mitchell',
    role: 'Terminal Operations Manager',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Safety is not just a policy here — it is a culture. Every person on this terminal has the authority and obligation to stop work if something does not feel right. That empowerment saves lives.',
  },
  {
    name: 'Sarah Chen',
    role: 'HSE Director',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote:
      'We have built a system where safety is integrated into every process. From pre-job briefings to real-time monitoring, our goal is zero harm — to our people, our community, and our environment.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Marine Supervisor',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'Working on the docks means dealing with massive vessels and volatile products. Our training programs and strict protocols give me confidence that every shift ends with everyone going home safe.',
  },
];

const programs = [
  {
    title: 'Behavior-Based Safety',
    desc: 'Peer-to-peer observation and feedback programs that reinforce safe behaviors and identify at-risk conditions before incidents occur.',
  },
  {
    title: 'Emergency Response',
    desc: 'Fully equipped on-site emergency response team with regular drills, mutual aid agreements with local fire departments, and 24/7 coverage.',
  },
  {
    title: 'Process Safety Management',
    desc: 'Comprehensive PSM program covering hazard analysis, mechanical integrity, management of change, and incident investigation.',
  },
  {
    title: 'Marine Safety Protocols',
    desc: 'Strict vessel inspection, mooring procedures, and cargo handling protocols aligned with OCIMF and ISGOTT standards.',
  },
];

const Safety: React.FC = () => {
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
          <source src={hero1Video} type="video/mp4" />
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
            SAFETY FIRST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            Zero harm is not just a goal. It is our non-negotiable standard.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Stats */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-sm p-8 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <stat.icon className="text-gold" size={24} />
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-gold font-mono text-4xl font-semibold">
                    <CountUp end={stat.value} duration={2.5} />
                  </span>
                  <span className="text-gold font-mono text-2xl font-semibold">{stat.suffix}</span>
                </div>
                <span className="text-navy/70 uppercase text-xs font-body tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Quote carousel */}
      <section className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">VOICES OF SAFETY</h2>
            <p className="text-steel font-body text-base md:text-lg">
              Hear from the people who make safety a reality every day.
            </p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            className="pb-12"
          >
            {quotes.map((quote) => (
              <SwiperSlide key={quote.name}>
                <div className="bg-navy-light rounded-sm p-8 md:p-12 text-center">
                  <img
                    src={quote.photo}
                    alt={quote.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-gold"
                  />
                  <blockquote className="text-white font-body text-base md:text-lg leading-relaxed mb-6 italic">
                    "{quote.quote}"
                  </blockquote>
                  <p className="text-gold font-semibold font-body">{quote.name}</p>
                  <p className="text-steel text-sm font-body">{quote.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <PipelineDivider />

      {/* Programs */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-navy text-4xl md:text-5xl mb-4">SAFETY PROGRAMS</h2>
            <p className="text-navy/70 font-body text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive systems and protocols that protect our people and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-sm p-8 shadow-sm"
              >
                <h3 className="font-heading text-navy text-xl mb-3">{prog.title}</h3>
                <p className="text-navy/80 font-body text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
