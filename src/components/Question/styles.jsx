import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  width: 600px;
`;

const QuestionBoxContainer = styled.div`
  width: 220px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;

const QuestionBoxText = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #22daa8;
`;

const QuestionCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const QuestionCounter = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid #22daa8;
  margin: 5px;
  background-color: ${(props) => (props.status === true ? "#22daa8" : "#fff")};
`;

const QuestionText = styled.h2`
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-top: 32px;
`;
export {
  QuestionContainer,
  QuestionBoxContainer,
  QuestionBoxText,
  QuestionCounter,
  QuestionCounterContainer,
  QuestionText,
};
