import Rating from '../Rating';
import formatDate from '../../../utils/formatDate';

import { Container, Overview, WrapperDetails } from './styles';

export default function MoreInformations({ movie }) {
  return (
    <Container>
      <h5>{movie.title}</h5>
      <Overview>{movie.overview}</Overview>

      <WrapperDetails>
        <Rating movie={movie} />
        <p>{formatDate(movie.release_date, 'yyyy')}</p>
      </WrapperDetails>
    </Container>
  );
}
