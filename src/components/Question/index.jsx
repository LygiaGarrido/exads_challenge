import {
  QuestionBoxContainer,
  QuestionContainer,
  QuestionBoxText,
  QuestionCounter,
  QuestionCounterContainer,
  QuestionText,
} from "./styles";

function Question() {
  const text = "Question 1 of 3:";

  const question = "Choose one of the three movies";

  return (
    <>
      <QuestionContainer>
        <QuestionBoxContainer>
          <QuestionBoxText>{text}</QuestionBoxText>
          <QuestionCounterContainer>
            <QuestionCounter />
            <QuestionCounter />
            <QuestionCounter />
          </QuestionCounterContainer>
        </QuestionBoxContainer>

        <QuestionText>{question}</QuestionText>
      </QuestionContainer>
    </>
  );
}

export { Question };
