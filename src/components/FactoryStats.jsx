export default function FactoryStats() {
  return (
    <section data-component="factory-stats" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Production Powerhouse</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-16">
          Inside The <span className="text-gold">Factory</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-[4/3] bg-background border border-border flex items-center justify-center mb-6">
              <div className="text-center p-8">
                <div className="text-6xl font-black text-gold mb-4">25,000 m²</div>
                <p className="text-xs uppercase tracking-widest text-muted">Production Facility</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ['250+', 'Skilled Workers'],
              ['8', 'Production Lines'],
              ['300K+', 'Monthly Capacity'],
              ['3,600K+', 'Annual Output'],
            ].map(([val, label]) => (
              <div key={label} data-component="factory-stat-block" className="border border-border p-6">
                <div className="text-3xl font-black text-gold">{val}</div>
                <p className="text-xs uppercase tracking-widest text-muted mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Cutting Workshop', 'Sewing Lines', 'Quality Lab'].map((area) => (
            <div key={area} className="border border-border p-8 text-center">
              <div className="aspect-video bg-background border border-border mb-4 flex items-center justify-center">
                <span className="text-xs text-muted uppercase tracking-widest">{area}</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider">{area}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-2">Want to see it in person?</p>
          <a href="/contact" className="gold-cta-outline inline-block">
            Book a Factory Visit
          </a>
        </div>
      </div>
    </section>
  );
}
