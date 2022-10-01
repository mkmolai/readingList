import React, { useContext } from 'react'
import { List, ListItem, ItemText } from './ListItem.style.';
import {useHistory} from 'react-router-dom';
import { BooksContext } from '../contexts/BooksContext';

const BookList = ({className, bg}) => {

    const history = useHistory()
    const {books, dispatch} = useContext(BooksContext);

    const handleDelete = (id) => {
        dispatch({type: 'REMOVE_BOOK', id})
    }

    return books.length? 
    (
        <>
             <List className={className}>
                 {
                     books.map(book => 
                        <ListItem onClick={()=> handleDelete(book.id)}>
                            <ItemText fontSize={1.3}>{book.title}</ItemText>
                            <ItemText fontSize={1} base={true}>{book.author}</ItemText>
                        </ListItem>
                        )
                 }
            </List>
        </>
    ) 
    : 
    (
        <h5>There are no items in your list</h5>
    )
}

export default BookList
