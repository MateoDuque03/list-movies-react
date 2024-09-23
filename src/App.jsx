import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error, hasError} = useSearch()
  const { movies, getMovies } = useMovies({ search })

  console.log({movies})

  const handleSubmit = (event) =>   {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    setSearch(newValue)
    hasError(newValue)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form action="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} type="text" placeholder="Avengers, Star Wars, The matrix..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>  
        {movies?.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <p>No se encontrado peliculas de la busqueda</p>
        )}
      </main>
    </div>
  );
}

export default App;
