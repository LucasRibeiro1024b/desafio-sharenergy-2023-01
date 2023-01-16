import styled from 'styled-components'

export const HomepageContainer = styled.div`
    text-align: center;

    h4{
        font-size: 1.5vw;
    }

    @media screen and (max-width: 500px) {
        h1{
            font-size: 6vw;
            margin: 5vw 0;
        }
        h4{
            font-size: 5vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h1{
            font-size: 4.5vw;
            margin: 4vw 0;
        }
        h4{
            font-size: 4vw;
        }
    }

`

export const FormContainer = styled.div`
    input{
        font-family: 'Gothic A1';
        border: 0;
        font-size: 1vw;
        font-weight: bold;
        height: 2.3vw;
        width: 20vw;
        padding-left: 1vw;
        margin-bottom: 1.4vw;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    @media screen and (max-width: 500px) {
        input{
            font-size: 4vw;
            height: 4vh;
            width: 50vw;
            margin-bottom: 6vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        input{
            font-size: 3vw;            
            height: 4vh;
            width: 55vw;
            margin-bottom: 6vw;
        } 
    }
`

export const CardsContainer = styled.div`    
    display: grid;
    gap: 0.4vw;
    align-content: center;
    align-items:center;
    justify-items: center;
    text-align: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 500px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 3vw;
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;           
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr; 
    }
`

export const PaginationContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;

    button{
        width: 3vw;
        height: 2vw;
        font-size: 1vw;
        margin: 1.5vw 0.3vw;
        font-weight: bold;
        background-color: var(--dark-orange);
        border-radius: 15px 20px 15px 20px;
        border: solid 2px var(--burly-wood);
        text-align: center;

        :hover{
            transform: scale(1.2);
            transition: all 0.5s;
            color: var(--peach-puff);
        }
        :focus{
            color: var(--peach-puff);
        }
        :active{
            color: var(--peach-puff);
        }
    }

    @media screen and (max-width: 500px) {
        margin: 3vw 0;
        button{
            width: 6vw;
            height: 5vw;
            font-size: 3vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        margin: 2vw 0;
        button{
            width: 5vw;
            height: 4vw;
            font-size: 2.5vw;
        }
    }
`
