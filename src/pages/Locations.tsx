import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MapPin, Phone, Mail } from 'lucide-react';
import PipelineDivider from '../components/PipelineDivider';

const goldPin = new Icon({
  iconUrl:
    'data:image/svg+xml;base64,' +
    btoa(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D4A017" stroke="#0B1F3A" stroke-width="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
    ),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const whitePin = new Icon({
  iconUrl:
    'data:image/svg+xml;base64,' +
    btoa(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#0B1F3A" stroke-width="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
    ),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const locations = [
  {
    name: 'Seabrook Terminal',
    address: 'Bayport Industrial Complex, 11666 Port Road, Seabrook TX 77586',
    phone: '+1 (281) 474-7000',
    email: 'terminal@seabrooklogistics.com',
    position: [29.605, -95.02] as [number, number],
    pin: goldPin,
  },
  {
    name: 'Houston Office',
    address: '2625 Bay Area Blvd Suite 200, Houston TX 77058',
    phone: '+1 (713) 555-0100',
    email: 'houston@seabrooklogistics.com',
    position: [29.58, -95.1] as [number, number],
    pin: whitePin,
  },
  {
    name: 'Rotterdam Office',
    address: 'Oude Maasweg 2, 3197 KJ Rotterdam, Netherlands',
    phone: '+31 10 555 0123',
    email: 'rotterdam@seabrooklogistics.com',
    position: [51.92, 4.15] as [number, number],
    pin: whitePin,
  },
];

const Locations: React.FC = () => {
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
          <source src="/OurServices.mp4" type="video/mp4" />
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
            OUR LOCATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-steel font-body text-base md:text-lg max-w-3xl mx-auto"
          >
            Strategically positioned facilities connecting the Gulf Coast to global energy markets.
          </motion.p>
        </div>
      </section>

      <PipelineDivider />

      {/* Map */}
      <section className="bg-offwhite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm overflow-hidden shadow-lg"
          >
            <MapContainer
              center={[29.6, -95.05]}
              zoom={10}
              scrollWheelZoom={false}
              style={{ height: '500px', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              {locations.map((loc) => (
                <Marker key={loc.name} position={loc.position} icon={loc.pin}>
                  <Popup>
                    <div className="font-body">
                      <h3 className="font-semibold text-navy">{loc.name}</h3>
                      <p className="text-sm text-navy/70">{loc.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
        </div>
      </section>

      <PipelineDivider />

      {/* Location cards */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light rounded-sm p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-gold" size={24} />
                  <h3 className="font-heading text-gold text-xl">{loc.name}</h3>
                </div>
                <p className="text-steel font-body text-sm leading-relaxed mb-4">{loc.address}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-steel text-sm font-body">
                    <Phone size={16} className="text-gold" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-steel text-sm font-body">
                    <Mail size={16} className="text-gold" />
                    <span>{loc.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
