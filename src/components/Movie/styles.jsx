import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  height: 300px;
  width: 50%;
  gap: 50px;
  justify-content: space-between;
  align-self: center;
  margin-top: 100px;

  @media (max-width: 1064px) {
    flex-direction: column;
    justify-content: center;
    height:67%;
    width: 40%;
    margin-top: 15px;
    margin-bottom: 20px;
    gap:3px;
  }

  @media (max-width: 850px){
    height:63%;
  }
`;

const MovieImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 210px;
  border-radius: 6px;
  background-size: cover;


  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(225,225,225,0.3) 70%, rgba(0,0,0, 0.7) 100%),url(${(props) => props.imageUrl});
  }

  @media (max-width: 1064px){
    height:100%;
    align-self: center;
    width:45%;

  }

  @media (max-width: 850px){
    width:100%;
  }
`;
export { MovieContainer, MovieImage };
