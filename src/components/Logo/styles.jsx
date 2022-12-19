import styled from "styled-components";

const LogoContainer = styled.div`
display: flex;
padding: 12px 20px;
gap: 10px;
margin-top: 40px;
width: 200px;
background: rgba(0, 0, 0, 0.6);
border: 2px solid rgba(199, 44, 60, 0.5);
border-radius: 4px;

`


const LogoText = styled.h1`
font-family: Roboto;
font-size:32px;
font-weight:700;
color:#C72C3C;
text-align:center;
opacity: 0.8;
`

export {LogoContainer, LogoText};