import { useCallback, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(search)
  
  const getMovies = async () => {
    if (search === previusSearch.current) return
    
    try {
      setLoading(true)
      previusSearch.current = search
      const newMovies = await searchMovies({ search })
      console.log({newMovies})
      setMovies(newMovies)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    movies,
    loading,
    getMovies,
  };
}
