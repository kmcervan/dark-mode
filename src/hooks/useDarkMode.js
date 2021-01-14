import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue)=> {
    const [values, setValues] = useLocalStorage('darkMode', initialValue);

    // const handleChanges = e => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const clearForm = e => {
    //     e.preventDefault();
    //     setValues(initialValue);
    // };

    return ([values, setValues]);
}     
export default useDarkMode;