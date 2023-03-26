import {requestFactory} from './requester';

const baseUrl = 'http://localhost:3030/data/reviews';

export const reviewServiceFactory = (token) =>{
    const request = requestFactory(token);

    const getAll = async (movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`);
    
        const result = await request.get(`${baseUrl}?where=${query}`);
        const reviews = Object.values(result);
    
        return reviews;
    };
    
    const create = async (data) => {
        console.log(data);

        
        // const all = await getAll(data.movieId);
       
        // if (all) {
        //     for (const review of all) {
        //         if (review._ownerId === data._ownerId) {
        //             console.log("Cannot review twice");
        //             return;
        //         }
        //     }
        // }
        console.log("before the disaster");
        const result = await request.post(baseUrl, data);
        console.log(result);
        return result;
    };

    return {
        getAll,
        create
    };

}