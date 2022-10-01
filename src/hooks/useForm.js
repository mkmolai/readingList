import React, { useState, useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const useForm = () => {

    const {dispatch} = useContext(BooksContext);

    const [book, setBook] = useState({
        title: '',
        author: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log('name is: ' + name)
        setBook({
            ...book,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(book.title === '' || book.author === '')
        {
            return ''
        }
        else{
            dispatch({type: 'ADD_BOOK', book})
    
            setBook({
                title: '',
                author: ''
            })
        }
    }
    
    return {book, handleChange, setBook, handleSubmit}
}

export default useForm
