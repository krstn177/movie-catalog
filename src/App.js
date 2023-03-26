import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import { VideoIdSelect } from './utils/VideoIdSelect';

import { movieServiceFactory } from './services/movieService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

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
  const [auth, setAuth] = useState({});
  const [topMovies, setTopMovies] = useState([]);


  const movieService = movieServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);


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

  const onLoginSubmit = async (data) => {
    try {
        const result = await authService.login(data);

        setAuth(result);

        navigate('/catalog');
    } catch (error) {
        console.log('There is a problem');
    }
  };

  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...registerData } = data;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try{
      const result = await authService.register(registerData);

      setAuth(result);

      navigate('/catalog');
    } catch(errror){
      console.log('There is a problem');
    }
  }

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const onMovieEditSubmit = async (edited) => {
    const newValue = {...edited};
    newValue.TrailerUrl = VideoIdSelect(edited.TrailerUrl);
    const result = await movieService.edit(newValue._id, newValue);

    setMovies(state => state.map(x => x._id === newValue._id ? result : x))

    navigate(`/catalog/${newValue._id}`);
  }

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.accessToken
  };

  return (
    <AuthContext.Provider value={contextValues}>
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
    </AuthContext.Provider>
  );
}

export default App;
