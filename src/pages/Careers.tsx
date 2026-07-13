import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, Users, Award, HeartPulse } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import careersHero from '../assets/hero-1.mp4';

const openings = [
  {
    title: 'Terminal Operator',
    location: 'Seabrook, TX',
    type: 'Full-time',
    department: 'Operations',
  },
  {
    title: 'Marine Coordinator',
    location: 'Seabrook, TX',
    type: 'Full-time',
    department: 'Marine',
  },
  {
    title: 'HSE Specialist',
    location: 'Seabrook, TX',
    type: 'Full-time',
    department: 'Safety',
  },
  {
    title: 'Maintenance Technician',
    location: 'Seabrook, TX',
    type: 'Full-time',
    department: 'Maintenance',
  },
  {
    title: 'Commercial Analyst',
    location: 'Houston, TX',
    type: 'Full-time',
    department: 'Commercial',
  },
  {
    title: 'Control Room Operator',
    location: 'Seabrook, TX',
    type: 'Shift',
    department: 'Operations',
  },
];

const benefits = [
  {
    icon: HeartPulse,
    title: 'Health & Wellness',
    text: 'Comprehensive medical, dental, and vision coverage for you and your family.',
  },
  {
    icon: Award,
    title: 'Professional Development',
    text: 'Tuition reimbursement, certifications, and continuous training opportunities.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    text: 'A diverse workplace where every voice is heard and respected.',
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    text: 'Competitive PTO, flexible scheduling where possible, and family-friendly policies.',
  },
];

const Careers: React.FC = () => {
  return (
    <div>
      {/* Page hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        {/* Background video */}
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
          <source src={careersHero} type="video/mp4" />
        </video>

        {/* Dark navy overlay */}
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

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            CAREERS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            Join a team where safety, innovation, and integrity drive everything we do.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Culture */}
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team culture"
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
                WORK WITH PURPOSE
              </h2>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                At Seabrook Logistics, you are not just operating a terminal — you are helping power 
                the energy systems that keep the world moving. Our team is made up of skilled professionals 
                who take pride in their work and hold themselves to the highest standards of safety and integrity.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-4">
                We invest in our people through ongoing training, competitive compensation, and a culture 
                that values collaboration, innovation, and accountability. Whether you are on the docks, 
                in the control room, or in the office, your contribution matters.
              </p>
              <p className="text-navy/80 font-body text-base leading-relaxed mb-6">
                As a joint venture between LBC Tank Terminals and Magellan Midstream Partners, we offer 
                the resources of two industry leaders combined with the agility and entrepreneurial spirit 
                of a focused operation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-gold font-semibold font-body hover:text-gold-dark transition-colors"
              >
                Contact HR
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Benefits */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-4">WHY JOIN US</h2>
            <p className="text-steel font-body text-base md:text-lg max-w-2xl mx-auto">
              Benefits and opportunities that go beyond the paycheck.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light rounded-sm p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <b.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-gold text-xl mb-3">{b.title}</h3>
                <p className="text-steel font-body text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PipelineDivider />

      {/* Openings */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-navy text-4xl md:text-5xl mb-4">OPEN POSITIONS</h2>
            <p className="text-navy/70 font-body text-base md:text-lg max-w-2xl mx-auto">
              Explore current opportunities and apply to join our team.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-sm p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Briefcase className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading text-navy text-lg">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-steel text-xs font-body">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-steel text-xs font-body">
                        <Clock size={12} />
                        {job.type}
                      </span>
                      <span className="bg-navy/5 text-navy/70 text-xs font-body px-2 py-0.5 rounded">
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:careers@seabrooklogistics.com?subject=Application: "
                  className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body text-sm px-6 py-2 rounded-sm hover:bg-gold-dark transition-colors shrink-0"
                >
                  Apply Now
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy/60 font-body text-sm">
              Don't see a role that fits? Send your resume to{' '}
              <a href="mailto:careers@seabrooklogistics.com" className="text-gold hover:underline">
                careers@seabrooklogistics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
