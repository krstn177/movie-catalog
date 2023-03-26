import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import styles from './EditMovie.module.css';
import RangeSlider from 'react-bootstrap-range-slider';



import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { movieServiceFactory } from "../../services/movieService";

export const EditMovie = ({
    onMovieEditSubmit
}) => {
    const { movieId } = useParams();
    const movieService = useService(movieServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        subTitle: '',
        Description: '',
        ImageUrl: '',
        TrailerUrl: '',
        Director: '',
        Genre: '',
        Cast: '',
        Duration: 90,
        Year: 2020
    }, onMovieEditSubmit);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                changeValues(result);
            });
    }, [movieId]);

    return(
    <div className={styles.createFormContainer}>
        <Form className={styles.createForm} onSubmit={onSubmit}>
            <h1 className={styles.createTitle}>Register a movie</h1>
            <Form.Group className="mb-3" controlId="title">
            <Form.Label className="h2">Title</Form.Label>
            <Form.Control name="title" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text"
                value={values.title}
                onChange={changeHandler}
            />         
            </Form.Group>

            <Form.Group className="mb-3" controlId="subTitle">
            <Form.Label className="h2">Sub Title</Form.Label>
            <Form.Control name="subTitle" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text"
                value={values.subTitle}
                onChange={changeHandler}
            />         
            </Form.Group>


            <Form.Group className="mb-3" controlId="Description">
            <Form.Label className="h2">Description</Form.Label>
            <Form.Control name="Description" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} as="textarea" rows={4} 
                value={values.Description}
                onChange={changeHandler}
            />         
            </Form.Group>


            <Form.Group className="mb-3" controlId="Director">
            <Form.Label className="h2">Director</Form.Label>
            <Form.Control name="Director" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text"
                value={values.Director}
                onChange={changeHandler}
            />         
            </Form.Group>

            <Form.Group className="mb-3" controlId="Genre">
            <Form.Label className="h2">Genre</Form.Label>
            <Form.Select aria-label='Select a genre' name="Genre" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} 
                value={values.Genre}
                onChange={changeHandler}
            >   
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Comedy">Comedy</option>


            </Form.Select>      
            </Form.Group>

            <Form.Group className="mb-3" controlId="Cast">
            <Form.Label className="h2">Cast</Form.Label>
            <Form.Control name="Cast" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text"
                value={values.Cast}
                onChange={changeHandler}
            />         
            </Form.Group>

            <Form.Group className="mb-3" controlId="Duration">
            <Form.Label className="h2">Duration</Form.Label>
            <RangeSlider 
                name="Duration"
                variant='dark'          
                value={values.Duration}
                onChange={changeHandler}
                min={1}
                max={300}
                step={1}
                size='lg'
                style={{width: '100%'}}
            />        
            </Form.Group>

            <Form.Group className="mb-5" controlId="Year">
            <Form.Label className="h2">Year</Form.Label>
            <Form.Control 
                name="Year"
                className="bg-dark" 
                style={{textAlign: 'center', color: '#e1b516'}} 
                type="number" min="1900" max="2050" step="1"
                value={values.Year}
                onChange={changeHandler}          
            />         
            </Form.Group>

            <Form.Group className="mb-3" controlId="ImageUrl">
            <Form.Label className="h2">Image URL</Form.Label>
            <Form.Control name="ImageUrl" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text" 
            value={values.ImageUrl}
            onChange={changeHandler}
            />         
            </Form.Group>

            <Form.Group className="mb-3" controlId="TrailerUrl">
            <Form.Label className="h2">Trailer URL</Form.Label>
            <Form.Control name="TrailerUrl" className="bg-dark" style={{textAlign: 'center', color: '#e1b516'}} type="text"
                value={values.TrailerUrl}
                onChange={changeHandler}
            />  
            <Form.Text className="text-muted">
                Please paste the YouTube link of the trailer
            </Form.Text>       
            </Form.Group>

            <button className={styles.createSubmitBtn} type="submit">
            Submit
            </button>
        </Form>
    </div>
    );
}