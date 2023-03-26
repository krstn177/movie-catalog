import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/movies';

export const movieServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const movies = Object.values(result);
    
        return movies;
    };

    const getUserMovies = async (userId) => {
        const result = await request.get(`${baseUrl}/?where=_ownerId${encodeURIComponent('='+`"${userId}"`)}`);
        const movies = Object.values(result);
        console.log(movies);
    
        return movies;
    };

    const getTop = async () => {
        const result = await request.get(baseUrl);
        const movies = Object.values(result).slice(-3);
        
        return movies;
    };
    
    const getOne = async (movieId) => {
        const result = await request.get(`${baseUrl}/${movieId}`);
    
        return result;
    };
    
    const create = async (movieData) => {
        const result = await request.post(baseUrl, movieData);
    
        console.log(result);
    
        return result;
    };
    
    const addReview= async (movieId, data) => {
        console.log(movieId);
        console.log(data);
        const movie = await getOne(movieId);
        if (movie.reviews) {
            for (const review of movie.reviews) {
                if (review._ownerId === data._ownerId) {
                    console.log("Cannot review twice");
                    return;
                }
            }
        }

        const result = await request.post(`${baseUrl}/${movieId}/reviews`, data);
    
        return result;
    };

    const edit = (movieId, data) => request.put(`${baseUrl}/${movieId}`, data);

    const deleteMovie = (movieId) => request.delete(`${baseUrl}/${movieId}`);


    return {
        getAll,
        getOne,
        getUserMovies,
        getTop,
        create,
        edit,
        addReview,
        delete: deleteMovie,
    };
}