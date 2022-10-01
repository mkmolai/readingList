import BookList from './BookList';
import styled from 'styled-components';

export const StyledBookList = styled(BookList)`
    
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
    background: rgba(255, 255, 255, .03);
    margin: 10px 10px;
    border-radius: 5px;
    padding: 10px 5px;
    max-height: 270px;
    overflow: hidden;
    overflow: scroll;
`