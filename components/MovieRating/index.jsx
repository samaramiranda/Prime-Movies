import { Container, IconRating } from './styles';

export default function MovieRating({ voteAverage }) {
  return (
    <Container>
      <IconRating />
      <p>{voteAverage}</p>
    </Container>
  );
}
