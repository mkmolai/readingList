import React, { useState, useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext';
import useForm from '../hooks/useForm';

const NewBookForm = () => {


    const {book, handleChange, handleSubmit} = useForm()

    return (
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    value={book.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    name="author"
                    type="text"
                    value={book.author}
                    placeholder="Author"
                    onChange={handleChange}
                />
                <button>Save book</button>
            </form>
   
    )    
}

export default NewBookForm
