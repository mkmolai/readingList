import React from 'react';
import {BrowserRouter, Route, Link, useHistory} from 'react-router-dom';
import BooksContextProvider from './contexts/BooksContext';
import ReadingList from './screens/ReadingList';
import styled from 'styled-components'
import ViewBook from './screens/ViewBook';
import bg from './assets/texture.jpg'

const BudgetApp = () => {

const Body = styled.body`
    position: relative;
    width: 100vw; height: 100vh;
    max-height: 100vh;
    background: url(${bg});
    
    &:before{
        position: absolute; 
        content: '';
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: skyblue;
        mix-blend-mode: multiply;
        opacity: 0.3;
    }
    
    

    `
const Wrapper = styled.div`
    position: relative;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    background: dodgerblue;
    width: 40%; 
    text-align: center;
    border-radius: 5px;
    border: 3px solid rgba(0, 14, 90, .2);

    `

   


    return (
        <>
        
        
        <BooksContextProvider>
            <Body>
            <Wrapper>
                <BrowserRouter>
                    <Route  exact={true} path="/" component={ReadingList}/>
                    <Route  path="/:id" component={ViewBook}/>
                </BrowserRouter>
            </Wrapper>
            </Body>
        </BooksContextProvider>
          
        </>
    )
}

export default BudgetApp
