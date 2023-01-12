import styled from 'styled-components'

export const HomepageContainer = styled.div`
    text-align: center;

    h4{
        font-size: 1.5vw;
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
    text-align: center;
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
        }
    }    
`
