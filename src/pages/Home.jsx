import { BASE_URL } from "../baseUrl";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, ShieldCheck, Palette, Truck } from 'lucide-react';
import { newArrivals, bestSellers, moreItems } from '../data/products';
import ProductModal from '../components/ProductModal';

const TICKER = ['OEM / ODM', 'MOQ 50 PCS', 'BSCI CERTIFIED', '300K+ MONTHLY', 'FACTORY VISIT', 'FREE SAMPLES', 'ISO 9001', '100+ COUNTRIES'];

function PCard({ p, onClick }) {
  return (
    <div onClick={() => onClick(p)} style={{ cursor: 'pointer', display: 'block' }}>
      <div style={{ background: '#F5F5F5', aspectRatio: '1/1', overflow: 'hidden' }}>
        <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
      </div>
      <div style={{ paddingTop: 10 }}>
        <p style={{ fontSize: 10, color: '#999', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{p.brand} · {p.cat}</p>
        <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 3, lineHeight: 1.3 }}>{p.name}</p>
        <p style={{ fontSize: 11, color: '#777' }}>{p.spec}</p>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#EB332B', marginTop: 2 }}>{p.moq}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [modalProduct, setModalProduct] = useState(null);

  return (
    <div style={{ background: '#fff' }}>
      {/* ── HERO ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
        <img src={`${BASE_URL}assets/images/hero-new.jpg`} alt="SENHONG STUDIO Streetwear Manufacturing"
          style={{ width: '100%', height: 'clamp(360px, 50vw, 520px)', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.35) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 40, left: '5%', maxWidth: 460 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
            Premium OEM / ODM Manufacturer
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(24px, 4.5vw, 40px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
            MANUFACTURING<br />FOR THE STREETS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, marginBottom: 22, maxWidth: 380 }}>
            500+ brands. 300K+ garments monthly. From tech pack to bulk — precision OEM streetwear manufacturing.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to="/products" className="btn-red" style={{ fontSize: 11, padding: '13px 28px' }}>EXPLORE PRODUCTS</Link>
            <Link to="/contact" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', fontSize: 11, padding: '13px 28px' }}>GET QUOTE</Link>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div style={{ background: '#000', overflow: 'hidden', padding: '11px 0' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 't 22s linear infinite' }}>
          {[...TICKER, ...TICKER, ...TICKER].map((x, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#999', padding: '0 24px', flexShrink: 0 }}>
              {x} <span style={{ color: '#EB332B', margin: '0 6px' }}>★</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes t{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}`}</style>
      </div>

      {/* ── CAPABILITIES ── */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="caps">
        {[
          { i: Factory, t: 'Factory Direct', d: 'Source from our own facility. No middlemen. Save 15-30%.' },
          { i: Palette, t: 'Full ODM Design', d: '20+ designers. 1,500+ annual styles. Trend-driven development.' },
          { i: ShieldCheck, t: 'Quality Control', d: '8-stage QC. ISO 9001 + BSCI. 99%+ pass rate.' },
          { i: Truck, t: 'Global Shipping', d: 'FOB / CIF / DDP. 100+ countries. 98.5% on-time delivery.' },
        ].map((c, i) => (
          <div key={c.t} style={{ textAlign: 'center', padding: '32px 20px', borderRight: i < 3 ? '1px solid #eee' : 'none' }}>
            <c.i size={32} color="#EB332B" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8 }}>{c.t}</h3>
            <p style={{ fontSize: 12, color: '#777', lineHeight: 1.6 }}>{c.d}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.caps{grid-template-columns:1fr 1fr !important}}@media(max-width:500px){.caps{grid-template-columns:1fr !important}}`}</style>

      {/* ── NEW ARRIVALS ── */}
      <div style={{ borderTop: '1px solid #E5E5E5', maxWidth: 1400, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>NEW ARRIVALS</h2>
          <Link to="/products" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 4, display: 'flex', alignItems: 'center', gap: 6 }}>SHOP ALL <ArrowRight size={13} /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px 16px' }} className="g4">
          {newArrivals.map(p => <PCard key={p.id} p={p} onClick={setModalProduct} />)}
        </div>
      </div>
      <style>{`@media(max-width:900px){.g4{grid-template-columns:1fr 1fr !important}}`}</style>

      {/* ── STATS BAND ── */}
      <div style={{ background: '#000', marginTop: 56, padding: '44px 24px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }} className="sb">
          {[{ n: '500+', l: 'Brand Partners' }, { n: '300K+', l: 'Pcs / Month' }, { n: 'MOQ 50', l: 'Minimum Order' }, { n: '16 Yrs', l: 'Experience' }].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#EB332B', lineHeight: 1 }}>{s.n}</div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', marginTop: 8 }}>{s.l}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.sb{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>

      {/* ── BEST SELLERS ── */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>BEST SELLERS</h2>
          <Link to="/products" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 4, display: 'flex', alignItems: 'center', gap: 6 }}>VIEW ALL <ArrowRight size={13} /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px 16px' }} className="g4b">
          {bestSellers.map(p => <PCard key={p.id} p={p} onClick={setModalProduct} />)}
        </div>
      </div>
      <style>{`@media(max-width:900px){.g4b{grid-template-columns:1fr 1fr !important}}`}</style>

      {/* ── FACTORY IMAGE BAND ── */}
      <div style={{ position: 'relative', marginTop: 56, overflow: 'hidden' }}>
        <img src={`${BASE_URL}assets/images/ai-factory.png`} alt="Factory" style={{ width: '100%', height: 'clamp(240px, 40vw, 380px)', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase' }}>Factory Verification Welcome</p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center', maxWidth: 480 }}>SEE OUR FLOOR FIRSTHAND</h2>
          <Link to="/factory" className="btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>BOOK A VISIT</Link>
        </div>
      </div>

      {/* ── MORE PRODUCTS ── */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>MORE TO SHOP</h2>
          <Link to="/products" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 4, display: 'flex', alignItems: 'center', gap: 6 }}>SEE MORE <ArrowRight size={13} /></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px 16px' }} className="g4c">
          {moreItems.map(p => <PCard key={p.id} p={p} onClick={setModalProduct} />)}
        </div>
      </div>
      <style>{`@media(max-width:900px){.g4c{grid-template-columns:1fr 1fr !important}}`}</style>

      {/* ── TRUST ── */}
      <div style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', marginTop: 56, padding: '36px 24px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }} className="tr">
          {[
            { t: 'FACTORY DIRECT', d: 'Source direct. No middleman markup.' },
            { t: 'FREE SAMPLES', d: 'Qualified brands receive sample sets.' },
            { t: 'LOW MOQ', d: 'Test runs from 50 pcs per colorway.' },
            { t: 'QUALITY GUARANTEE', d: '8-stage QC. ISO 9001. 99%+ pass.' },
          ].map(b => (
            <div key={b.t}>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>{b.t}</p>
              <p style={{ fontSize: 12, color: '#777' }}>{b.d}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.tr{grid-template-columns:1fr 1fr !important}}`}</style>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: '#EB332B', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 26, fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
          READY TO BUILD YOUR COLLECTION?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 28 }}>
          Tech pack or concept — we respond in 12 hours with a quote.
        </p>
        <Link to="/contact" style={{ display: 'inline-block', background: '#fff', color: '#EB332B', fontWeight: 900, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '15px 44px', border: 'none' }}>
          START YOUR RUN →
        </Link>
      </div>

      {modalProduct && <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />}
    </div>
  );
}
