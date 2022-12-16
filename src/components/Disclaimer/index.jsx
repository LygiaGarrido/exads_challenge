import { DisclaimerContainer, DisclaimerText } from "./styles";

function Disclaimers(props) {
  const { textPrivacy, textTerms } = props;

  return (
    <DisclaimerContainer>
      <DisclaimerText>{textPrivacy}</DisclaimerText>
      <DisclaimerText>{textTerms}</DisclaimerText>
    </DisclaimerContainer>
  );
}

export { Disclaimers };
