import { Container } from './styles';

export default function MovieCard({ movie }) {
  return (
    <Container>
      <p>{movie.title}</p>
    </Container>
  );
}
