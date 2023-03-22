import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/movies';

export const movieServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const movies = Object.values(result);
    
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
    
    const addComment = async (movieId, data) => {
        const result = await request.post(`${baseUrl}/${movieId}/comments`, data);
    
        return result;
    };

    const edit = (movieId, data) => request.put(`${baseUrl}/${movieId}`, data);

    const deleteMovie = (movieId) => request.delete(`${baseUrl}/${movieId}`);


    return {
        getAll,
        getOne,
        getTop,
        create,
        edit,
        addComment,
        delete: deleteMovie,
    };
}