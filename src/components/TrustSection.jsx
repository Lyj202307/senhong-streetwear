const stats = [
  { value: '500+', label: 'Global Brands' },
  { value: '300K+', label: 'Monthly Capacity' },
  { value: '16 Years', label: 'Experience' },
  { value: '99%', label: 'Quality Rate' },
];

export default function TrustSection() {
  return (
    <section data-component="trust-section" className="section-padding bg-card border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-label text-center">Trusted Worldwide</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-16">
          Numbers <span className="text-gold">Don't Lie</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} data-component="factory-stat-block">
              <div className="stat-number">{stat.value}</div>
              <p className="text-xs uppercase tracking-widest text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted mb-6">Primary Export Market Partner For</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground uppercase tracking-wider">
            <span>North America</span>
            <span>Europe</span>
            <span>Middle East</span>
            <span>Australia</span>
            <span>Japan</span>
            <span>Korea</span>
          </div>
        </div>
      </div>
    </section>
  );
}
