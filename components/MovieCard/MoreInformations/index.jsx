import Rating from '../Rating';
import formatDate from '../../../utils/formatDate';

import { Container, Overview, WrapperDetails, Date } from './styles';

export default function MoreInformations({ movie }) {
  return (
    <Container>
      <h4>{movie.title}</h4>
      <Overview>{movie.overview}</Overview>

      <WrapperDetails>
        <Rating movie={movie} />
        <Date>{formatDate(movie.release_date, 'yyyy')}</Date>
      </WrapperDetails>
    </Container>
  );
}
