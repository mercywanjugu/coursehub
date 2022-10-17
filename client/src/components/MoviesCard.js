import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
 import WatchlistForm from "./WatchlistForm"
//import EditMovie from "./EditMovie"
import Watchlistlists from "./Watchlistlists"
import "./styles.css"
import YoutubeEmbed from "./YoutubeEmbed"

function MoviesCard({movie, deleteMovie, user}) {
    const {id} = useParams()
    const location = useLocation()
    const [movieObj, setMovieObj] = useState(null);
    const [edit, setEdit] = useState(false);
    const history = useHistory()
    const [watchlists, setWatchlists] = useState(movie?.watchlists)
console.log(movie)
    useEffect(() => {   
        if (!movie) {
            fetch(`/api/movies/${id}`)
            .then(resp => resp.json())
            .then(movie => {
                console.log(movie)
              setMovieObj(movie)
              setWatchlists(movie.watchlists)
            })
        }
    }, [movie, id]);

  //   const handleUpdate = () => {
  //       setEdit(true)
  // }

     const addNewWatchlist = (watchlistObj) => {
         setWatchlists((currentWatchlists) => [watchlistObj, ...currentWatchlists])
     }

    const finalMovie = movie ? movie : movieObj
    if (!finalMovie) return <h1>Loading...</h1>

    function handleDelete() {
        fetch(`/api/movies/${finalMovie.id}`, {
          method: "DELETE",
        })
          .then(() => {
          deleteMovie(finalMovie.id)
          history.push("/movies")
    
            
      })
    }
  return (
    <div className="movie-card">
       
         {finalMovie.image_url ? <YoutubeEmbed embedId={finalMovie.image_url} alt="Something went wrong" /> : null}
         {/* <h4> view:{finalMovie.view}</h4> */}
         <h4>Title: <Link style= {{textDecoration: "none", color: "black"}} to={`/movies/${finalMovie.id}`}>{finalMovie.title}</Link></h4>
        
         
         {user?.role === "admin" ?
         <>
          <button name="delete" id="delete-btn" onClick={handleDelete}>Delete</button>
         {location.pathname !== "/movies" ? <>
        
         <Link to={`/movies/${finalMovie.id}/edit`}> 
         <button name="edit" id="edit-btn" onClick={() => setEdit(edit)}>Edit</button></Link>
        
         </> :null} 
         </> : null}
         {location.pathname !== "/movies" ? ( <>
         <h3>Comments:  </h3>
         <WatchlistForm movieId={finalMovie.id} addNewWatchlist={addNewWatchlist} />
         
         {/* <ul>{finalMovie.comments.map((comment) => (
             <li>
                 <h5>Rating: {comment.rating}</h5>
                 <h5>Comment: {comment.comment}</h5>
             </li>
         ))}
         </ul> */}
         <Watchlistlists watchlists={watchlists} />
         </> ): null }
        
    </div>
  )

}
export default MoviesCard;      