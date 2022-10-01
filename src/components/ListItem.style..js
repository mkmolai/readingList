import styled from 'styled-components';

export const List = styled.div`
    
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
    margin: 5px 10px;
    background: none;
    
`
export const ListItem = styled.div`
    
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
    margin: 10px 0px;
    text-align: left;
    cursor: pointer;
    padding: 3px 5px;
    background: rgba(202, 202, 248, .5);


    &:hover{
        background: rgb(2, 120, 238);

        & h1{

            color: white;
        }
    }
    
`
export const ItemText = styled.h1`
    color: ${(props)=> props.base? 'white' : 'black'};
    font-size: ${(props) => props.fontSize}rem;
    line-height: 10px;
    margin: 10px 0;
`
