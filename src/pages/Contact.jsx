import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [done, setDone] = useState(false);

  if (done) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', textAlign: 'center', padding: 24 }}>
      <div>
        <div style={{ fontSize: 56, fontWeight: 900, color: '#EB332B', marginBottom: 16, lineHeight: 1 }}>✓</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Inquiry Received</h2>
        <p style={{ color: '#666', fontSize: 14 }}>We will respond within 12 hours. You will receive a confirmation email shortly.</p>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 56 }}>
      <div style={{ background: '#000', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>12-Hour Response Guaranteed</p>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>START YOUR RUN</h1>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="ct-grid">
        {/* Contact Info */}
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 24, textTransform: 'uppercase' }}>
            Get In <span style={{ color: '#EB332B' }}>Touch</span>
          </h2>
          <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, marginBottom: 36 }}>
            Send your requirements and we will respond with a feasibility assessment, pricing estimate, and production timeline.
          </p>
          {[
            { i: MapPin, l: 'FACTORY', v: 'Dongguan, Guangdong, China' },
            { i: Mail, l: 'EMAIL', v: 'info@senhongstudio.com' },
            { i: Phone, l: 'PHONE', v: '+86 137 9072 8936' },
            { i: MessageCircle, l: 'WHATSAPP', v: '+86 137 9072 8936' },
          ].map(c => (
            <div key={c.l} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, background: '#EB332B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <c.i size={14} color="#fff" />
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: '#999', marginBottom: 4 }}>{c.l}</p>
                <p style={{ fontSize: 13, color: '#333' }}>{c.v}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: '#FAFAF8', padding: 32, border: '1px solid #E5E5E5' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 20, textTransform: 'uppercase' }}>Send Inquiry</p>
          <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input required type="text" placeholder="Company Name *" style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input required type="text" placeholder="Contact Name *" style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
              <input required type="email" placeholder="Email *" style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <select style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                {['T-Shirts', 'Hoodies', 'Pants', 'Shorts', 'Jackets', 'Full Collection'].map(o => <option key={o}>{o}</option>)}
              </select>
              <select style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                {['50-100 pcs', '100-500 pcs', '500-2000 pcs', '2000+ pcs'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <textarea required rows={5} placeholder="Describe your project, fabric preferences, reference images..." style={{ padding: '12px 14px', fontSize: 13, border: '1px solid #E5E5E5', background: '#fff', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
            <button type="submit" className="btn-red" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', cursor: 'pointer' }}>
              <Send size={14} /> SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
      <style>{`@media(max-width:768px){.ct-grid{grid-template-columns:1fr !important}}`}</style>
    </div>
  );
}
