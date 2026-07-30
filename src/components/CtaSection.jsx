import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

export default function CtaSection() {
  return (
    <section data-component="cta-section" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <Building2 size={40} className="text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-6">
          Ready To <span className="text-gold">Build</span> Your Collection?
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
          Send us your tech pack or tell us your vision. Our team responds within 12 hours with a feasibility report and quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="gold-cta inline-flex items-center gap-2">
            Start Your Run <ArrowRight size={16} />
          </Link>
          <Link to="/factory" className="gold-cta-outline inline-flex items-center gap-2">
            Visit Our Factory
          </Link>
        </div>
      </div>
    </section>
  );
}
