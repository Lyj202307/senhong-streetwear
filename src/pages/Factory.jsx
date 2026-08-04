import { BASE_URL } from "../baseUrl";
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
      <div style={{ height: 'clamp(260px, 40vw, 460px)', overflow: 'hidden', position: 'relative' }}>
        <img src={`${BASE_URL}assets/images/factory-line.jpg`} alt="SENHONG STUDIO Factory Floor"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', bottom: 36, left: '5%', right: '5%', maxWidth: 640 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 8 }}>Vertically Integrated Production</p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(20px, 3.2vw, 30px)', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>ONE ROOF. FULL CONTROL. ZERO SUBCONTRACTING.</h2>
        </div>
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
          <img src={`${BASE_URL}assets/images/qc-inspect.jpg`} alt="Garment QC inspection" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'center' }} />
          <img src={`${BASE_URL}assets/images/ai-hoodie.png`} alt="Heavyweight hoodie production" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }} className="fc-imgs2">
          <img src={`${BASE_URL}assets/images/ai-pants.png`} alt="Pants production line" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
          <img src={`${BASE_URL}assets/images/ai-jacket.png`} alt="Jacket assembly" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
          <img src={`${BASE_URL}assets/images/ai-flatlay.png`} alt="Sample flatlay" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <style>{`@media(max-width:640px){.fc-imgs,.fc-imgs2{grid-template-columns:1fr !important}}`}</style>
      </div>

      {/* ── PRODUCTION FLOW ── */}
      <div style={{ background: '#0A0A0A', marginTop: 56, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: '#666', fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 10 }}>Garment Journey</p>
          <h2 style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 48 }}>6-STAGE PRODUCTION FLOW</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }} className="flow">
            {[
              { n: '01', t: 'Fabric Intake', d: 'AQL-verified rolls. Shrinkage, colour & weight tested before cutting.' },
              { n: '02', t: 'Pattern & Cut', d: 'CAD-graded patterns. 12 auto cutters, 8,000+ pcs per day.' },
              { n: '03', t: 'Sewing', d: '180+ stations. Single-needle, overlock, flatlock, bartack.' },
              { n: '04', t: 'Wash & Print', d: 'Enzyme, acid wash, DTG, screen print & embroidery in-house.' },
              { n: '05', t: 'QC Inspection', d: '15-person team. AQL 2.5 inline + 100% final visual check.' },
              { n: '06', t: 'Pack & Ship', d: 'Barcode-tracked packing. FOB / CIF / DDP to 100+ countries.' },
            ].map((s, i) => (
              <div key={s.n} style={{ textAlign: 'center', padding: '28px 16px', borderRight: i < 5 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ width: 44, height: 44, margin: '0 auto 14px', borderRadius: '50%', border: '2px solid #EB332B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: '#EB332B' }}>{s.n}</div>
                <h3 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{s.t}</h3>
                <p style={{ fontSize: 11, color: '#888', lineHeight: 1.7 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:900px){.flow{grid-template-columns:1fr 1fr 1fr !important}}@media(max-width:500px){.flow{grid-template-columns:1fr 1fr !important}}`}</style>
        </div>
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
