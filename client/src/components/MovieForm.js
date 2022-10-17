import {useState} from "react"
import {useHistory, Redirect} from "react-router-dom"


function MovieForm({user}) {
    const [movie, setMovie] = useState({
        title: "",
        image_url: "",
        genre: "",
        plot: "",
        total_time: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([movie.title, movie.image_url,movie.genre,movie.plot,movie.total_time].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }
        fetch("/api/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: movie.title, image_url: movie.image_url, genre: movie.genre, plot: movie.plot, total_time: movie.total_time})
        })
        .then((resp) => {
            if (resp.status === 201) {
                 history.push("/movies")
            } else {
                //debugger
             resp.json().then(errorObj =>(errorObj.error))
            }
        })
        .catch(err => (err.message))
     }
     if (!user || user.role !== "admin") return <Redirect to="/movies" />
  return (
    <div>
        <h3>Create a new movie</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={movie.title} required/><br />
                <label htmlFor="image_url">Video Url</label>
                <input onChange={handleChange} type="text" name="image_url" value={movie.image_url} required/><br />
                <label htmlFor="genre">Genre</label>
                <input onChange={handleChange} type="text" name="genre" value={movie.genre} required/><br />
                <label htmlFor="plot">Plot</label>
                <input onChange={handleChange} type="plot" name="plot" value={movie.plot} required/><br />
                <label htmlFor="total_time">Total Time</label>
                <input onChange={handleChange} type="total_time" name="total_time" value={movie.total_time} required/><br />
                <input type="submit" value="Create Movie" />
            </form>
    </div>
  )
}

export default MovieForm;