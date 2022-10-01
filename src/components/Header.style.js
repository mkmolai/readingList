import styled from 'styled-components';

export const Header = styled.div`
    
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
    background: rgba(255, 255, 255, .1);
    margin: 10px 10px;
    border-radius: 5px;
    padding: 10px 5px;
`
export const HeaderText = styled.h1`
    color: aliceblue;
    opacity: .8;
    border-bottom 1px solid rgba(255, 255, 255, .2);
    padding-bottom: 20px;
`
export const HeaderBrief = styled.h5`
    color: white;
    opacity: .8;
    margin-top: 20px;
    padding-bottom: ${(props) => props.pb}px;
`
