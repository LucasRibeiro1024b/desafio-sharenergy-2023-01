import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: var(--dark-orange);
    text-align: center;
    width: 100%;
    height: 100px;
    line-height: 100px;

    @media screen and (max-width: 500px) {
        h2{
            display: none;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h2{
            font-size: 3vw;
            margin-left: 1vw;
        }   
    }
`

export const NavbarLink = styled(Link)`
    color: black;
    font-size: x-large;
    font-family: "Viga";
    text-decoration: none;
    margin: 10px;
    :hover{
        color: var(--peach-puff);
    }
    :focus{
        color: var(--peach-puff);
    }
    :active{
        color: var(--peach-puff);
    }

    @media screen and (max-width: 500px) {
        font-size: 4vw;
        margin: 2px;
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        font-size: 2.4vw;        
    }

`