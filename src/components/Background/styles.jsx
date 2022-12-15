import styled from "styled-components";
import backgroundImage from "../../images/movies-BG.png"



const Background = styled.div`
background-image: url(${backgroundImage});
overflow: hidden;
background-size: cover;
position: absolute;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.8;



`
export {Background}