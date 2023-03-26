import { useEffect, useState, useContext } from 'react';
import { movieServiceFactory } from '../../services/movieService';

import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

import Row from 'react-bootstrap/Row';

import './UserMovies.css';
import { CatalogCard } from '../CatalogCard/CatalogCard'; 

export const UserMovies = () => {
    const { userId } = useContext(AuthContext);
    const [userMovies, setUserMovies] = useState([]);
    const movieService = useService(movieServiceFactory);

    useEffect(() => {
        movieService.getUserMovies(userId)
            .then(result => {
                setUserMovies(result);
            })
    }, []);

    return (
        <div className="List bg-dark" style={{minHeight: "86vh"}}>
            {
                userMovies.length === 0 && <h1 className="text-white" style={{textAlign: "center"}}>There are no movies yet...</h1>
            }
            { userMovies.length !== 0 &&
                <Row style={{justifyContent: 'center', width: "60vw"}} xs={1} md={2} className="g-4 ">
                    {userMovies.map(x => <CatalogCard key={x._id} {...x} />)}
                </Row>
            }
        </div>
      );
}