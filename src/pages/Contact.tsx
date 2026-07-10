import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';
import mastaVideo from '../assets/masta.mp4';

const offices = [
  {
    name: 'Seabrook Terminal',
    address: 'Bayport Industrial Complex, 11666 Port Road, Seabrook TX 77586',
    phone: '+1 (281) 474-7000',
    email: 'terminal@seabrooklogistics.com',
  },
  {
    name: 'Houston Office',
    address: '2625 Bay Area Blvd Suite 200, Houston TX 77058',
    phone: '+1 (713) 555-0100',
    email: 'houston@seabrooklogistics.com',
  },
  {
    name: 'Rotterdam Office',
    address: 'Oude Maasweg 2, 3197 KJ Rotterdam, Netherlands',
    phone: '+31 10 555 0123',
    email: 'rotterdam@seabrooklogistics.com',
  },
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* Fraud warning banner */}
      <div className="bg-gold w-full">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-navy shrink-0 mt-0.5" size={18} />
            <p className="text-navy font-body text-sm font-semibold">
              Fraud Alert: Seabrook Logistics does not engage in phone solicitation or unsolicited
              email marketing. Please verify the identity of anyone contacting you on our behalf
              before sharing sensitive information.
            </p>
          </div>
        </div>
      </div>

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
          <source src={mastaVideo} type="video/mp4" />
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
            CONTACT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            We look forward to hearing from you. Reach out to discuss storage, marine, or pipeline opportunities.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Two-column layout */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-navy text-3xl md:text-4xl mb-6">SEND US A MESSAGE</h2>
              <p className="text-navy/70 font-body text-base mb-8">
                Fill out the form below and a member of our team will respond within two business days.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-sm p-6 flex items-start gap-3"
                >
                  <CheckCircle className="text-green-600 shrink-0" size={24} />
                  <div>
                    <h3 className="font-heading text-green-800 text-lg">Message Sent</h3>
                    <p className="text-green-700 font-body text-sm">
                      Thank you for reaching out. We will be in touch shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-navy font-body text-sm font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-navy/20 bg-white text-navy font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-navy font-body text-sm font-medium mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-navy/20 bg-white text-navy font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-navy font-body text-sm font-medium mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-navy/20 bg-white text-navy font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-navy font-body text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-navy/20 bg-white text-navy font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-navy font-body text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-navy/20 bg-white text-navy font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gold text-white font-semibold font-body px-8 py-4 rounded-sm hover:bg-gold-dark transition-colors"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office addresses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-navy text-3xl md:text-4xl mb-6">OUR OFFICES</h2>
              <p className="text-navy/70 font-body text-base mb-8">
                Visit or contact the location most relevant to your inquiry.
              </p>

              <div className="space-y-6">
                {offices.map((office) => (
                  <div
                    key={office.name}
                    className="bg-white rounded-sm p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="text-gold" size={20} />
                      <h3 className="font-heading text-navy text-lg">{office.name}</h3>
                    </div>
                    <p className="text-navy/80 font-body text-sm leading-relaxed mb-3">
                      {office.address}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-steel text-sm font-body">
                        <Phone size={14} className="text-gold" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-steel text-sm font-body">
                        <Mail size={14} className="text-gold" />
                        <a href={`mailto:${office.email}`} className="hover:text-gold transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
