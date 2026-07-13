import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Replace with the real WhatsApp number (country code + number, no spaces/dashes)
const PHONE = '17135551234';
const SESSION_KEY = 'wa_popup_closed';

const WhatsAppWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-expand once per session, 2 s after mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Focus input whenever popup opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, '1');
  };

  const send = () => {
    const text =
      message.trim() ||
      'Hello, I would like to learn more about Seabrook Logistics services.';
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setMessage('');
    close();
  };

  const handleFabClick = () => (open ? close() : setOpen(true));

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      {/* ── Chat popup ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-popup"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              width: 'min(320px, calc(100vw - 32px))',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
            }}
          >
            {/* Green header */}
            <div
              style={{
                background: '#25D366',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <WaIcon size={26} />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: 1.3,
                  }}
                >
                  Seabrook Logistics, LLC
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.88)',
                    fontSize: 12,
                    marginTop: 2,
                  }}
                >
                  We are available
                </div>
              </div>

              <button
                onClick={close}
                aria-label="Close chat"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 18,
                  lineHeight: 1,
                  padding: 4,
                  opacity: 0.9,
                }}
              >
                ✕
              </button>
            </div>

            {/* Chat body */}
            <div
              style={{
                background: '#E5DDD5',
                padding: '16px 14px 14px',
              }}
            >
              {/* Message bubble with left tail */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '0 10px 10px 10px',
                  padding: '10px 14px 8px',
                  display: 'inline-block',
                  maxWidth: '86%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
                  position: 'relative',
                }}
              >
                {/* Tail */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: -8,
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 8px 8px 0',
                    borderColor: 'transparent #fff transparent transparent',
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#303030',
                    lineHeight: 1.5,
                  }}
                >
                  How can we help you today?
                </p>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 11,
                    color: '#aaa',
                    textAlign: 'right',
                  }}
                >
                  {currentTime}
                </p>
              </div>
            </div>

            {/* Input row */}
            <div
              style={{
                background: '#F0F0F0',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  border: 'none',
                  borderRadius: 20,
                  padding: '9px 14px',
                  fontSize: 14,
                  outline: 'none',
                  background: '#fff',
                  color: '#303030',
                }}
              />
              <button
                onClick={send}
                aria-label="Send message"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: '#25D366',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating action button ── */}
      <motion.button
        onClick={handleFabClick}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.55)',
          flexShrink: 0,
        }}
      >
        <WaIcon size={32} />
      </motion.button>
    </div>
  );
};

// ── SVG icons ────────────────────────────────────────────────────────────────

const WaIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SendIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="white"
    aria-hidden="true"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export default WhatsAppWidget;
