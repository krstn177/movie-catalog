import Carousel from 'react-bootstrap/Carousel';
import './TopMovies.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useMovieContext } from '../../../contexts/MovieContext';

export const TopMovies = () => {
  const { topMovies } = useMovieContext();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>{topMovies.length === 0 && 
        <div className="sectionContainer">
            <h1 className='title sectionTitle'>See the latest movies fresh from the cinemas</h1>
            <h2 className='title sectionTitle'>And review them if you like</h2>
        </div>}
      {
        topMovies.length !== 0 &&
        <>
          <h1 className='title bg-dark pt-4'>Latest Movies</h1>
          <Carousel className="bg-dark pt-4" activeIndex={index} onSelect={handleSelect}>
            {topMovies.map(x => {
              const movie = {};
              movie._id = x._id;
              movie.title = x.title;
              movie.subTitle = x.subTitle;
              movie.ImageUrl = x.ImageUrl;
              return(
                <Carousel.Item className="cardWithOverlay" key={x._id} movie={movie}>
                    <div className="landingImg-container">
                      <img
                      className="d-block w-100 landingImg"
                      src={movie.ImageUrl}
                      alt="First slide"
                      />
                    </div>
                    <Carousel.Caption className="carouselCaption">
                        <h3>{movie.title}</h3>
                        <p>{movie.subTitle}</p>
                        <Link to={`catalog/${movie._id}`} className="detailsBtn">View</Link>
                    </Carousel.Caption>
                  </Carousel.Item>    
                ) 
              })}
          </Carousel>
        </>      
      }  
    </>
  );
}