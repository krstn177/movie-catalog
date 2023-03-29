import { Routes, Route } from 'react-router-dom';

import { MovieProvider } from './contexts/MovieContext';
import { AuthProvider } from './contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Header }  from './components/Header/Header';
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
import { RouteGuard } from './components/Guards/RouteGuard';
import { OwnershipGuard } from './components/Guards/OwnershipGuard'; 


function App() {        
  return (
    <AuthProvider>
      <MovieProvider>
        <div>
          <Header />
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/catalog' element={<MovieCatalog />} />
              <Route path='/catalog/:movieId' element={<MovieDetails />} />

              <Route element={<RouteGuard />}>
                <Route path='/create' element={<CreateMovie />} />
                <Route element={<OwnershipGuard />}>
                  <Route path='/catalog/:movieId/edit' element={<EditMovie />} />
                </Route>

                <Route path='/logout' element={<Logout />} />
                <Route path='/myMovies' element={<UserMovies />} />
              </Route>
            </Routes>
          </main>               
          <Footer />     
        </div>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;
