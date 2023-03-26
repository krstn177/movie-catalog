import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Header.css';


export const Header = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
    <Navbar collapseOnSelect expand="lg" className="border-bottom border-light nav-bar bg-dark">
      <Container href="#">
        <Nav.Link>
          <Link className='navBrand' to="/">Movies</Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link className='navLink' to="/catalog">Catalog</Link>             
            </Nav.Link>
            {isAuthenticated &&(
              <>
                <Nav.Link href="#">
                  <Link className='navLink' to="/create">Register a movie</Link>             
                </Nav.Link>
                <Nav.Link href="#">
                  <Link className='navLink' to="/myMovies">My movies</Link>             
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated &&(
              <>
                <Nav.Link href="#">
                  <Link className='navLink' to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link className='navLink' to="/register">Register</Link>
                </Nav.Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Nav.Link href="#">
                  <span className='navLink'>Welcome, {username}</span>
                </Nav.Link>
                <Nav.Link href="#">
                <Link className='navLink' to="/logout">Logout</Link>
              </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}