import { Link } from 'react-router-dom';

const stats = [
  { n: '25,000 m²', l: 'Factory Floor' },
  { n: '250+', l: 'Skilled Workers' },
  { n: '8', l: 'Production Lines' },
  { n: '300K+', l: 'Pcs / Month' },
  { n: '16 Yrs', l: 'In Operation' },
  { n: '99%+', l: 'QC Pass Rate' },
];

const certs = [
  { t: 'ISO 9001:2015', d: 'International quality management standard. Every process documented and monitored.' },
  { t: 'BSCI Audited', d: 'Business Social Compliance Initiative. Fair wages, safe conditions, no child labour.' },
  { t: 'OEKO-TEX Std 100', d: 'Every fabric batch tested for 100+ harmful substances. Safe for skin contact.' },
  { t: 'AQL 2.5', d: 'Industry-standard inspection protocol applied to every bulk shipment before dispatch.' },
];

const lines = [
  { title: 'Cutting Room', desc: '12 automatic cutting machines. CAD-optimised patterns to minimise fabric waste. 8,000+ pcs cut per day.' },
  { title: 'Sewing Floor', desc: '180+ specialized sewing stations. Single-needle, overlock, flatlock, and bartack — all in-house.' },
  { title: 'Wash & Dye Lab', desc: 'On-site washing, enzyme treatment, acid wash, garment dyeing, and bleach-out processes.' },
  { title: 'Print & Embroidery', desc: 'DTG, screen print, heat transfer, embroidery, rhinestone application — done under one roof.' },
  { title: 'QC Department', desc: 'Dedicated 15-person QC team. AQL 2.5 inline checks at every station. Final 100% visual inspection.' },
  { title: 'Packing & Dispatch', desc: 'Barcode-scanned packing, individual poly-bag or hang-tag finishing. FOB / DDP ready.' },
];

export default function Factory() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 56 }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ background: '#000', padding: '56px 24px 48px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>Dongguan, Guangdong, China</p>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>OUR FACTORY</h1>
        <p style={{ color: '#888', fontSize: 14, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          A vertically integrated 25,000 m² facility — from fabric intake to finished garment. Open for visits by appointment.
        </p>
      </div>

      {/* ── STATS ROW ── */}
      <div style={{ background: '#EB332B', padding: '36px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, textAlign: 'center' }} className="fc-stats">
          {stats.map((s, i) => (
            <div key={s.l} style={{ padding: '8px 12px', borderRight: i < 5 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{s.n}</div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{s.l}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.fc-stats{grid-template-columns:1fr 1fr 1fr !important}}@media(max-width:480px){.fc-stats{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>

      {/* ── FACTORY HERO IMAGE ── */}
      <div style={{ height: 'clamp(220px, 35vw, 400px)', overflow: 'hidden' }}>
        <img src="/assets/images/ai-factory.png" alt="SENHONG STUDIO Factory Floor"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
      </div>

      {/* ── PRODUCTION LINES ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 0' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8, textAlign: 'center' }}>Inside The Facility</h2>
        <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginBottom: 40 }}>Every department under one roof — no subcontracting, full control.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="lines-grid">
          {lines.map((l, i) => (
            <div key={l.title} style={{ padding: '24px', background: '#FAFAF8', borderTop: '3px solid #EB332B' }}>
              <p style={{ fontSize: 10, color: '#EB332B', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>DEPT {String(i + 1).padStart(2, '0')}</p>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>{l.title}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{l.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.lines-grid{grid-template-columns:1fr 1fr !important}}@media(max-width:480px){.lines-grid{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── PHOTO GRID ── */}
      <div style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="fc-imgs">
          <img src="/assets/images/ai-hoodie.png" alt="Heavyweight hoodie production" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top' }} />
          <img src="/assets/images/ai-tshirt.png" alt="T-shirt QC inspection" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }} className="fc-imgs2">
          <img src="/assets/images/ai-pants.png" alt="Pants production line" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
          <img src="/assets/images/ai-jacket.png" alt="Jacket assembly" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
          <img src="/assets/images/ai-flatlay.png" alt="Sample flatlay" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <style>{`@media(max-width:640px){.fc-imgs,.fc-imgs2{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <div style={{ background: '#000', marginTop: 56, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40 }}>Certifications & Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="fc-cert">
            {certs.map(c => (
              <div key={c.t} style={{ borderTop: '3px solid #EB332B', paddingTop: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 800, marginBottom: 10, color: '#fff', letterSpacing: '0.04em' }}>{c.t}</p>
                <p style={{ fontSize: 12, color: '#777', lineHeight: 1.7 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:640px){.fc-cert{grid-template-columns:1fr 1fr !important}}`}</style>
        </div>
      </div>

      {/* ── VISIT CTA ── */}
      <div style={{ padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>Factory Verification Welcome</p>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Walk The Floor With Us</h3>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 28, maxWidth: 460, margin: '0 auto 28px auto', lineHeight: 1.7 }}>
          All qualified brands are welcome to visit in person. Meet the QC team, inspect the production lines, review the full fabric library and certification documents.
        </p>
        <Link to="/contact" className="btn-red">SCHEDULE A FACTORY VISIT</Link>
      </div>
    </div>
  );
}
