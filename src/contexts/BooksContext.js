import React, {createContext, useState, useReducer, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { booksReducer } from '../reducers/booksReducer';

export const BooksContext = createContext();




const BooksContextProvider = (props) => {

    const [books, dispatch] = useReducer(booksReducer, [], ()=> {
        const localData = localStorage.getItem('books');
        return localData? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    return (
        
        <BooksContext.Provider value={{ books, dispatch}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider

