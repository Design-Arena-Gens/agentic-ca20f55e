export default function MaterialCard({ title, description, meta, highlights = [] }) {
  return (
    <article className="material-card">
      <span className="material-meta">{meta}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {highlights.length > 0 && (
        <div className="feature-list">
          {highlights.map((item) => (
            <div key={item.label} className="feature-item">
              <span className="feature-icon">{item.symbol}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
