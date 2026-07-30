import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#fff', paddingTop: 56 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48 }} className="footer-grid">
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: '0.15em', marginBottom: 4 }}>
            SENHONG STUDIO
          </div>
          <p style={{ color: '#666', fontSize: 12, lineHeight: 1.8, marginTop: 12, maxWidth: 240 }}>
            Premium OEM/ODM streetwear manufacturer. Trusted by 500+ brands. Est. 2009.
          </p>
        </div>
        {[
          { h: 'SHOP', links: [{ l: 'All Products', to: '/products' }, { l: 'T-Shirts', to: '/products' }, { l: 'Hoodies', to: '/products' }, { l: 'Pants & Denim', to: '/products' }] },
          { h: 'COMPANY', links: [{ l: 'About Us', to: '/about' }, { l: 'Factory Tour', to: '/factory' }, { l: 'Services', to: '/services' }, { l: 'Certifications', to: '/factory' }] },
          { h: 'SUPPORT', links: [{ l: 'Get a Quote', to: '/contact' }, { l: 'Sample Request', to: '/contact' }, { l: 'Book Factory Visit', to: '/contact' }, { l: 'FAQ', to: '/contact' }] },
        ].map(col => (
          <div key={col.h}>
            <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.25em', color: '#555', marginBottom: 16 }}>{col.h}</p>
            {col.links.map(l => (
              <Link key={l.l} to={l.to} style={{ display: 'block', color: '#666', fontSize: 12, marginBottom: 10, transition: 'color 0.15s' }}
                onMouseOver={e => e.target.style.color = '#fff'}
                onMouseOut={e => e.target.style.color = '#666'}
              >{l.l}</Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #1a1a1a', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, maxWidth: 1400, margin: '0 auto' }}>
        <p style={{ fontSize: 11, color: '#444' }}>© 2026 SENHONG STUDIO · All rights reserved</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['BSCI', 'ISO 9001', 'OEKO-TEX'].map(c => <span key={c} style={{ fontSize: 10, fontWeight: 700, color: '#555', letterSpacing: '0.1em' }}>{c}</span>)}
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr !important}}`}</style>
    </footer>
  );
}
