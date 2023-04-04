import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const authFormValidate = (e) => {
        const value = e.target.value;

        if (e.target.name === 'email') {
            if (value.length < 3 || value.length > 20) {
                setFormErrors(state => ({ ...state, email: 'Email should be between 3 and 20 characters' }));
                console.log(formErrors);
            }
            else{
                setFormErrors(state => ({ ...state, email: null }));
            }
        } 

        if (e.target.name === 'username') {
            if(value.length < 3 || value.length > 20) {
                setFormErrors(state => ({ ...state, username : 'Username should be between 3 and 20 characters'}));
                console.log(formErrors);
            }
            else{
                setFormErrors(state => ({ ...state, username: null }));
            }
        }

        if (e.target.name === 'password'){ 
            if(value.length < 3 || value.length > 20) {
                setFormErrors(state => ({ ...state, password : 'Password should be between 3 and 20 characters'}));
                console.log(formErrors);
            }
            else{
                setFormErrors(state => ({ ...state, password: null }));
            }
        }

        if (e.target.name === 'confirmPassword'){  
            if (value !== values.password) {
                setFormErrors(state => ({ ...state, confirmPassword: 'Password and Repeat password do not match'}));
                console.log(formErrors);
            }
            else {
                setFormErrors(state => ({ ...state, confirmPassword: null}));
                console.log(formErrors);
            }
        }       
    };

    const reviewFormValidate = (e) => {
        const value = e.target.value;

        if (e.target.name === 'description'){
            if (value.length < 3 || value.length > 200) {
                setFormErrors(state => ({ ...state, description: 'The description should be between 3 and 200 characters' }));
                console.log(formErrors);
            } else{
                setFormErrors(state => ({ ...state, description: null }));
            } 
        }        
    };

    const movieFormValidate = (e) => {
        const value = e.target.value;

        if (e.target.name === 'title')  {

            if(value.length < 3 || value.length > 20) {
                setFormErrors(state => ({ ...state, title: 'The title should be between 3 and 20 characters' }));
                console.log(formErrors);
            } else{
                setFormErrors(state => ({ ...state, title: null }));
            }          
        }

        if (e.target.name === 'subTitle'){ 
            if (value.length < 3 || value.length > 40){
                setFormErrors(state => ({ ...state, subTitle: 'The sub title should be between 3 and 40 characters' }));
            } else{
                setFormErrors(state => ({ ...state, subTitle: null }));
            } 
        }

        if (e.target.name === 'Description'){
            if (value.length < 10 || value.length > 200) {
                setFormErrors(state => ({ ...state, Description: 'The description should be between 10 and 200 characters' }));
            } else{
                setFormErrors(state => ({ ...state, Description: null }));
            } 
        }

        if (e.target.name === 'Director'){
            if (value.length < 3 || value.length > 30) {
                setFormErrors(state => ({ ...state, Director: 'The director name should be between 3 and 30 characters' }));
            } else{
                setFormErrors(state => ({ ...state, Director: null }));
            }
        }

        if (e.target.name === 'Cast'){
            if(value.length < 10 || value.length > 100) {
                setFormErrors(state => ({ ...state, Cast: 'The cast name should be between 10 and 100 characters' }));
            } else{
                setFormErrors(state => ({ ...state, Cast: null }));
            }
        }

        if (e.target.name === 'Year'){
            if(value < 1900 || value > 2050) {
                setFormErrors(state => ({ ...state, Year: 'The year should be between 1900 and 2050 characters' }));
            } else{
                setFormErrors(state => ({ ...state, Year: null }));
            }
        }

        if (e.target.name === 'ImageUrl'){
            if(value.length === 0) {
                setFormErrors(state => ({ ...state, ImageUrl: 'The image URL is required' }));
            } else{
                setFormErrors(state => ({ ...state, ImageUrl: null }));
            }
        }

        if (e.target.name === 'TrailerUrl'){ 
            if(value.length === 0) {
                setFormErrors(state => ({ ...state, TrailerUrl: 'The trailer URL is required' }));
            } else{
                setFormErrors(state => ({ ...state, TrailerUrl: null }));
            }
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        for (const err of Object.values(formErrors)) {
            if (err) {  
                console.log(err);          
                return;
            }
        }
        onSubmitHandler(values);          
        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        const result = { 
            ...newValues,                  
            TrailerUrl: `https://www.youtube.com/watch?v=${newValues.TrailerUrl}`,       
        }

        setValues(result);
    };
    

    return {
        values,
        formErrors,
        authFormValidate,
        reviewFormValidate,
        movieFormValidate,
        changeHandler,
        onSubmit,
        changeValues,
    };
};