import { useState } from 'react';

import Rating from './Rating';
import MoreInformations from './MoreInformations';
import noImage from '../../public/images/no_image.png';

import { Container, Poster, WrapperInformations, Informations } from './styles';

const imgPath = process.env.NEXT_PUBLIC_IMG_PATH;

export default function MovieCard({ movie }) {
  const [src, setSrc] = useState(`${imgPath}${movie.poster_path}`);

  return (
    <Container>
      <Poster
        src={src}
        alt="Poster do Filme"
        width={189}
        height={284}
        onError={() => setSrc(noImage)}
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
