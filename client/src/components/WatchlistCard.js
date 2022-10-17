import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function WatchlistCard({watchlist}) {
    const {id} = useParams()
    const [watchlistObj, setWatchlistObj] = useState(null);
    useEffect(() => {   
        if (!watchlist) {
            fetch(`/api/watchlists/${id}`)
            .then(resp => resp.json())
            .then(watchlist => setWatchlistObj(watchlist))
        }
    }, [watchlist, id]);

    const finalWatchlist = watchlist ? watchlist : watchlistObj
    if (!finalWatchlist) return <h1>Loading...</h1>
  return (
    <div>
        <h4>Comment: {finalWatchlist.comment}</h4>
        <h4>Rating: {finalWatchlist.rating}</h4>
    </div>
  )
}

export default WatchlistCard