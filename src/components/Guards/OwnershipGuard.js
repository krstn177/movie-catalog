import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useMovieContext } from "../../contexts/MovieContext";

export const OwnershipGuard = () => {
    const { movieId } = useParams();
    const { getMovie } = useMovieContext();
    const { userId } = useAuthContext();

    const currentMovie = getMovie(movieId);

    if (currentMovie && currentMovie._ownerId !== userId) {
        return <Navigate to={`/catalog/${movieId}`} replace />
    }

    return <Outlet />;
};