import { TopMovies } from './TopMovies/TopMovies';
import { LandingHero } from './LandingHero/LandingHero';

export const Home = ({
    movies
}) => {
    return(
        <>
            <LandingHero />
            <TopMovies movies={movies}/>
        </>
    )
}