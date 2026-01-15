import MaterialCard from './components/MaterialCard';
import ProductCard from './components/ProductCard';

const coreMaterials = [
  {
    title: 'SPC Flooring Systems',
    description:
      'Stone polymer composite planks crafted for high-traffic hospitality, retail, and residential zones with acoustic underlays and waterproof cores.',
    meta: 'Signature Surface',
    highlights: [
      { label: 'Rigid Core', detail: 'Integrated IXPE cushion delivers 20dB acoustic dampening.', symbol: 'Δ' },
      { label: 'Rapid Install', detail: 'Mechanically locks in under two hours per 100m².', symbol: '⚡' },
    ],
  },
  {
    title: 'FlexiTile Panels',
    description:
      'Modular interlocking tiles for pop-up experiences and reconfigurable brand sets, engineered for swift turnover and minimal waste.',
    meta: 'Adaptive Spaces',
    highlights: [
      { label: 'Magnetic Grid', detail: 'Reversible installations snap to ferrous substrates.', symbol: '🧲' },
      { label: 'Weather Rated', detail: 'UV sealed for semi-outdoor atriums and pergolas.', symbol: '☀️' },
    ],
  },
  {
    title: '3D Decorative Panels',
    description:
      'CNC milled panels sculpted from lightweight composites with backlighting cavities for immersive signature walls.',
    meta: 'Immersive Layers',
    highlights: [
      { label: 'Deep Relief', detail: 'Up to 65mm profile depth with seamless corner returns.', symbol: '↟' },
      { label: 'Acoustic Core', detail: 'Integrated felt backing for NRC 0.75 acoustic performance.', symbol: '♪' },
    ],
  },
];

const architecturalShell = [
  {
    title: 'Soffit Panel Systems',
    description:
      'Precision-aligned soffit cladding with hidden fixings and integrated lighting raceways for exterior prestige entrances.',
    meta: 'Facade Atelier',
  },
  {
    title: 'ACP Façade Sheets',
    description:
      'Fire-rated aluminium composite profiles with nano-coatings to repel dust and coastal salt for pristine longevity.',
    meta: 'Performance Skin',
  },
  {
    title: 'PVC Louvers',
    description:
      'UV stabilised louvers that modulate daylight and airflow while concealing HVAC runs and services elegantly.',
    meta: 'Climate Adaptive',
  },
  {
    title: 'PU Stone Veneers',
    description:
      'Featherweight polyurethane stone veneers recreate luxe masonry at 1/8th the load—perfect for retrofit upgrades.',
    meta: 'Heritage Reinvented',
  },
  {
    title: 'Premium Laminates',
    description:
      'Scratch-resistant high-pressure laminates with antibacterial top coats for hospitality-grade millwork.',
    meta: 'Tactile Surfaces',
  },
];

const experienceMoments = [
  {
    title: 'Hospitality Signatures',
    copy:
      'Curate themed suites and lounges with textures that balance durability and wow-factor for luxury hospitality brands.',
    badges: ['Boutique Hotels', 'Signature Bars', 'Wellness Suites'],
    cta: { href: '#consult', label: 'Hospitality Playbook' },
  },
  {
    title: 'Retail Flagships',
    copy: 'Deploy modular merchandising stages that evolve with seasonal drops while preserving immaculate finishes.',
    badges: ['Pop-Up Ready', 'Multi-Brand', 'Rapid Fit-Out'],
    light: true,
    cta: { href: '#consult', label: 'Retail Blueprint' },
  },
  {
    title: 'Workplace Renaissance',
    copy:
      'Activate collaborative offices with acoustic zoning, biophilic surfaces, and premium tactile cues that energise teams.',
    badges: ['Executive Floors', 'Innovation Labs', 'Hybrid Pods'],
    cta: { href: '#consult', label: 'Workspace Design Lab' },
  },
];

function GearClock() {
  return (
    <div className="gear-clock" id="gear-clock">
      <svg viewBox="0 0 480 480" role="img" aria-labelledby="gearClockTitle">
        <title id="gearClockTitle">Grand Royale Gear Clock</title>
        <defs>
          <linearGradient id="gearGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#f8d24e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <circle cx="240" cy="240" r="220" fill="none" stroke="rgba(248,210,78,0.35)" strokeWidth="8" />
        <circle cx="240" cy="240" r="120" fill="none" stroke="rgba(248,210,78,0.55)" strokeWidth="10" strokeDasharray="12 18" />
        <g stroke="url(#gearGradient)" strokeWidth="16" strokeLinecap="round">
          <path d="M240 240 L240 96" />
          <path d="M240 240 L360 260" />
          <path d="M240 240 L180 360" />
        </g>
        <g fill="none" stroke="rgba(248,210,78,0.5)" strokeWidth="12">
          <path d="M240 110 A130 130 0 0 1 360 240" />
          <path d="M120 240 A120 120 0 0 1 240 360" />
        </g>
        <g fill="rgba(248,210,78,0.8)">
          <circle cx="240" cy="240" r="18" />
          <circle cx="360" cy="260" r="12" />
          <circle cx="180" cy="360" r="10" />
        </g>
        <text x="240" y="260" textAnchor="middle" fill="#11131d" fontWeight="700" fontSize="22">
          Gear Clock Series
        </text>
        <text x="240" y="292" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="14">
          Signature kinetic installations
        </text>
      </svg>
      <p>
        The Gear Clock series fuses kinetic sculpture with precision timekeeping, anchoring lobby experiences with a sculptural focal point.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="container" style={{ paddingTop: '120px' }}>
        <div className="hero">
          <div className="hero-content">
            <p className="tagline">Interior Startup Studio</p>
            <h1>
              Grand Royale Interior
              <br />
              Materials with Majesty.
            </h1>
            <p>
              We engineer statement-making surfaces—from SPC flooring to kinetic gear clocks—that elevate interior narratives for brands, builders, and boutique developers.
            </p>
            <div className="button-group">
              <a href="#materials" className="btn btn-primary">
                Explore Materials
              </a>
              <a href="#consult" className="btn btn-outline">
                Book a Design Sprint
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true" />
        </div>
      </header>

      <section id="materials">
        <div className="container">
          <div className="section-heading">
            <span>Portfolio Core</span>
            <h2>Surface systems crafted for signature interiors.</h2>
            <p>
              Every collection is curated to solve real-world challenges—speed of install, acoustic performance, sustainability—without compromising spectacle.
            </p>
          </div>
          <div className="grid grid-3">
            {coreMaterials.map((material) => (
              <MaterialCard key={material.title} {...material} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" id="shell">
        <div className="container">
          <div className="section-heading">
            <span>Architectural Shell</span>
            <h2>Exterior-ready finishes engineered for bold façades.</h2>
            <p>
              We partner with architects and contractors to deliver soffit panel systems, ACP sheet façades, and louvers that endure Asia-Pacific climates.
            </p>
          </div>
          <div className="grid grid-3">
            {architecturalShell.map((material) => (
              <MaterialCard key={material.title} {...material} />
            ))}
          </div>
        </div>
      </section>

      <section id="experiences">
        <div className="container">
          <div className="section-heading">
            <span>Experience Moments</span>
            <h2>Design playbooks for hospitality, retail, and workplace.</h2>
            <p>
              Strategic frameworks tie together SPC floors, 3D panels, flexitiles, and signature sculptural elements into cohesive stories for every venue.
            </p>
          </div>
          <div className="product-showcase">
            {experienceMoments.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="gear" className="section-light">
        <div className="container">
          <div className="section-heading">
            <span>Signature Object</span>
            <h2>Gear Clock installations for lobby theatre.</h2>
            <p>
              Sculpted gears rotate quietly behind crystal housing, synchronised with digital control modules for programmable motion and lighting cues.
            </p>
          </div>
          <GearClock />
        </div>
      </section>

      <section id="consult">
        <div className="container">
          <div className="section-heading">
            <span>Launch With Us</span>
            <h2>Interior product startup lab based in Southeast Asia.</h2>
            <p>
              Grand Royale Interior partners with developers, interior contractors, and brand teams to prototype, sample, and deliver integrated surface stories across hospitality, retail, and workplace portfolios.
            </p>
          </div>
          <div className="grid grid-3">
            <MaterialCard
              title="Sampling Studio"
              description="Curate swatch kits across SPC, laminates, and 3D panels. Express courier to your project war room in 48 hours."
              meta="Rapid Sampling"
            />
            <MaterialCard
              title="Design Lab"
              description="Co-create bespoke finishes, soffit panel geometries, and flexitile patterns guided by our material designers."
              meta="Collaboration"
            />
            <MaterialCard
              title="Project Services"
              description="From take-off to installation oversight, we deliver agile teams to keep your fit-out timeline on track."
              meta="Delivery"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Grand Royale Interior</h3>
            <p style={{ color: 'var(--color-muted)', marginTop: '12px', lineHeight: 1.6 }}>
              Crafted in Singapore. Delivering regional interior upgrades with premium materials and kinetic centrepieces.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#materials">SPC Flooring</a></li>
              <li><a href="#materials">FlexiTile Panels</a></li>
              <li><a href="#materials">3D Decorative Panels</a></li>
              <li><a href="#shell">Soffit Systems</a></li>
              <li><a href="#shell">ACP Sheets</a></li>
              <li><a href="#shell">PVC Louvers</a></li>
              <li><a href="#shell">PU Stone</a></li>
              <li><a href="#materials">Premium Laminates</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#experiences">Hospitality Signatures</a></li>
              <li><a href="#experiences">Retail Flagships</a></li>
              <li><a href="#experiences">Workplace Renaissance</a></li>
              <li><a href="#gear">Gear Clock Installations</a></li>
            </ul>
          </div>
          <div>
            <h4>Stay in the Loop</h4>
            <form className="newsletter">
              <input type="email" placeholder="Email for lookbook drops" required />
              <button type="submit">Request Lookbook</button>
            </form>
          </div>
        </div>
        <div className="container" style={{ marginTop: '40px', color: 'var(--color-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Grand Royale Interior. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
