import { Link } from 'react-router-dom';

const timeline = [
  { year: '2009', event: 'Founded in Dongguan with 1 cutting room, 12 workers, and a single production line.' },
  { year: '2012', event: 'Expanded to 5 production lines. First international export to the UK and Australia.' },
  { year: '2015', event: 'Achieved ISO 9001 and BSCI certification. Established in-house design team of 8.' },
  { year: '2018', event: 'Factory floor reached 15,000 m². Added on-site wash and embroidery departments.' },
  { year: '2021', event: 'Launched ODM division. 20+ designers. 1,500+ new styles annually.' },
  { year: '2024', event: 'Expanded to 25,000 m². 250+ workers. Serving 500+ brands across 100+ countries.' },
];

const markets = ['United States', 'United Kingdom', 'Germany', 'Australia', 'Japan', 'South Korea', 'Middle East', 'France', 'Canada', 'Italy'];

const values = [
  { t: 'No Middlemen', d: 'We are the factory. Every dollar goes directly into manufacturing quality — not agent markups.' },
  { t: 'Full Transparency', d: 'Real-time production photos, pre-shipment inspection reports, and open factory visits.' },
  { t: 'Scale With You', d: 'MOQ 50 pcs for test runs. No artificial caps on volume growth.' },
  { t: 'Street-First Craft', d: 'We understand streetwear. GSM, washes, graphics, fit — we speak the language.' },
];

export default function About() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 56 }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ background: '#000', padding: '56px 24px 48px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>Founded 2009 · Dongguan, China</p>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>ABOUT SENHONG STUDIO</h1>
        <p style={{ color: '#888', fontSize: 14, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
          16 years building garments for the world's streetwear brands. Factory-owned, no middlemen, no shortcuts.
        </p>
      </div>

      {/* ── BRAND STORY + MODEL IMAGE ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="ab-grid">
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>WHO WE ARE</p>
            <h2 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              Factory-Owned.<br />Street-Trained.
            </h2>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.85, marginBottom: 16 }}>
              SENHONG STUDIO started as a single cutting room in 2009. We've grown into one of China's most capable OEM/ODM streetwear manufacturers — not by cutting corners, but by doing the opposite.
            </p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.85, marginBottom: 16 }}>
              We manufacture for emerging independent labels and established brands in 100+ countries. Our clients range from 50-piece DTC test runs to 50,000-piece seasonal bulk orders.
            </p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.85, marginBottom: 28 }}>
              What makes us different: we are the factory. No broker, no trading company, no middleman. You talk directly to the people cutting and sewing your garments.
            </p>
            <Link to="/contact" className="btn-red">GET A QUOTE</Link>
          </div>
          <div>
            <img src="/assets/images/ai-model-1.png" alt="SENHONG STUDIO — OEM Streetwear Manufacturing"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
        <style>{`@media(max-width:768px){.ab-grid{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── KEY NUMBERS ── */}
      <div style={{ background: '#000', marginTop: 64, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, textAlign: 'center' }} className="ab-nums">
          {[
            { n: '500+', l: 'Brand Partners' },
            { n: '50M+', l: 'Garments Shipped' },
            { n: '100+', l: 'Export Countries' },
            { n: '16 Yrs', l: 'In Business' },
          ].map((s, i) => (
            <div key={s.l} style={{ padding: '24px 16px', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#EB332B', marginBottom: 8, lineHeight: 1 }}>{s.n}</div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>{s.l}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.ab-nums{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>

      {/* ── OUR VALUES ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 0' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, textAlign: 'center' }}>How We Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ab-vals">
          {values.map(v => (
            <div key={v.t} style={{ padding: '28px', border: '1px solid #E5E5E5' }}>
              <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, color: '#EB332B' }}>{v.t}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{v.d}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.ab-vals{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── TIMELINE ── */}
      <div style={{ background: '#FAFAF8', borderTop: '1px solid #E5E5E5', marginTop: 64, padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, textAlign: 'center' }}>Our Journey</h2>
          {timeline.map((item, i) => (
            <div key={item.year} style={{ display: 'flex', gap: 24, paddingTop: i > 0 ? 24 : 0, paddingBottom: 24, borderBottom: i < timeline.length - 1 ? '1px solid #E5E5E5' : 'none' }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#EB332B', flexShrink: 0, width: 52, paddingTop: 2 }}>{item.year}</div>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPORT MARKETS ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginBottom: 16, textAlign: 'center' }}>Where Our Products End Up</p>
        <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 28, textAlign: 'center' }}>Global Export Markets</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }} className="ab-mkts">
          {markets.map(m => (
            <div key={m} style={{ padding: '16px 12px', textAlign: 'center', border: '1px solid #E5E5E5', fontSize: 13, fontWeight: 600 }}>{m}</div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.ab-mkts{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>
    </div>
  );
}
