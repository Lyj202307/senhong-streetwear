import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const steps = [
  { n: '01', t: 'DESIGN & TECH PACK', d: 'Share your concept, sketches, or reference. No tech pack? Our in-house team builds one. 3D digital sampling available.' },
  { n: '02', t: 'FABRIC SOURCING', d: '200+ premium fabrics in stock. OEKO-TEX, GOTS, and recycled options. Custom fabric development supported.' },
  { n: '03', t: 'SAMPLING', d: '3–5 day turnaround. Photo approval before dispatch. Free revision rounds until you approve.' },
  { n: '04', t: 'BULK PRODUCTION', d: '300,000+ pcs/month capacity. Real-time ERP tracking. Parallel production lines for speed.' },
  { n: '05', t: 'QUALITY CONTROL', d: '8-stage inspection: fabric, cutting, sewing, wash, print, trim, finish, final pack. AQL 2.5 standard.' },
  { n: '06', t: 'GLOBAL DELIVERY', d: 'FOB / CIF / DDP terms. 98.5% on-time delivery. Consolidated shipping and door-to-door options.' },
];

const services = [
  {
    t: 'OEM MANUFACTURING',
    sub: 'Your design, our production',
    items: [
      'Tech pack to bulk execution',
      'Precision cutting & sewing',
      'Custom labels, hangtags & packaging',
      '50–50,000 pcs per run',
      '8-stage QC per batch',
      'Real-time production tracking',
    ],
  },
  {
    t: 'ODM DESIGN',
    sub: 'From trend to finished style',
    items: [
      '20+ in-house designers',
      '1,500+ new styles per year',
      '3D digital sampling',
      'Seasonal trend forecasting',
      'Exclusive design ownership',
      'Lookbook production support',
    ],
  },
  {
    t: 'FABRIC & MATERIALS',
    sub: 'What it is made of matters',
    items: [
      '200+ in-stock fabric options',
      'GSM range: 160–500+',
      'OEKO-TEX Standard 100 certified',
      'Sustainable & recycled fabrics',
      'Custom color development',
      'Deadstock fabric sourcing',
    ],
  },
];

const capabilities = [
  { label: 'Fabric types', value: '200+' },
  { label: 'Styles per year', value: '1,500+' },
  { label: 'Monthly output', value: '300K+ pcs' },
  { label: 'QC stages', value: '8' },
  { label: 'Min. order', value: '50 pcs' },
  { label: 'Sample lead time', value: '3–5 days' },
];

export default function Services() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 56 }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ background: '#000', padding: '56px 24px 48px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>Design — Production — Delivery</p>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>ONE-STOP SERVICE</h1>
        <p style={{ color: '#888', fontSize: 14, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          From a sketch on a napkin to bulk delivery at your warehouse — we handle every step of the garment manufacturing process.
        </p>
      </div>

      {/* ── CAPABILITY STATS ── */}
      <div style={{ background: '#FAFAF8', borderBottom: '1px solid #E5E5E5', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, textAlign: 'center' }} className="cap-grid">
          {capabilities.map((c, i) => (
            <div key={c.label} style={{ padding: '16px 12px', borderRight: i < 5 ? '1px solid #E5E5E5' : 'none' }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#EB332B', marginBottom: 4 }}>{c.value}</div>
              <p style={{ fontSize: 11, color: '#888', fontWeight: 600, letterSpacing: '0.06em' }}>{c.label}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.cap-grid{grid-template-columns:1fr 1fr 1fr !important}}@media(max-width:480px){.cap-grid{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 0' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, textAlign: 'center' }}>What We Do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="svc-grid">
          {services.map((s, si) => (
            <div key={s.t} style={{ border: '1px solid #E5E5E5', padding: '28px 28px 32px' }}>
              <p style={{ fontSize: 10, color: '#EB332B', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>0{si + 1}</p>
              <h3 style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.08em', marginBottom: 6 }}>{s.t}</h3>
              <p style={{ fontSize: 12, color: '#888', marginBottom: 20 }}>{s.sub}</p>
              {s.items.map(item => (
                <p key={item} style={{ fontSize: 13, color: '#555', marginBottom: 9, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#EB332B', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span> {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.svc-grid{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── PROCESS TIMELINE ── */}
      <div style={{ background: '#000', marginTop: 64, padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 48 }}>
            From Sketch to Sold-Out — 6 Steps
          </h2>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', gap: 28, paddingBottom: 32, marginBottom: i < steps.length - 1 ? 0 : 0, borderBottom: i < steps.length - 1 ? '1px solid #1a1a1a' : 'none', paddingTop: i > 0 ? 32 : 0 }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#EB332B', flexShrink: 0, width: 52, lineHeight: 1 }}>{s.n}</div>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', marginBottom: 8, color: '#fff' }}>{s.t}</h3>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INCLUDED IN EVERY ORDER ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, textAlign: 'center' }}>Standard With Every Order</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px 40px' }} className="inc-grid">
          {[
            'Pre-production sample approval',
            'Real-time production photos',
            'AQL 2.5 final inspection report',
            'Packing list & shipping documents',
            'Certificate of compliance (BSCI / ISO 9001)',
            'Dedicated account manager',
            'WhatsApp + email communication',
            'Post-delivery quality follow-up',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', borderBottom: '1px solid #F0F0F0' }}>
              <CheckCircle size={16} color="#EB332B" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#444', fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.inc-grid{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: '#EB332B', padding: '56px 24px', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 12, letterSpacing: '0.06em' }}>Ready To Start Your Run?</h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 28 }}>Send us your tech pack or concept. 12-hour response. No commitment.</p>
        <Link to="/contact" style={{ display: 'inline-block', background: '#fff', color: '#EB332B', fontWeight: 900, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 40px' }}>GET FREE QUOTE</Link>
      </div>
    </div>
  );
}
