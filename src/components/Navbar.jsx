import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'HOME' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/services', label: 'SERVICES' },
  { to: '/factory', label: 'FACTORY' },
  { to: '/about', label: 'ABOUT US' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: '#EB332B', color: '#fff', textAlign: 'center', padding: '7px 16px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <span className="ann-full">FREE SAMPLES FOR QUALIFIED BRANDS &nbsp;·&nbsp; MOQ FROM 50 PCS &nbsp;·&nbsp; FACTORY VISITS WELCOME</span>
        <span className="ann-short">FREE SAMPLES &nbsp;·&nbsp; MOQ 50 &nbsp;·&nbsp; FACTORY VISITS</span>
      </div>
      <style>{`.ann-short{display:none}@media(max-width:640px){.ann-full{display:none}.ann-short{display:inline}}`}</style>

      {/* Main nav */}
      <nav style={{ background: '#000', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <Link to="/" style={{ color: '#fff', fontWeight: 900, fontSize: 16, letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            SENHONG STUDIO
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: 'flex', gap: 28 }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                color: pathname === l.to ? '#fff' : 'rgba(255,255,255,0.6)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                transition: 'color 0.15s', whiteSpace: 'nowrap'
              }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => { if (pathname !== l.to) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >{l.label}</Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/contact" className="btn-red" style={{ padding: '8px 18px', fontSize: 10 }}>GET QUOTE</Link>
            <button onClick={() => setOpen(!open)} className="nav-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4, display: 'none' }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: '#111', borderTop: '1px solid #222' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '14px 24px', color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', borderBottom: '1px solid #222' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ padding: '16px 24px' }}>
              <Link to="/contact" className="btn-red" style={{ padding: '10px 24px', fontSize: 11, display: 'inline-block' }}>GET QUOTE</Link>
            </div>
          </div>
        )}
      </nav>
      <style>{`@media(max-width:768px){.nav-desktop{display:none !important}.nav-toggle{display:block !important}}`}</style>
    </>
  );
}
