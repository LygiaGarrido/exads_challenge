import styled from "styled-components";

const MovieContainer = styled.div`
display: flex;
height: 300px;
width:50%;
gap:50px;
justify-content: space-between;
align-self: center;
margin-top:100px;
`

const MovieImage = styled.div`
background-image: url(${props => props.imageUrl});
width: 220px;
border-radius: 4px;
background-size: cover;
transition: transform .2s;

&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
export {MovieContainer, MovieImage};