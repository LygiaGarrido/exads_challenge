import { MovieContainer, MovieCover } from "./styles";

function Movie(props) {

    const {onClick} = props;
  return (
    <MovieContainer>
      <MovieCover onClick={onClick}/>
      <MovieCover onClick={onClick} />
      <MovieCover onClick={onClick} />
    </MovieContainer>
  );
}

export { Movie };
