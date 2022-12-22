import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  width: 45vw;
  height: 40vh;
  border: 10px solid #61D6B6;
  border-radius: 10px;
  background-color: #fff;
  padding: 2%;
  margin-top:150px;

  @media (max-width: 850px){
    width: 85%;
    }
`;

const Title = styled.h1`
font-family: 'Roboto';
font-weight: 700;
font-size: 32px;
line-height: 38px;
text-align: center;
text-transform: uppercase;
color: #22DAA8;
margin-top:10px;

@media (max-width: 850px){
font-size:18px;
line-height: 20px;
}
`

const CardText = styled.h2`
font-family: 'Roboto';
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #081F44;
margin-top: 15px;
padding: 10px;
@media (max-width: 850px){
  font-size:16px;
  line-height: 18px;
  }

`

const CTAButton = styled.a`
text-decoration: none;
font-family: 'Roboto';
font-weight: 700;
font-size: 32px;
line-height: 38px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);


background-color: #EC5632;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
width:90%;
padding-top:3%;
padding-bottom:3%;
border: none;
margin-top:20px;

&:hover{
    cursor: pointer;
    background-color:#d44d2d;
}

@media (max-width: 850px){
  font-size:18px;
 
  }
`

export {CardContainer, Title, CardText, CTAButton}
