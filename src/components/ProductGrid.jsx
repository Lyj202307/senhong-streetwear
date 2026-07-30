const products = [
  { name: 'Classic Oversized Tee', cat: 'T-Shirts', gsm: '280 GSM', moq: '100 pcs', fabric: '100% Combed Cotton' },
  { name: 'Vintage Wash Hoodie', cat: 'Hoodies', gsm: '460 GSM', moq: '50 pcs', fabric: 'French Terry Fleece' },
  { name: 'Boxy Drop-Shoulder Tee', cat: 'T-Shirts', gsm: '320 GSM', moq: '100 pcs', fabric: 'Heavy Jersey' },
  { name: 'Cargo Sweatpants', cat: 'Pants', gsm: '400 GSM', moq: '80 pcs', fabric: 'Brushed Fleece' },
  { name: 'Puffer Jacket', cat: 'Jackets', gsm: '-', moq: '50 pcs', fabric: 'Nylon Shell + Down Fill' },
  { name: 'Acid Wash Denim', cat: 'Pants', gsm: '12 oz', moq: '100 pcs', fabric: 'Rigid Denim' },
  { name: 'Graphic Print Hoodie', cat: 'Hoodies', gsm: '420 GSM', moq: '50 pcs', fabric: 'Cotton Fleece' },
  { name: 'Varsity Jacket', cat: 'Jackets', gsm: '-', moq: '50 pcs', fabric: 'Wool Blend + Leather Sleeves' },
  { name: 'Cropped Tank', cat: 'T-Shirts', gsm: '200 GSM', moq: '100 pcs', fabric: 'Ribbed Cotton' },
  { name: 'Straight Cargo Pants', cat: 'Pants', gsm: '320 GSM', moq: '80 pcs', fabric: 'Cotton Twill' },
  { name: 'Zip-Up Hoodie', cat: 'Hoodies', gsm: '440 GSM', moq: '50 pcs', fabric: 'Brushed Terry' },
  { name: 'Coach Jacket', cat: 'Jackets', gsm: '-', moq: '50 pcs', fabric: 'Nylon + Mesh Lining' },
];

export default function ProductGrid({ category }) {
  const filtered = category
    ? products.filter((p) => p.cat.toLowerCase() === category.toLowerCase())
    : products;

  return (
    <div data-component="product-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((product) => (
        <div
          key={product.name}
          data-component="product-grid-item"
          className="group border border-border bg-card overflow-hidden transition-all hover:border-gold/50"
        >
          <div className="aspect-[3/4] bg-card flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: 'url("/assets/images/placeholder.svg")' }}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-gold font-bold px-4 py-2 border border-gold">
                MOQ: {product.moq}
              </span>
            </div>
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-gold text-black px-2 py-1 font-bold">
              {product.cat}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{product.name}</h3>
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{product.gsm}</span>
              <span className="w-1 h-1 bg-gold rounded-full" />
              <span>{product.fabric}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
