import Image from 'next/image';

import { Container } from './styles';

const imgPath = process.env.NEXT_PUBLIC_IMG_PATH;

export default function MovieCard({ movie }) {
  console.log(movie);

  return (
    <Container>
      <Image
        src={`${imgPath}${movie.poster_path}`}
        alt="Poster do Filme"
        width={189}
        height={284}
      />

      <p>{movie.title}</p>
    </Container>
  );
}
