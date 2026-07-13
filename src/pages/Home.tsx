import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowRight } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import hero1 from '../assets/hero-1.mp4';
import seabrookTanker from '../assets/seabrook-tanker.jpg';
import storageTanks from '../assets/seabrook-storage-tanks.jpg';
import pipelineImg from '../assets/seabrook-pipeline.jpg';
import labTechImg from '../assets/seabrook-lab-tech.jpg';

// Hero video sources — slot 1 is bundled (Vite import), slot 2 served from public/
const HERO_VIDEOS = [hero1, '/HeroE.mp4'];
const SLIDE_MS = 9000; // ms each video is visible before crossfading to the next

const stats = [
  { value: 3.1, suffix: 'M+', label: 'STORAGE CAPACITY' },
  { value: 2, suffix: '', label: 'DEEPWATER DOCKS' },
  { value: 45, suffix: 'ft', label: 'MAX DRAFT DEPTH' },
];

const Home: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Cycle to the next video every SLIDE_MS milliseconds
  useEffect(() => {
    const t = setInterval(
      () => setActiveIdx((prev) => (prev + 1) % HERO_VIDEOS.length),
      SLIDE_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero — negative margin pulls it up to sit flush behind the fixed navbar */}
      <section
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-[96px]"
        style={{ background: '#0B1F3A' }}
      >
        {/* Two always-mounted, always-looping videos that crossfade via opacity */}
        {HERO_VIDEOS.map((src, idx) => (
          <video
            key={idx}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: idx === activeIdx ? 1 : 0,
              transition: 'opacity 0.9s ease-in-out',
              zIndex: idx === activeIdx ? 2 : 1,
            }}
          />
        ))}

        {/* Dark overlay — sits above videos, below content */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(11,31,58,0.55)', zIndex: 3 }}
        />

        {/* Content */}
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ zIndex: 4 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
          >
            DEEPWATER. CONNECTED. RELIABLE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-steel text-base sm:text-lg md:text-xl font-body max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Crude oil and condensate storage on the Houston Ship Channel — engineered for scale, built for the energy transition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body px-8 py-3.5 rounded hover:bg-gold-light transition-colors"
            >
              Explore Our Terminal
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold font-body px-8 py-3.5 rounded hover:bg-white hover:text-navy transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Slide indicator dots — clickable, gold pill for active, muted dot for inactive */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {HERO_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: 6,
                width: idx === activeIdx ? 28 : 8,
                borderRadius: 3,
                background:
                  idx === activeIdx ? '#D4A017' : 'rgba(255,255,255,0.45)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.35s ease, background 0.35s ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center px-10 py-4"
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-gold font-mono text-5xl font-semibold">
                      <CountUp
                        end={stat.value}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyDelay={200}
                      />
                    </span>
                    <span className="text-gold font-mono text-3xl font-semibold">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="text-white uppercase text-xs font-body tracking-[0.12em]">
                    {stat.label}
                  </span>
                </motion.div>
                {idx < stats.length - 1 && (
                  <>
                    <div className="hidden sm:block w-px h-12 bg-gold" />
                    <div className="sm:hidden w-24 h-px bg-gold my-1" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Intro section */}
      <section className="bg-offwhite py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-navy text-4xl md:text-5xl mb-6">
              A STRATEGIC HUB FOR ENERGY LOGISTICS
            </h2>
            <p className="text-navy/80 font-body text-base md:text-lg leading-relaxed mb-8">
              Seabrook Logistics, LLC is a 50/50 joint venture between LBC Tank Terminals and Magellan Midstream Partners, 
              operating a world-class crude oil and condensate storage terminal on Galveston Bay. With deepwater access, 
              direct pipeline connectivity, and a commitment to safety and sustainability, we are the Gulf Coast's trusted 
              partner for energy storage and distribution.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-semibold font-body hover:text-gold-dark transition-colors"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <PipelineDivider />

      {/* Services preview */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/OurServices.mp4" type="video/mp4" />
        </video>
        {/* Dark navy overlay so text stays readable */}
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">OUR SERVICES</h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto">
              Integrated storage, marine, and pipeline solutions designed for the demands of modern energy markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Crude Oil & Condensate Storage',
                desc: '3.1M+ barrels with nitrogen blanketing, vapor treatment, blending, and filtering.',
                image: storageTanks,
              },
              {
                title: 'Marine Dock Operations',
                desc: 'Aframax and Suezmax docks with 45ft draft and 40,000 bpd loading rate.',
                image: seabrookTanker,
              },
              {
                title: 'Pipeline Connectivity',
                desc: '24-inch bidirectional pipeline directly connected to the Magellan Houston system.',
                image: pipelineImg,
              },
              {
                title: 'Specialized Services',
                desc: 'Flexi-bag loading, product analysis, and UAB-Online digital platform integration.',
                image: labTechImg,
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light rounded-sm overflow-hidden group border-t-4 border-gold hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,160,23,0.25)] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-white text-xl mb-2">{service.title}</h3>
                  <p className="text-steel font-body text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold font-body px-8 py-3 rounded-sm hover:bg-gold hover:text-white transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* CTA section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        <img
          src="/Change.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay — lighter at top, slightly deeper at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,31,58,0.30) 0%, rgba(11,31,58,0.55) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm p-10 md:p-16 text-center"
          >
            <h2
              className="font-heading text-4xl md:text-5xl mb-4"
              style={{
                color: '#FFFFFF',
                fontWeight: 800,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              READY TO PARTNER WITH SEABROOK?
            </h2>
            <p
              className="font-body text-base md:text-lg max-w-2xl mx-auto mb-10 text-white"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              Whether you need storage, marine loading, or pipeline connectivity, our team is ready to discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body rounded-sm hover:bg-gold-light transition-colors"
              style={{ padding: '16px 40px' }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        {/* Gold pipeline divider at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>
    </div>
  );
};

export default Home;
