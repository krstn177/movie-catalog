import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErros] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const authFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'email' && (value.length < 3 || value.length > 20)) {
            errors.email = 'Email should be between 3 and 50 characters';
        } 

        if (e.target.name === 'username' && (value.length < 3 || value.length > 20)) {
            errors.username = 'Username should be between 3 and 20 characters';
        }

        if (e.target.name === 'password' && (value.length < 3 || value.length > 20)) {
            errors.password = 'Password should be between 3 and 20 characters';
        }

        setFormErros(errors);
    };

    const reviewFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'description' && (value.length < 3 || value.length > 50)) {
            errors.description = 'Description should be between 3 and 50 characters';
        }        

        setFormErros(errors);
    };

    const movieFormValidate = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'title' && (value.length < 3 || value.length > 20)) {
            errors.title = 'The title should be between 3 and 20 characters';
        } 

        if (e.target.name === 'subTitle' && (value.length < 3 || value.length > 20)) {
            errors.subTitle = 'The sub title should be between 3 and 20 characters';
        }

        if (e.target.name === 'description' && (value.length < 10 || value.length > 60)) {
            errors.description = 'Description should be between 10 and 60 characters';
        }

        if (e.target.name === 'Director' && (value.length < 3 || value.length > 20)) {
            errors.Director = 'Director should be between 3 and 20 characters';
        }

        if (e.target.name === 'Cast' && (value.length < 10 || value.length > 60)) {
            errors.Cast = 'The cast should be between 10 and 60 characters';
        }

        if (e.target.name === 'ImageUrl' && (value.length == 0)) {
            errors.ImageUrl = 'The image URL is required';
        }

        if (e.target.name === 'TrailerUrl' && (value.length == 0)) {
            errors.TrailerUrl = 'The trailer URL is required';
        }

        setFormErros(errors);
    };

    const onSubmit = (e) => {
        e.preventDefault();

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