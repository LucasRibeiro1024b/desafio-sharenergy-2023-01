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

    @media screen and (max-width: 500px) {
        h1{
            font-size: 5vw;
            margin: 5vw 0;
        }
        h4{
            font-size: 5vw;
        }
        img{
            width: 90vw;
            height: 50vh;      
        }
        input{
            width: 50vw;
            height: 5vh;
            font-size: 5vw;
            margin-bottom: 6vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h1{
            font-size: 4vw;
            margin: 5vw 0;
        }
        h4{
            font-size: 5vw;
        }
        img{
            width: 80vw;
            height: 55vh;      
        }
        input{
            width: 50vw;
            height: 5vh;
            font-size: 3vw;
            margin-bottom: 4vw;
        }       
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        h1{
            font-size: 3vw;
            margin: 4vw 0;
        }
        h4{
            font-size: 5vw;
        }
        img{
            width: 70vw;
            height: 60vh;      
        }
        input{
            width: 50vw;
            height: 5vh;
            font-size: 2vw;
            margin-bottom: 4vw;
        } 
    }
`