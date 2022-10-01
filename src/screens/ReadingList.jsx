import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { HeaderText, Header, HeaderBrief } from '../components/Header.style';
import { Footer } from '../components/Footer.style.';
import { StyledBookList } from '../components/Booklist.style';
import NewBookForm from '../components/NewBookForm';
import '../style/reading-list/readinglist.css';
import LPILogo from '../assets/LPILogo.png';


const ReadingList = () => {

    const {books} = useContext(BooksContext);
    

    return  (
            <>
            <Header>
                <HeaderText>Reading List</HeaderText>
                <HeaderBrief pb={20}>Currently you have {books.length} books to get through</HeaderBrief>
            </Header>
            
            <StyledBookList bg="magenta"/>

            <NewBookForm/>
            
            <Footer>
                <img src={LPILogo}/>
            </Footer>
            </>
    ) 
  
}

export default ReadingList
