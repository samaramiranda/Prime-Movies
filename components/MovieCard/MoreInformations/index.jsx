import Rating from '../Rating';

import { Container, Overview, WrapperDetails } from './styles';

export default function MoreInformations({ movie }) {
  return (
    <Container>
      <h4>{movie.title}</h4>
      <Overview>{movie.overview}</Overview>

      <WrapperDetails>
        <Rating movie={movie} />
        <p>{movie.release_date}</p>
      </WrapperDetails>
    </Container>
  );
}
