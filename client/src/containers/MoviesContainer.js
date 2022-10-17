import {useState, useEffect} from 'react'
import MoviesLists from '../components/MoviesLists';
import "../components/styles.css"


function MoviesContainer({user}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
        .then((r) => r.json())
        .then((data) => {
          setMovies(data)
        })
        .catch((err) => alert(err))  
    }, []);

    function deleteMovie(id){
      const moviesFiltered = movies.filter(m => m.id !== id);
      console.log(id)
          setMovies(moviesFiltered);
          console.log(movies)
    }


    // const sortedMovies = [...created_movies].sort((stock1, stock2) => {
    //   if (sortBy === "asc") {
    //     return stock1.title(stock2.title);
    //   } else {
    //     return stock1.price - stock2.price;
    //   }
    // });
  return (
    <div className='movie-container'>
    <MoviesLists movies={movies} user={user} deleteMovie={deleteMovie} />
</div>
  )
}

export default MoviesContainer
