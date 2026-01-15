export default function ProductCard({ title, copy, badges = [], light = false, cta }) {
  return (
    <article className={`product-card${light ? ' product-card-light' : ''}`}>
      <div className="card-accent" aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
        {badges.length > 0 && (
          <div className="badge-row">
            {badges.map((badge) => (
              <span key={badge} className={`badge${light ? ' badge-light' : ''}`}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      {cta && (
        <a href={cta.href} className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
          {cta.label}
        </a>
      )}
    </article>
  );
}
