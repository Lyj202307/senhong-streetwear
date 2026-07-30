import { Scissors, Palette, Truck, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    icon: Scissors,
    title: 'OEM Manufacturing',
    desc: 'Full-package production from your tech packs. Precision cutting, expert sewing, rigorous quality gates.',
  },
  {
    icon: Palette,
    title: 'ODM Design Service',
    desc: 'In-house design team. 200+ premium fabrics. 1,500+ annual designs. Trend-driven collections ready for your brand.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Excellence',
    desc: '8-stage QC process. ISO 9001 certified. 99%+ qualification rate. Every garment inspected before shipping.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    desc: 'Products shipped to 100+ countries. FOB/CIF terms. Flexible delivery schedules aligned with your launch calendar.',
  },
];

export default function CapabilityCard() {
  return (
    <section id="capabilities" data-component="capability-card" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">What We Deliver</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-4">
          End-to-End <span className="text-gold">Production</span>
        </h2>
        <p className="text-muted max-w-2xl mb-16 text-lg">
          From concept to container. Every step under one roof.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="group border border-border p-8 transition-colors hover:border-gold/50">
              <cap.icon size={28} className="text-gold mb-6" />
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">{cap.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
