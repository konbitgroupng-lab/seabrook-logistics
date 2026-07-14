import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Award, FileCheck, ShieldCheck, ExternalLink, Download } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import seabrookTanks from '../assets/seabrook-tanks.png';
import aboutHero from '../assets/about-hero.mp4';

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To provide safe, reliable, and efficient crude oil, condensate, and refined fuel storage and distribution services that power the energy transition while protecting people and the environment.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To be the Gulf Coast\'s premier deepwater storage and logistics partner, recognized for operational excellence, innovation, and unwavering commitment to safety.',
  },
  {
    icon: Users,
    title: 'Partnership',
    text: 'A 50/50 joint venture combining LBC Tank Terminals\' global terminal expertise with Magellan Midstream Partners\' extensive pipeline and logistics network.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'Every operation is guided by rigorous safety protocols, environmental stewardship, and a culture of continuous improvement.',
  },
];

const About: React.FC = () => {
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
          <source src={aboutHero} type="video/mp4" />
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
            ABOUT SEABROOK LOGISTICS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            A joint venture built on deep expertise, strategic location, and a shared commitment to the future of energy logistics.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Story section */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ borderLeft: '4px solid #D4A017' }}
            >
              <img
                src={seabrookTanks}
                alt="Seabrook Logistics terminal — three large white storage tanks branded with the Seabrook Logistics LLC logo"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(11,31,58,0.25)',
                  display: 'block',
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-navy text-3xl md:text-4xl mb-6">
                BUILT FOR SCALE, DESIGNED FOR THE FUTURE
              </h2>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                Seabrook Logistics, LLC was established as a 50/50 joint venture between LBC Tank Terminals
                and Magellan Midstream Partners to meet the growing demand for deepwater crude oil,
                condensate, and refined fuel storage on the Gulf Coast.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                Located in the Bayport Industrial Complex on Galveston Bay, our terminal offers direct
                access to the Houston Ship Channel — one of the busiest waterways in the world. With
                3.1 million barrels of storage capacity, two deepwater docks capable of handling Aframax
                and Suezmax vessels, and a 24-inch bidirectional pipeline connected to Magellan's Houston
                system, we provide unmatched connectivity and flexibility for both raw feedstock and
                finished, ready-to-use fuel products like diesel, gasoline, and jet fuel.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-6">
                Our facility is engineered for the energy transition, incorporating nitrogen blanketing,
                vapor treatment, and advanced blending and filtering capabilities to meet evolving market
                and regulatory requirements — supporting Seabrook Logistics' role as a full-service
                midstream storage and logistics partner, from crude oil and condensate through to refined
                petroleum products.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold font-semibold font-body hover:text-gold-dark transition-colors"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Values */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">OUR VALUES</h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light rounded-sm p-8 text-center group hover:bg-navy-light/80 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-gold text-xl mb-3">{value.title}</h3>
                <p className="text-steel font-body text-sm leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Partners */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-navy text-4xl md:text-5xl mb-4">OUR PARTNERS</h2>
            <p className="text-navy/70 font-body text-base md:text-lg max-w-2xl mx-auto">
              Two industry leaders, one shared vision for the future of energy logistics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-sm p-8 shadow-sm"
            >
              <h3 className="font-heading text-navy text-2xl mb-4">LBC Tank Terminals</h3>
              <p className="text-navy/80 font-body text-sm leading-relaxed mb-4">
                A leading independent global operator of bulk liquid storage terminals, LBC brings decades 
                of expertise in terminal operations, safety management, and environmental stewardship. 
                With a presence across North America and Europe, LBC is committed to delivering reliable 
                storage solutions that meet the highest industry standards.
              </p>
              <a
                href="https://www.lbctankterminals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-semibold font-body text-sm hover:text-gold-dark transition-colors"
              >
                Visit LBC Tank Terminals
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-sm p-8 shadow-sm"
            >
              <h3 className="font-heading text-navy text-2xl mb-4">Magellan Midstream Partners</h3>
              <p className="text-navy/80 font-body text-sm leading-relaxed mb-4">
                One of the largest refined products pipeline and terminal operators in the United States, 
                Magellan owns and operates an extensive network of pipelines and terminals that connect 
                refineries to markets across the country. Their Houston system provides critical connectivity 
                for crude oil and refined products distribution.
              </p>
              <a
                href="https://www.magellanlp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-semibold font-body text-sm hover:text-gold-dark transition-colors"
              >
                Visit Magellan Midstream
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Certifications & Licenses */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-body text-sm tracking-widest uppercase mb-2">Compliance & Credentials</p>
            <h2 className="font-heading text-white text-3xl md:text-4xl mb-4">CERTIFICATIONS & LICENSES</h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto">
              Our terminal operates to the highest international standards, verified by independent third-party audits and industry bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CDI-T Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy-light border border-gold/30 rounded-sm p-6 flex flex-col gap-4 hover:border-gold/70 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
                  <ShieldCheck size={24} className="text-gold" />
                </div>
                <div>
                  <p className="text-gold font-body text-xs tracking-widest uppercase mb-1">CDI — Chemical Distribution Institute</p>
                  <h3 className="font-heading text-white text-xl leading-tight">CDI-T TERMINAL CERTIFICATE</h3>
                </div>
              </div>

              {/* Details */}
              <div className="border-t border-gold/20 pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-steel font-body text-xs uppercase tracking-wide">Reference</span>
                  <span className="text-white font-mono text-sm font-semibold">ER-2221</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-steel font-body text-xs uppercase tracking-wide">Issued</span>
                  <span className="text-white font-body text-sm">February 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-steel font-body text-xs uppercase tracking-wide">Valid Until</span>
                  <span className="text-gold font-body text-sm font-semibold">February 2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-steel font-body text-xs uppercase tracking-wide">Status</span>
                  <span className="flex items-center gap-1 text-green-400 font-body text-sm font-semibold">
                    <FileCheck size={14} /> Active
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href="/documents/CDI-T-Certificate-ER-2221.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-gold text-gold font-body text-sm font-semibold py-2 rounded-sm hover:bg-gold hover:text-white transition-colors"
                >
                  <ExternalLink size={14} /> View
                </a>
                <a
                  href="/documents/CDI-T-Certificate-ER-2221.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-gold/10 text-gold font-body text-sm font-semibold py-2 rounded-sm hover:bg-gold/20 transition-colors"
                >
                  <Download size={14} /> Download
                </a>
              </div>
            </motion.div>

            {/* Placeholder card — more certificates coming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-navy-light border border-white/10 border-dashed rounded-sm p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[260px]"
            >
              <FileCheck size={32} className="text-steel/40" />
              <p className="text-steel font-body text-sm">Additional certificates and licenses will appear here as they are uploaded.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
