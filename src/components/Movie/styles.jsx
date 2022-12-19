import styled from "styled-components";
import batman from "../../images/movies/batman.png"


const MovieContainer = styled.div`
display: flex;
height: 300px;
width:50%;
gap:50px;
justify-content: space-between;
align-self: center;
margin-top:100px;
`

const MovieCover = styled.div`
background-image: url(${batman});
width: 220px;
border-radius: 4px;

&:hover{
    cursor: pointer;
}
`
export {MovieContainer, MovieCover};