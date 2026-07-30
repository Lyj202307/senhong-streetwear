import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'T-Shirts', count: '200+ styles', desc: 'Oversized, boxy, cropped. 180–320 GSM. Custom prints & washes.', to: '/products' },
  { name: 'Hoodies', count: '150+ styles', desc: 'Heavyweight 400–500 GSM. Vintage washes, embroidery, puff prints.', to: '/products' },
  { name: 'Pants & Denim', count: '120+ styles', desc: 'Cargo, denim, sweatpants. Custom washes, distressing, raw edge.', to: '/products' },
  { name: 'Jackets & Outerwear', count: '80+ styles', desc: 'Puffer, varsity, denim jackets. Tech fabrics & custom trims.', to: '/products' },
];

export default function CategoryShowcase() {
  return (
    <section data-component="category-showcase" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Product Categories</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-4">
          Built For <span className="text-gold">Every Style</span>
        </h2>
        <p className="text-muted max-w-2xl mb-16 text-lg">
          Core streetwear blanks and custom manufacturing across all categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="group relative overflow-hidden border border-border bg-card p-10 transition-all hover:border-gold/50"
            >
              <div className="relative z-10">
                <span className="text-xs text-gold uppercase tracking-widest font-bold">{cat.count}</span>
                <h3 className="text-2xl font-black uppercase tracking-wider mt-2 mb-3">{cat.name}</h3>
                <p className="text-muted text-sm mb-6">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-bold">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
