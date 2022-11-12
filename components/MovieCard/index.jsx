import Informations from './Informations';
import MoreInformations from './MoreInformations';

import { Container, Poster, WrapperInformations } from './styles';

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
        <Informations movie={movie} />
        <MoreInformations movie={movie} />
      </WrapperInformations>
    </Container>
  );
}
