import React from 'react'
import MoviesCard from './MoviesCard'

function MoviesLists({movies, deleteMovie, user}) {
    const renderMovies = movies?.map(movie => <MoviesCard key={movie.id} movie={movie} user=
    {user} deleteMovie={deleteMovie}/>)
    //console.log(movies)
    //console.log(renderMovies)
  return (
    <div>{renderMovies}</div>
  )
}

export default MoviesLists;