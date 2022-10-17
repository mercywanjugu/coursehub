import {useState} from 'react'
 import {useHistory} from "react-router-dom"

function WatchlistForm({movieId, addNewWatchlist}) {
    const [watchlist, setWatchlist] = useState({
        rating: "",
        comment: "",
    });

    const history = useHistory()

    const handleChange = (e) => {
        setWatchlist({
            ...watchlist,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([watchlist.rating, watchlist.comment].some(val => val.trim() === "")) {
            alert("you must fill in all the information please!")
        }

        fetch(`/api/movies/${movieId}/watchlists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watchlist)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json()
                .then(watchlist => {
                    
                    addNewWatchlist(watchlist)

                    setWatchlist({rating: "", comment: ""})
                    history.push('/movies')
                })
            } else {
                resp.json()
                .then(errorObj => {
                    alert(errorObj.errors.join(". "))
                    //setWatchlist({rating: "", comment: ""})
                })
            }
        })
        .catch(err => alert(err))
    }
  return (
    <div>
        <h4> Create a new comment</h4>
        <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating</label>
                <input onChange={handleChange} type="number" name="rating" value={watchlist.rating} required/><br />
                <label htmlFor="comment">Comment</label>
                <input onChange={handleChange} type="text" name="comment" value={watchlist.comment} required/><br />
                <input type="submit" value="Create Watchlist" />
        </form>
    </div>
  )
}

export default WatchlistForm