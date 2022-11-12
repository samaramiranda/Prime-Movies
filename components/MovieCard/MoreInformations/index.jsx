import Rating from '../Rating';

import { Container, Overview, WrapperDetails } from './styles';

export default function MoreInformations({ movie }) {
  return (
    <Container>
      <h5>{movie.title}</h5>
      <Overview>{movie.overview}</Overview>

      <WrapperDetails>
        <Rating movie={movie} />
        <p>{movie.release_date}</p>
      </WrapperDetails>
    </Container>
  );
}
