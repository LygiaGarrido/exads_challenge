import { useState } from "react";
import {
  QuestionBoxContainer,
  QuestionContainer,
  QuestionBoxText,
  QuestionCounter,
  QuestionCounterContainer,
  QuestionText,
} from "./styles";

function Question(props) {
  const { questionNumber } = props;

  const text = `Question ${questionNumber} of 3:`;

  const question1 = "Choose one of the three movies";
  const question2 = "Which one do you like the most?";
  const question3 = "Which one do you want to watch now?";

  const question =
    questionNumber === 1
      ? question1
      : questionNumber === 2
      ? question2
      : question3;

  const active = true;

  return (
    <>
      <QuestionContainer>
        <QuestionBoxContainer>
          <QuestionBoxText>{text}</QuestionBoxText>
          <QuestionCounterContainer>
            <QuestionCounter status={questionNumber === 1 ? active : !active} />
            <QuestionCounter status={questionNumber === 2 ? active : !active} />
            <QuestionCounter status={questionNumber === 3 ? active : !active} />
          </QuestionCounterContainer>
        </QuestionBoxContainer>

        <QuestionText>{question}</QuestionText>
      </QuestionContainer>
    </>
  );
}

export { Question };
