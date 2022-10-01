import React, {useState, useEffect, useContext, useRef} from 'react';
import {useParams} from 'react-router-dom'
import { BooksContext } from '../contexts/BooksContext';
import useForm from '../hooks/useForm';
import {useHistory} from 'react-router-dom'
import { HeaderText, Header } from '../components/Header.style';
import { Footer, FooterText } from '../components/Footer.style.';


const ViewBook = () => {

    const history = useHistory()
    

    return (
            <>
            <Header>
                <HeaderText>Harry Potter</HeaderText>
            </Header>
            <button onClick={()=> history.push('/')}>
                back
            </button>
            <Footer>
                <FooterText>LPI Creatives</FooterText>
            </Footer>
            </>
    ) 
}

export default ViewBook
