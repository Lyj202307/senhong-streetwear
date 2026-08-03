import { BASE_URL } from "../baseUrl";
// All verified product data — images matched to actual garment types
export const products = [
  { id: 1, name: 'Angel Shooter Vintage Tee', cat: 'T-Shirts', brand: 'Hastamuerte', spec: '280 GSM · Combed Cotton', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-1a.jpg`, desc: 'Distressed vintage wash tee with cherub and angel shooter graphics. Heavyweight 280 GSM combed cotton.' },
  { id: 2, name: 'Silent Moves Script Tee', cat: 'T-Shirts', brand: 'Hastamuerte', spec: '280 GSM · Combed Cotton', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-2a.jpg`, desc: 'Bold script logo tee with cherub artwork. Drop shoulder fit, enzyme washed.' },
  { id: 3, name: 'Money Over Pleasure Tee', cat: 'T-Shirts', brand: 'Hastamuerte', spec: '280 GSM · Combed Cotton', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-3b.jpg`, desc: 'Charcoal tee with "Money Over Pleasure" graphic and cherub art. Street staple.' },
  { id: 4, name: 'Pink Bucks Mesh Shorts', cat: 'Shorts', brand: 'Hastamuerte', spec: 'Lightweight Mesh', moq: 'MOQ 50 pcs', img: `${BASE_URL}assets/images/product-4a.jpg`, desc: 'Pink mesh athletic shorts with bold $100 bill all-over print. Elastic waistband, breathable.' },
  { id: 5, name: 'Flame Cherub Heavy Tee', cat: 'T-Shirts', brand: 'SENHONG OEM', spec: '320 GSM · Heavy Jersey', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-6a.jpg`, desc: 'Acid-washed 320 GSM heavyweight tee. Flames, chains, and cherub artwork with rhinestone accents.' },
  { id: 6, name: "Don't Sleep Co-ord Set", cat: 'Sets', brand: 'SENHONG OEM', spec: '260 GSM · French Terry', moq: 'MOQ 50 pcs', img: `${BASE_URL}assets/images/product-8a.jpg`, desc: 'Light blue oversized tee + matching shorts set. "Don\'t Sleep" graphic, rhinestone baroque embroidery on shorts.' },
  { id: 7, name: 'Rhinestone Gothic Tee', cat: 'T-Shirts', brand: 'SENHONG OEM', spec: '280 GSM · Enzyme Wash', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-10a.jpg`, desc: 'Acid-washed black tee with rhinestone cherub and "HASTA MUERTE" script. Premium finish.' },
  { id: 8, name: 'RAVEN Gothic Tee', cat: 'T-Shirts', brand: 'SENHONG OEM', spec: '280 GSM · Combed Cotton', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-11a.jpg`, desc: 'Black tee with "RAVEN" Gothic lettering, eagle graphic, and rhinestone stud detailing.' },
  { id: 9, name: 'Script Logo Joggers', cat: 'Pants', brand: 'SENHONG OEM', spec: '340 GSM · Fleece', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-12a.jpg`, desc: 'Black jogger-fit fleece sweatpants with cherub + money bag graphic. Tapered leg, elastic cuffs.' },
  { id: 10, name: 'Get Money Graphic Shorts', cat: 'Shorts', brand: 'SENHONG OEM', spec: 'Lightweight Mesh', moq: 'MOQ 80 pcs', img: `${BASE_URL}assets/images/product-14a.jpg`, desc: 'Grayscale graphic mesh shorts with skull, Franklin, and "Get Money" collage. Statement piece.' },
  { id: 11, name: 'OPPS Graphic Shorts', cat: 'Shorts', brand: 'SENHONG OEM', spec: 'Lightweight Mesh', moq: 'MOQ 80 pcs', img: `${BASE_URL}assets/images/product-15a.jpg`, desc: 'Black mesh shorts with Franklin mask graphic and "OPPS / GET MONEY" street art print.' },
  { id: 12, name: 'Trust Nobody Tee', cat: 'T-Shirts', brand: 'SENHONG OEM', spec: '260 GSM · Ringspun', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-16a.jpg`, desc: 'White tee with bold scorpion clutching a red rose. "TRUST NOBODY / HUSTLE DAILY" graphic.' },
  { id: 13, name: 'Guadalupe Rhinestone Tee', cat: 'T-Shirts', brand: 'SENHONG OEM', spec: '280 GSM · Combed Cotton', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-18a.jpg`, desc: 'Black tee with rhinestone Our Lady of Guadalupe graphic in light blue. Angel cherub tag at hem.' },
  { id: 14, name: 'MUERTE Denim Shorts', cat: 'Shorts', brand: 'SENHONG OEM', spec: '12 oz · Rigid Denim', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-19a.jpg`, desc: 'Light-wash distressed denim shorts with "MUERTE" branding, embroidered flames, and rhinestone clusters.' },
  { id: 15, name: 'TRUE RICE Denim Shorts', cat: 'Shorts', brand: 'SENHONG OEM', spec: '12 oz · Acid Wash Denim', moq: 'MOQ 100 pcs', img: `${BASE_URL}assets/images/product-20a.jpg`, desc: 'Acid-wash denim shorts with "TRUE" / "RICE" gothic pocket embroidery. Hang tags included.' },
];

export const newArrivals = products.filter(p => p.id <= 4);
export const bestSellers = products.filter(p => p.id >= 5 && p.id <= 8);
export const moreItems = products.filter(p => p.id >= 9 && p.id <= 12);
