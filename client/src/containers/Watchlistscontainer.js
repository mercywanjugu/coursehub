import {useState, useEffect} from 'react'
import Watchlistlists from '../components/Watchlistlists';

function Watchlistscontainer() {
    const [watchlists, setwatchlists] = useState([]);

    useEffect(() => {

        fetch("/api/watchlists")
        .then(r => r.json())
        .then(data => setwatchlists(data.data.map(w => w.attributes)))
        .catch(err => alert(err))  
    }, []);
  return (
    <div>Watchlistscontainer</div>
  )
}

export default Watchlistscontainer