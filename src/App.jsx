const movieOptions = [
  { title: 'Action', imageUrl: '/react-final/images/actioncouch.jpg' },
  { title: 'Comedy', imageUrl: '/react-final/images/comedycouch.jpg' },
  { title: 'Drama', imageUrl: '/react-final/images/couchdrama.jpg' },
  { title: 'Sci-Fi', imageUrl: '/react-final/images/couchscifi.jpg' },
  { title: 'Thriller', imageUrl: '/react-final/images/couchthriller.jpg' },
]

export default function App() {
  return (
    <main className="simple">
      <section className="main-card">
        <p className="label">Couchflicks</p>
        <h1>Simple streaming for easy nights.</h1>
        <p className="lead">Pick something fast and hit play.</p>
        <div className="actions">
          <button type="button" className="primary-btn">Play</button>
          <button type="button" className="secondary-btn">Browse</button>
        </div>
        <p className="details">12 top picks • 4K quality • 24/7 available</p>
      </section>
      <section className="highlights" aria-label="Highlights">
        <article className="highlight-card">
          <h2>Fast</h2>
          <p>Find something good in a few seconds.</p>
        </article>
        <article className="highlight-card">
          <h2>Calm</h2>
          <p>No loud clutter. Just a few choices.</p>
        </article>
      </section>
      <section className="movie-list" aria-label="Movie options">
        <h2 className="list-title">Movie options</h2>
        <div className="list-row">
          {movieOptions.map(option => (
            <article key={option.title} className="movie-item">
              {option.imageUrl ? (
                <img className="movie-image" src={option.imageUrl} alt={option.title} />
              ) : (
                <div className="poster-slot" aria-hidden="true" />
              )}
              <p>{option.title}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}