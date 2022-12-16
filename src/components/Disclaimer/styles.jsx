import styled from "styled-components";

const DisclaimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 2%;
  left: calc(50% - 187px / 2 + 0.5px);

  
`;
const DisclaimerText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #A9A9A9;
  padding-right: 20px;
  cursor: pointer;
`;

export { DisclaimerContainer, DisclaimerText };
