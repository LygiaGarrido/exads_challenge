import { LogoContainer, LogoText } from "./styles";

function Logo(props){

    const {text} = props

    return (
       
        <LogoContainer>
            <LogoText>{text}</LogoText>
        </LogoContainer>
      
    )
}

export {Logo};