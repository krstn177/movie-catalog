import Carousel from 'react-bootstrap/Carousel';
import './TopMovies.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const TopMovies = ({
  movies
}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className='title bg-dark pt-4'>Latest Movies</h1>
      <Carousel className="bg-dark pt-4" activeIndex={index} onSelect={handleSelect}>
        {movies.map(x => {
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
  );
}