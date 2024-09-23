export function Movies ({ movies }) {
  if (!movies) return

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.urlImg} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};