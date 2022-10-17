import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import WatchlistCard from "./WatchlistCard"

function Watchlistlists({watchlists}) {
    const {movieId} = useParams()
    const [watchlistList, setWatchlistList] = useState(null)

    useEffect(() => {
        if (!watchlists) {
            fetch(`/api/movies/${movieId}/watchlists`)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json()
                    .then(watchlists => setWatchlistList(watchlists))
                } else {
                    resp.json()
                    .then(errorObj => (errorObj.error))
                }
            })
            .catch(error =>(error))
        }
    }, [movieId, watchlists])

    // if (!watchlists) return <h2>The data you tried to access does not exist!</h2>
    const finalWatchList = watchlists ? watchlists : watchlistList
    const renderWatchlists = finalWatchList?.map(watchlist => <WatchlistCard key={watchlist.id} watchlist={watchlist}/>)
  return (
    <div>{renderWatchlists}</div>
  )
}

export default Watchlistlists