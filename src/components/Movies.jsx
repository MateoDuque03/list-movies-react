export function Movies ({ movies }) {
  if (!movies) return

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <div className="movie-header">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <div className="movie-content">
            <img src={movie.urlImg} alt={movie.title} />
          </div>
        </li>
      ))}
    </ul>
  );
};