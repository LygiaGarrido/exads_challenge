import styled from "styled-components";
import backgroundImage from "../../images/movies-BG.png"



const Background = styled.div`
background-image: linear-gradient(rgba(0,0,0,0.7) 100%, rgba(225,225,225, 0.3) 100%), url(${backgroundImage});
overflow: hidden;
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`
export {Background}