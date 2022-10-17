import {useState, useEffect} from 'react'
import {useHistory, useParams, Redirect} from "react-router-dom"

function EditMovie({movieObj, handleUpdate, movie, user}) {
    const [editMovieObj, setEditMovieObj] = useState(movieObj)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {   
        if (!movieObj) {
            fetch(`/api/movies/${id}`)
            .then(resp => resp.json())
            .then(movie => {
              setEditMovieObj(movie)
            })
        }
    }, [movieObj, id]);
    
    const handleChange = (e) => {
        setEditMovieObj({
            ...editMovieObj,
            [e.target.name]: e.target.value
        })
    }

    

        const handleSubmit = e => {
            e.preventDefault()
            const newMovie = {
                title: editMovieObj?.title,
                }
               fetch(`/api/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie)
        })
        .then(resp => {
            if (resp.status === 200) {
            resp.json()
            .then((updatedMovie) => {
    
                handleUpdate(updatedMovie)
            })
            .catch(error => console.log(error))
        }
        history.push("/movies")
        })
    }
    if (!user || user.role !== "admin") return <Redirect to="/movies"  />
    if (!editMovieObj) return <h4>loading...</h4>
return (
    <div>
        <h3>Edit Movie</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={editMovieObj.title} required/><br />
                <input type="submit" value="Update Movie" />
            </form>
    </div>
  )
}

export default EditMovie;