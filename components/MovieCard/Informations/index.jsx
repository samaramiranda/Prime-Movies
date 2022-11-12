import { Container, Rating, IconRating } from './styles';

export default function Informations({ movie }) {
  return (
    <Container>
      <h4>{movie.title}</h4>

      <Rating>
        <IconRating />
        <p>{movie.vote_average}</p>
      </Rating>
    </Container>
  );
}
