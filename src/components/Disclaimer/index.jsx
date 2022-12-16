import { DisclaimerContainer, DisclaimerText } from "./styles";

function Disclaimers(props){
    const {text1, text2} = props;


    return(
        <DisclaimerContainer>
            <DisclaimerText>{text1}</DisclaimerText>
            <DisclaimerText>{text2}</DisclaimerText>
        </DisclaimerContainer>
    )
}

export {Disclaimers};