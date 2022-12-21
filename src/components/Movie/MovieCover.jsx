import { MovieImage } from "./styles";

function MovieCover(props) {
  const { onClick, imageUrl, movieId } = props;

  return (
    <MovieImage
      onClick={onClick}
      imageUrl={imageUrl}
      movieId={movieId}
    />
  );
}

export { MovieCover };
