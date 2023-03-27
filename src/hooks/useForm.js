import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
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
        changeHandler,
        onSubmit,
        changeValues,
    };
};