import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import { VideoIdSelect } from './utils/VideoIdSelect';
import { AuthProvider } from './contexts/AuthContext';

import { movieServiceFactory } from './services/movieService';

import 'bootstrap/dist/css/bootstrap.min.css';

import  { Header }  from './components/Header/Header';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { MovieCatalog } from './components/MovieCatalog/MovieCatalog';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { CreateMovie } from './components/CreateMovie/CreateMovie';
import { Logout } from './components/Auth/Logout';
import { EditMovie } from './components/EditMovie/EditMovie';
import { UserMovies } from './components/UserMovies/UserMovies';

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const movieService = movieServiceFactory(); //auth.accessToken

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
  

  return (
    <AuthProvider>
      <div>
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home movies={topMovies}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateMovie onCreateMovieSubmit={onCreateMovieSubmit} />} />
            <Route path='/catalog' element={<MovieCatalog movies={movies} />} />
            <Route path='/catalog/:movieId' element={<MovieDetails />} />
            <Route path='/catalog/:movieId/edit' element={<EditMovie onMovieEditSubmit={onMovieEditSubmit} />} />
            <Route path='/myMovies' element={<UserMovies />} />
          </Routes>
        </main>               
        <Footer />     
      </div>
    </AuthProvider>
  );
}

export default App;
