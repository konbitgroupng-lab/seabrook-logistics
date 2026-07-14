import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Anchor, ArrowLeftRight, FlaskConical, CheckCircle, ArrowRight } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import servicesBg from '../assets/services-bg.mp4';
import seabrookTanker from '../assets/seabrook-tanker.jpg';
import storageTanks from '../assets/seabrook-storage-tanks.jpg';
import pipelineImg from '../assets/seabrook-pipeline.jpg';
import labTechImg from '../assets/seabrook-lab-tech.jpg';

const expansionStats = [
  { value: '7.1M+', label: 'BARRELS STORAGE CAPACITY' },
  { value: '10', label: 'DEEPWATER DOCKS' },
  { value: '55 ft', label: 'DRAFT DEPTH' },
  { value: '48"', label: 'BIDIRECTIONAL PIPELINE' },
  { value: '150K', label: 'BARRELS/DAY LOAD RATE' },
];

const capabilities = [
  { value: '3.1M+', label: 'Barrels Storage Capacity' },
  { value: '2', label: 'Deepwater Docks' },
  { value: '45 ft', label: 'Draft Depth' },
  { value: '24"', label: 'Bidirectional Pipeline' },
  { value: '40K', label: 'Barrels/Day Load Rate' },
  { value: '24/7', label: 'Marine Operations' },
];

const services = [
  {
    id: 'storage',
    title: 'Crude Oil, Condensate & Refined Fuel Storage',
    icon: Droplets,
    image: storageTanks,
    description:
      'Our state-of-the-art storage facility is designed to handle crude oil, condensate, and refined petroleum products — including diesel, gasoline, and jet fuel — with the highest standards of safety and efficiency. As a full-service midstream storage and logistics terminal, we receive, store, and move both raw feedstock and finished, ready-to-use fuel products toward refineries, distributors, and export markets. Advanced nitrogen blanketing systems protect product quality, while vapor treatment technologies minimize emissions and environmental impact.',
    features: [
      '3.1 million+ barrels total storage capacity',
      'Nitrogen blanketing for product preservation',
      'Vapor treatment and recovery systems',
      'Blending and filtering capabilities',
      'Multiple tank configurations for product segregation',
      'Automated tank gauging and inventory management',
      'Refined fuel storage: diesel, gasoline, and jet fuel',
      'Dedicated finished-product tanks separate from crude/condensate storage',
      'Full midstream capability: from raw feedstock to ready-to-use fuel product handling',
    ],
    specs: [
      { label: 'Capacity', value: '3.1M+ bbl' },
      { label: 'Products', value: 'Crude, Condensate & Refined' },
      { label: 'Blending', value: 'Yes' },
    ],
  },
  {
    id: 'marine',
    title: 'Marine Dock Operations',
    icon: Anchor,
    image: seabrookTanker,
    description:
      'Our marine terminal is equipped to handle the largest class of vessels serving the Gulf Coast. With two deepwater docks and a 45-foot draft, we can accommodate Aframax and Suezmax tankers, providing seamless loading and unloading operations around the clock.',
    features: [
      '2 deepwater docks (Aframax and Suezmax capable)',
      '45-foot draft depth for large vessel access',
      '40,000 barrels per day loading rate',
      'Double-hull vessel compatibility',
      '24/7 marine operations with experienced crews',
      'Integrated vapor recovery during loading/unloading',
    ],
    specs: [
      { label: 'Docks', value: '2 Deepwater' },
      { label: 'Draft', value: '45 ft' },
      { label: 'Load Rate', value: '40,000 bpd' },
    ],
  },
  {
    id: 'pipeline',
    title: 'Pipeline Connectivity',
    icon: ArrowLeftRight,
    image: pipelineImg,
    description:
      "Our 24-inch bidirectional pipeline provides direct, high-capacity connectivity to Magellan Midstream Partners' Houston pipeline system. This strategic link enables efficient movement of crude oil, condensate, and refined petroleum products between our terminal and the broader Gulf Coast refining and distribution network.",
    features: [
      '24-inch bidirectional pipeline',
      'Direct connection to Magellan Houston system',
      'High-capacity throughput for crude, condensate, and refined products',
      'Redundant pump stations for reliability',
      'Real-time flow monitoring and control',
      'Interchange capability with multiple pipeline networks',
    ],
    specs: [
      { label: 'Diameter', value: '24 inches' },
      { label: 'Direction', value: 'Bidirectional' },
      { label: 'Network', value: 'Magellan Houston' },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    icon: FlaskConical,
    image: labTechImg,
    imgPosition: 'center top',
    description:
      'Beyond standard storage and throughput, we offer a range of specialized services tailored to unique customer requirements. From flexi-bag loading for niche transport needs to UAB-Online digital platform integration, our team delivers flexible, technology-driven solutions.',
    features: [
      'Flexi-bag loading for specialized transport',
      'In-house product analysis and quality testing',
      'UAB-Online digital platform integration',
      'Custom blending and additive injection',
      'Heated storage for waxy crude oils',
      'Comprehensive documentation and customs support',
    ],
    specs: [
      { label: 'Platform', value: 'UAB-Online' },
      { label: 'Testing', value: 'In-house lab' },
      { label: 'Heated Storage', value: 'Yes' },
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div>
      {/* Page hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
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
          <source src={servicesBg} type="video/mp4" />
        </video>
        {/* Dark navy overlay — z-index 1, above video */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(11,31,58,0.78)',
            zIndex: 1,
          }}
        />
        {/* Content — z-index 2, above overlay */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center" style={{ zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-mono text-sm tracking-widest uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            OUR SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            Integrated storage, marine, and pipeline solutions designed for the demands of modern energy markets.
          </motion.p>

          {/* Anchor links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 border border-gold/40 text-steel text-xs font-body font-medium px-4 py-2 rounded-sm hover:border-gold hover:text-gold transition-colors"
              >
                <s.icon size={14} className="text-gold" />
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <PipelineDivider />

      {/* Capabilities strip */}
      <section className="bg-navy-light py-8 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="text-center"
              >
                <p className="font-mono text-gold text-2xl font-semibold leading-none mb-1">{cap.value}</p>
                <p className="text-steel font-body text-xs uppercase tracking-wider">{cap.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Planned Capacity Expansion callout */}
      <section
        style={{
          background: 'linear-gradient(135deg, #091829 0%, #0D2448 100%)',
          borderTop: '2px dashed rgba(212,160,23,0.35)',
          borderBottom: '2px dashed rgba(212,160,23,0.35)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                style={{
                  background: 'rgba(212,160,23,0.15)',
                  border: '1px solid #D4A017',
                  color: '#D4A017',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '3px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
                className="font-mono"
              >
                Under Construction
              </span>
              <h3 className="font-heading text-white text-xl md:text-2xl tracking-wider">
                PLANNED CAPACITY EXPANSION
              </h3>
            </div>
            <p className="text-steel font-body text-sm sm:text-right max-w-xs leading-relaxed">
              Expanding to meet growing Gulf Coast demand — completion targeted for{' '}
              <span className="text-gold font-semibold">15 December 2026</span>.
            </p>
          </div>

          {/* Expansion stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {expansionStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.09 }}
                style={{
                  position: 'relative',
                  border: '1px dashed rgba(212,160,23,0.4)',
                  borderRadius: '6px',
                  padding: '24px 14px 18px',
                  textAlign: 'center',
                }}
              >
                {/* PLANNED badge pinned to top of each card */}
                <span
                  style={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#D4A017',
                    color: '#0B1F3A',
                    fontSize: '9px',
                    fontWeight: 800,
                    padding: '2px 9px',
                    borderRadius: '3px',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                  className="font-mono"
                >
                  Upon Completion
                </span>

                <div className="text-gold font-mono text-3xl font-semibold mb-1 leading-none">
                  {stat.value}
                </div>
                <div
                  className="text-steel font-body uppercase tracking-widest"
                  style={{ fontSize: '10px', lineHeight: 1.5 }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Service blocks */}
      <div className="bg-offwhite">
        {services.map((service, idx) => (
          <div key={service.id} id={service.id}>
            <section className={`py-20 ${idx % 2 === 1 ? 'bg-white' : 'bg-offwhite'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={idx % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '480px',
                          objectFit: 'cover',
                          objectPosition: service.imgPosition ?? 'center',
                          borderRadius: '8px',
                          boxShadow: '0 8px 32px rgba(11,31,58,0.20)',
                        }}
                      />
                      {/* Spec badge overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur-sm rounded-sm p-4 flex justify-between">
                        {service.specs.map((spec) => (
                          <div key={spec.label} className="text-center">
                            <p className="font-mono text-gold text-sm font-semibold">{spec.value}</p>
                            <p className="text-steel font-body text-xs">{spec.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={idx % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <service.icon className="text-gold" size={20} />
                      </div>
                      <span className="text-gold font-mono text-xs tracking-widest uppercase">
                        Service {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="font-heading text-navy text-3xl md:text-4xl lg:text-5xl mb-4">
                      {service.title.toUpperCase()}
                    </h2>

                    <p className="text-navy/75 font-body text-base leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="text-gold mt-0.5 shrink-0" size={17} />
                          <span className="text-navy/80 font-body text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body text-sm px-6 py-3 rounded-sm hover:bg-gold-dark transition-colors"
                    >
                      Enquire About This Service
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>

            {idx < services.length - 1 && <PipelineDivider />}
          </div>
        ))}
      </div>

      <PipelineDivider />

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">
              READY TO DISCUSS YOUR REQUIREMENTS?
            </h2>
            <p className="text-steel font-body text-base md:text-lg mb-10">
              Whether you need storage capacity, marine access, pipeline connectivity, or a combination of all three — our commercial team is ready to build a solution around your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body px-8 py-4 rounded-sm hover:bg-gold-dark transition-colors"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold font-body px-8 py-4 rounded-sm hover:border-white transition-colors"
              >
                View Locations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
