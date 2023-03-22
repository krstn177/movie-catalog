import './LandingHero.css';
import { Link } from "react-router-dom";

export const LandingHero = () => {
    return (
        <header>          
            <div className="hero">
                <h1>Welcome to the movie catalog</h1>
                <p className="subtitle">See the latest movies</p>
                <p className="desc mb-5">You can comment on what is your favorite movie</p>               
                <Link to='/catalog' className="explore">Browse catalog</Link>
            </div>
        </header>
    );
}