import { useRef, useState } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
	const isFirstSearch = useRef(true) // Sirve para persistir un estado en el tiempo sin refrescar el componente

	const hasError = (search) => {
		if(isFirstSearch.current === true) {
			isFirstSearch.current = false;
		}

    if (search === '' && isFirstSearch.current === false) {
      setError('No puede ser vacio')
      return false
    }
		
    if (search.length < 4) {
			setError('Tiene que ser mayor a 3 caracteres')
      return false
    }
		
    if (search.match(/^\d+$/)){
			setError('No puede contener numeros')
      return false
    }

    setError('')

    return true
  }

	return {
		search,
    setSearch,
		error,
    hasError
	}
}