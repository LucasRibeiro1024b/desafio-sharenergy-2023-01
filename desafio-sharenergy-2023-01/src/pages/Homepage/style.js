import styled from 'styled-components'

export const HomepageContainer = styled.div`
    text-align: center;

    form{
    display: flex;
    align-items: center;
    background-color: white;
    height: 56px;
    width: 328px;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    border: solid 1px var(--greyish);
    margin-bottom: 20px;
    font-size: 16px;

    img{
        max-width: 24px;
        min-height: 24px;
        margin-right: 10px;
    }

    input{
        font-family: 'Gothic A1';
        border: 0;
        font-size: 16px;
        height: 51px;
        width: 400px;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    }
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    
`

export const CardsContainer = styled.div`    
    display: grid;
    margin-left: 2vw;
    gap: 2vw;
    text-align: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
`