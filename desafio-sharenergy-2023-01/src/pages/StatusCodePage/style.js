import styled from "styled-components"

export const StatusCodePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        width: 35vw;
        height: 60vh;
        border-radius: 10%;        
    }

    label{
        font-family: 'Gothic A1';
        font-size: 1.5vw;
        margin-bottom: 1vw;
    }

    input{
        font-family: 'Gothic A1';
        border: 0;
        font-size: 1vw;
        font-weight: bold;
        height: 2.3vw;
        width: 11vw;
        padding-left: 1vw;
        margin-bottom: 1.4vw;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }    

    h4{
        font-size: 1.5vw;
    }   

    h1{
        margin-bottom: 1vw;
    }
`