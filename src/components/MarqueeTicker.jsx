export default function MarqueeTicker({ items }) {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: 'marquee 20s linear infinite',
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-bold uppercase flex-shrink-0" style={{ letterSpacing: '0.2em' }}>
            {item} <span className="text-red mx-3">★</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
