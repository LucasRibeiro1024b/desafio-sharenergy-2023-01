import styled from "styled-components"

export const ClientsListPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        font-size: 1.5vw;
    }
`

export const ClientsContainer = styled.div`
    width: 99%;
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    margin-bottom: 2vw;
    justify-content: center;
    align-items:center;
    text-align: center;
`

export const CreateClientButton = styled.button`    
    width: 10vw;
    height: 2vw;
    margin-top: 0.7vw;
    margin-bottom: 0.4vw;
    font-size: 1vw;
    font-weight: bold;
    background-color: var(--dark-orange);
    border-radius: 15px 20px 15px 20px;
    border: solid 2px var(--burly-wood);
    :hover{
        transform: scale(1.2);
        transition: all 0.5s;
    }
`