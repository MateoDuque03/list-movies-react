import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const newMovies = await searchMovies({ search })
    console.log({newMovies})
    setMovies(newMovies)
  }

  return {
    movies,
    getMovies,
  };
}
