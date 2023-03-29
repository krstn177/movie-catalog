import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoIdSelect } from '../utils/VideoIdSelect';


import { movieServiceFactory } from '../services/movieService';

export const MovieContext = createContext();

export const MovieProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const movieService = movieServiceFactory();

    useEffect(()=>{
        movieService.getTop().then(result => {
          setTopMovies(result);
        })
        movieService.getAll()
              .then(result => {
                  setMovies(result);
        });
      }, []);


    const onCreateMovieSubmit = async (data) => {
        const newMovie = {...data};
        newMovie.TrailerUrl = VideoIdSelect(data.TrailerUrl);
           
        const createdMovie = await movieService.create(newMovie);
        console.log(createdMovie);
        setMovies(state => [...state, createdMovie]);
    
        navigate('/catalog');
    };

    const onMovieEditSubmit = async (edited) => {
        const newValue = {...edited};
        newValue.TrailerUrl = VideoIdSelect(edited.TrailerUrl);
        const result = await movieService.edit(newValue._id, newValue);
    
        setMovies(state => state.map(x => x._id === newValue._id ? result : x))
    
        navigate(`/catalog/${newValue._id}`);
    }

    const deleteMovie = (movieId) => {
        setMovies(state => state.filter(movie => movie._id !== movieId));
    };

    const getMovie = (movieId) => {
        return movies.find(movie => movie._id === movieId);
    };

    const contextValues = {
        movies,
        topMovies,
        onCreateMovieSubmit,
        onMovieEditSubmit,
        deleteMovie,
        getMovie,
    };

    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    return context;
};