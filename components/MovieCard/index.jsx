import Rating from './Rating';
import MoreInformations from './MoreInformations';

import { Container, Poster, WrapperInformations, Informations } from './styles';

const imgPath = process.env.NEXT_PUBLIC_IMG_PATH;

export default function MovieCard({ movie }) {
  console.log(movie);

  return (
    <Container>
      <Poster
        src={`${imgPath}${movie.poster_path}`}
        alt="Poster do Filme"
        width={189}
        height={284}
      />

      <WrapperInformations>
        <Informations>
          <h4>{movie.title}</h4>
          <Rating movie={movie} />
        </Informations>

        <MoreInformations movie={movie} />
      </WrapperInformations>
    </Container>
  );
}
