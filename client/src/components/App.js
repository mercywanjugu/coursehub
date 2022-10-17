import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import MovieForm from "./MovieForm";
import MoviesContainer from "../containers/MoviesContainer";
import MoviesCard from "./MoviesCard";
import EditMovie from "./EditMovie";
import Profile from "./Profile";



function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
           <Route path="/profile">
            <Profile user={user} />
          </Route> 
          <Route path="/movies/new">
            <MovieForm user={user} />
          </Route>
          <Route path="/movies/:id/edit">
            <EditMovie user={user}/>
          </Route>
          <Route path="/movies/:id">
            <MoviesCard user={user} />
          </Route>
          <Route path="/movies">
            <MoviesContainer user={user}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
