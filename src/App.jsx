import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { search, setSearch, error, hasError } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });
  const debounce = useDebounce()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      getMovies();
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
    if (hasError(newValue)) {
      debounce(() => {
        getMovies();
      }, 1000)
    };
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="form" onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Avengers, Star Wars, The matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : movies?.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <p>No se encontrado peliculas de la busqueda</p>
        )}
      </main>
    </div>
  );
}

export default App;
