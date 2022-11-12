import Informations from './Informations';
import MoreInformations from './MoreInformations';

import { Container, Poster } from './styles';

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

      <Informations movie={movie} />

      <MoreInformations movie={movie} />
    </Container>
  );
}
