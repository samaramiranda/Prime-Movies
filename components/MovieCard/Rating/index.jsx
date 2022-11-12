import { Container, IconRating } from './styles';

export default function Rating({ movie }) {
  return (
    <Container>
      <IconRating />
      <p>{movie.vote_average}</p>
    </Container>
  );
}
