const steps = [
  { num: '01', title: 'Design & Tech Pack', desc: 'Share your sketches, references, or tech pack. Our design team reviews feasibility and suggests optimizations.' },
  { num: '02', title: 'Fabric Sourcing', desc: '200+ premium fabrics in stock. Custom fabric development available. OEKO-TEX certified options.' },
  { num: '03', title: 'Sampling', desc: '3–5 day turnaround for standard samples. Digital sample photos shared before physical dispatch.' },
  { num: '04', title: 'Production', desc: 'Scalable capacity up to 300K+ pcs/month. Real-time production tracking via ERP system.' },
  { num: '05', title: 'Quality Control', desc: '8-stage inspection: fabric → cutting → sewing → wash → print → trim → finish → packaging.' },
  { num: '06', title: 'Global Delivery', desc: 'FOB/CIF terms. Consolidated shipping. On-time delivery rate: 98.5%.' },
];

export default function ProcessTimeline() {
  return (
    <section data-component="process-timeline" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">How We Work</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-4">
          From Sketch <span className="text-gold">To Sold-Out</span>
        </h2>
        <p className="text-muted max-w-2xl mb-16 text-lg">
          Six stages. One partner. Zero friction.
        </p>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-component="process-step"
              className="group flex gap-8 py-10 border-t border-border last:border-b"
            >
              <div className="text-5xl md:text-6xl font-black text-gold/20 group-hover:text-gold/40 transition-colors shrink-0 w-20">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
