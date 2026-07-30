import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

const cats = ['All', 'T-Shirts', 'Shorts', 'Pants', 'Sets'];

export default function Products() {
  const [activeCat, setActiveCat] = useState('All');
  const [modalProduct, setModalProduct] = useState(null);
  const filtered = activeCat === 'All' ? products : products.filter(p => p.cat === activeCat);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingTop: 56 }}>
      <div style={{ background: '#000', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>Premium OEM · Factory Direct · 12hr Response</p>
        <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>PRODUCT CATALOG</h1>
      </div>

      <div style={{ borderBottom: '1px solid #E5E5E5', position: 'sticky', top: 56, background: '#fff', zIndex: 40 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActiveCat(c)}
              style={{ padding: '16px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', borderBottom: activeCat === c ? '2px solid #000' : '2px solid transparent', color: activeCat === c ? '#000' : '#999', transition: 'all 0.15s' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ fontSize: 12, color: '#999', marginBottom: 32 }}>{filtered.length} products — Click for details</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px 16px' }} className="pg">
          {filtered.map(p => (
            <div key={p.id} onClick={() => setModalProduct(p)} style={{ cursor: 'pointer', display: 'block' }}>
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
          ))}
        </div>
        <style>{`@media(max-width:900px){.pg{grid-template-columns:1fr 1fr !important}}@media(max-width:500px){.pg{grid-template-columns:1fr !important}}`}</style>
      </div>

      <div style={{ borderTop: '1px solid #E5E5E5', padding: '60px 24px', textAlign: 'center', background: '#FAFAF8' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>Custom Requirements</p>
        <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Don't see what you need?</h3>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 28 }}>1,500+ styles annually. Send us a reference and we will match it.</p>
        <Link to="/contact" className="btn-red" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Custom Inquiry <ArrowRight size={14} /></Link>
      </div>

      {modalProduct && <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />}
    </div>
  );
}
