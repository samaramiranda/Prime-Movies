import getMovies from '../../services/getMovies';
import formatDate from '../../utils/formatDate';
import formatToHoursAndMinutes from '../../utils/formatToHoursAndMinutes';

import MovieRating from '../../components/MovieRating';

import {
  Container,
  Shadow,
  Informations,
  WrapperDetails,
  Details,
  Overview,
  OriginalTitle,
  Backdrop,
} from '../../styles/movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiMovieDetailsPath = process.env.NEXT_PUBLIC_API_MOVIE_DETAILS_PATH;
const apiMovieCreditsPath = process.env.NEXT_PUBLIC_API_MOVIE_CREDITS_PATH;
const apiImgPath = process.env.NEXT_PUBLIC_API_IMG_PATH;

export default function Movie({ movie, cast }) {
  const src = `${apiImgPath}w1280${movie.backdrop_path}`;

  const {
    title,
    vote_average: voteAverage,
    vote_count: voteCount,
    runtime,
    genres,
    release_date: releaseDate,
    overview,
    original_title: originalTitle,
  } = movie;

  console.log(movie);
  console.log(cast);

  const composeMovieGenres = () =>
    genres.map((genre, index) => (
      <p key={genre.id}>
        {index !== genres.length - 1 ? ` ${genre.name},` : genre.name}
      </p>
    ));

  return (
    <Container>
      <Shadow>
        <Informations>
          <h1>{title}</h1>

          <WrapperDetails>
            <Details isRating>
              <MovieRating voteAverage={voteAverage} />
              <p>/</p>
              <p>{voteCount}</p>
            </Details>

            <Details>
              <p>{formatToHoursAndMinutes(runtime)}</p>
              <p>•</p>
              {composeMovieGenres()}
              <p>•</p>
              <p>{formatDate(releaseDate, 'yyyy')}</p>
            </Details>
          </WrapperDetails>

          <Overview>{overview}</Overview>

          <OriginalTitle>Titulo original: {originalTitle}</OriginalTitle>
        </Informations>
      </Shadow>

      <Backdrop backdropUrl={src} />
    </Container>
  );
}

export const getStaticPaths = async () => ({
  paths: [
    {
      params: {
        id: '1',
      },
    },
  ],
  fallback: 'blocking',
});

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const movieUrl = `${apiMovieDetailsPath}${id}?api_key=${apiKey}&${apiLanguage}`;
  const movieCreditsUrl = `${apiMovieDetailsPath}${id}/${apiMovieCreditsPath}?api_key=${apiKey}&${apiLanguage}`;
  const movie = await getMovies(movieUrl);
  const movieCredits = await getMovies(movieCreditsUrl);

  return {
    props: {
      movie,
      cast: movieCredits.cast,
    },
    revalidate: 300,
  };
};
