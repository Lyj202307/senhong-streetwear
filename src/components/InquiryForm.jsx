import { useState } from 'react';
import { Send } from 'lucide-react';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl font-black text-gold mb-4">Thank You</div>
        <p className="text-muted text-lg">We'll respond within 12 hours. Let's build something great.</p>
      </div>
    );
  }

  return (
    <form data-component="inquiry-form" onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Company Name *</label>
        <input type="text" required className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors" placeholder="Your brand or company" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Contact Name *</label>
          <input type="text" required className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors" placeholder="Full name" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Email *</label>
          <input type="email" required className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors" placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Product Category</label>
          <select className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors">
            <option value="">Select category</option>
            <option>T-Shirts</option>
            <option>Hoodies</option>
            <option>Pants & Denim</option>
            <option>Jackets & Outerwear</option>
            <option>Tracksuits</option>
            <option>Multiple Categories</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Estimated MOQ</label>
          <select className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors">
            <option value="">Select range</option>
            <option>50–100 pcs</option>
            <option>100–500 pcs</option>
            <option>500–2,000 pcs</option>
            <option>2,000–10,000 pcs</option>
            <option>10,000+ pcs</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Project Details *</label>
        <textarea required rows={5} className="w-full bg-input border border-border px-4 py-3 text-foreground text-sm focus:border-gold focus:outline-none transition-colors resize-none" placeholder="Describe your product, fabric preferences, reference images, and any specific requirements..." />
      </div>

      <button type="submit" className="gold-cta w-full flex items-center justify-center gap-2">
        Send Inquiry <Send size={16} />
      </button>
    </form>
  );
}
