import { CardContainer, Title, CardText, CTAButton } from "./styles";

function Card(props) {
  const { href } = props;
  return (
    <CardContainer>
      <Title>Watch new movies for free!</Title>
      <CardText>Watch any movies online for free without ads!</CardText>
      <CardText>Have fun watching your favorite movies!</CardText>

      <CTAButton href={href}>Watch here!</CTAButton>
    </CardContainer>
  );
}

export { Card };
