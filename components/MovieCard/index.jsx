import { useState } from 'react';

import Link from 'next/link';

import Rating from './Rating';
import MoreInformations from './MoreInformations';
import noImage from '../../public/images/no_image.png';

import { Container, Poster, WrapperInformations, Informations } from './styles';

const apiImgPath = process.env.NEXT_PUBLIC_API_IMG_PATH;

export default function MovieCard({ movie }) {
  const [src, setSrc] = useState(`${apiImgPath}w500${movie.poster_path}`);

  return (
    <Link href={`movie/${movie.id}`}>
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
    </Link>
  );
}
