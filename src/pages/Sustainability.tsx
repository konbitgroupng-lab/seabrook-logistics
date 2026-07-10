import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, Droplets, Sun, Recycle, ShieldCheck } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import evdVideo from '../assets/evd.mp4';
import readyImg from '../assets/ready.webp';
import stanImg from '../assets/stan.jpg';

const initiatives = [
  {
    icon: Leaf,
    title: 'Emissions Reduction',
    text: 'Our vapor recovery and treatment systems capture and process volatile organic compounds, significantly reducing atmospheric emissions during storage and loading operations.',
  },
  {
    icon: Wind,
    title: 'Air Quality Management',
    text: 'Continuous air quality monitoring and nitrogen blanketing systems ensure minimal product loss and protect both the environment and surrounding communities.',
  },
  {
    icon: Droplets,
    title: 'Water Protection',
    text: 'Comprehensive spill prevention and response protocols, combined with state-of-the-art containment systems, protect Galveston Bay and the Houston Ship Channel.',
  },
  {
    icon: Sun,
    title: 'Energy Efficiency',
    text: 'LED lighting, energy-efficient pumps, and optimized heating systems reduce our carbon footprint while maintaining operational reliability.',
  },
  {
    icon: Recycle,
    title: 'Waste Minimization',
    text: 'Recycling programs and waste stream segregation ensure responsible disposal of all materials, with a goal of zero landfill waste.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    text: 'We exceed EPA, TCEQ, and Coast Guard requirements, maintaining full compliance with all environmental regulations and industry best practices.',
  },
];

const Sustainability: React.FC = () => {
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
          <source src={evdVideo} type="video/mp4" />
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
            SUSTAINABILITY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            Protecting the environment while powering the energy transition.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Commitment */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={stanImg}
                alt="Sustainability"
                className="w-full h-80 md:h-96 object-cover rounded-sm shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-navy text-3xl md:text-4xl mb-6">
                OUR ENVIRONMENTAL COMMITMENT
              </h2>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                At Seabrook Logistics, sustainability is not just a goal — it is embedded in every aspect 
                of our operations. From the design of our storage tanks to the protocols governing our marine 
                operations, we prioritize environmental stewardship at every decision point.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                Our facility incorporates best-in-class vapor recovery systems, nitrogen blanketing technology, 
                and comprehensive spill prevention measures that exceed regulatory requirements. We are committed 
                to minimizing our environmental footprint while maintaining the reliability our customers depend on.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed">
                As the energy industry evolves, we are actively exploring opportunities to support the transition 
                to cleaner fuels, including storage and handling solutions for renewable feedstocks and carbon 
                capture byproducts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Initiatives grid */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">OUR INITIATIVES</h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto">
              Concrete actions we are taking to reduce our environmental impact and support the energy transition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light rounded-sm p-8 group hover:bg-navy-light/80 transition-colors"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-gold text-xl mb-3">{item.title}</h3>
                <p className="text-steel font-body text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Report / CTA */}
      <section className="relative overflow-hidden py-20">
        {/* Background image — z-index 0 */}
        <img
          src={readyImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Dark navy overlay — z-index 1 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(11,31,58,0.80)',
            zIndex: 1,
          }}
        />

        {/* Content — z-index 2 */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-white text-3xl md:text-4xl mb-4">
              TRANSPARENCY IN REPORTING
            </h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto mb-8">
              We publish annual sustainability reports detailing our environmental performance,
              safety metrics, and progress toward our long-term goals. Contact us to request
              the latest report.
            </p>
            <a
              href="mailto:sustainability@seabrooklogistics.com"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body px-8 py-4 rounded-sm hover:bg-gold-dark transition-colors"
            >
              Request Sustainability Report
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
