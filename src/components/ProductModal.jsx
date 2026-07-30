import { X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#fff', maxWidth: 960, width: '100%', maxHeight: '90vh', overflow: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}
        className="pm-grid">

        {/* Image */}
        <div style={{ background: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
          <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Info */}
        <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <button onClick={onClose}
            style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
            <X size={20} />
          </button>

          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>
            {product.brand} · {product.cat}
          </p>
          <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '0.04em', marginBottom: 12, lineHeight: 1.2 }}>
            {product.name}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 20 }}>
            {product.desc}
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 28 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#999', marginBottom: 4 }}>SPEC</p>
              <p style={{ fontSize: 13, fontWeight: 600 }}>{product.spec}</p>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#999', marginBottom: 4 }}>MOQ</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#EB332B' }}>{product.moq}</p>
            </div>
          </div>

          <Link to="/contact" className="btn-red" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
            <Send size={14} /> INQUIRE THIS PRODUCT
          </Link>
          <p style={{ fontSize: 11, color: '#aaa', marginTop: 16 }}>
            We respond within 12 hours with pricing and timeline.
          </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.pm-grid{grid-template-columns:1fr !important}}`}</style>
    </div>
  );
}
