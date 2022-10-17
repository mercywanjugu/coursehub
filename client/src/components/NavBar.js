//import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Movie App</Link>
      </Logo>
      <Nav>
        <Welcome>
      Signed in as: <a href="/profile">{user.username}</a>
      </Welcome>
      
      <Button as={Link} to="/movies">
        Movies
        </Button> 
        
        {(user.role === "admin") ? (<Button as={Link} to="/movies/new">
          New Movie
        </Button>) : null }
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Welcome = styled.h5`
	text-transform: uppercase;
`

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
