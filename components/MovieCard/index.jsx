import { Container, Poster, Details, Rating, IconRating } from './styles';

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

      <Details>
        <h4>{movie.title}</h4>

        <Rating>
          <IconRating />
          <p>{movie.vote_average}</p>
        </Rating>
      </Details>
    </Container>
  );
}
