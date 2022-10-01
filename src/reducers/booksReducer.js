import { v4 as uuidv4 } from 'uuid';

export const booksReducer = (state, action) => 
{
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.book.title,
                    author: action.book.author,
                }
            ]
        case 'REMOVE_BOOK':
 
            return state.filter(x => x.id !== action.id) 
    
        default:
            return state
    }
}