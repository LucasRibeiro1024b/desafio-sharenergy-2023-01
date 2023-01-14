import styled from "styled-components"

export const EditClientContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        font-size: 1.5vw;
    }

    form{
        display: flex;
        flex-direction: column;
    }

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

