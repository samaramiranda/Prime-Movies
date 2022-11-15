import getMovieData from '../../services/getMovieData';
import formatDate from '../../utils/formatDate';
import formatToHoursAndMinutes from '../../utils/formatToHoursAndMinutes';

import MovieRating from '../../components/MovieRating';

import {
  Container,
  WrapperInformations,
  Informations,
  WrapperDetails,
  Details,
  Overview,
  ExtraInformations,
  Backdrop,
} from '../../styles/movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiImgPath = process.env.NEXT_PUBLIC_API_IMG_PATH;

export default function Movie({ movie, mainCast }) {
  const src = `${apiImgPath}w1280${movie.backdrop_path}`;

  const {
    title,
    runtime,
    genres,
    overview,
    vote_average: voteAverage,
    vote_count: voteCount,
    release_date: releaseDate,
    original_title: originalTitle,
  } = movie;

  const composeList = dataArray =>
    dataArray.map((data, index) => (
      <span key={data.id}>
        {index !== dataArray.length - 1 ? `${data.name}, ` : data.name}
      </span>
    ));

  return (
    <Container>
      <WrapperInformations>
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
              {composeList(genres)}
              <p>•</p>
              <p>{formatDate(releaseDate)}</p>
            </Details>
          </WrapperDetails>

          <Overview>{overview}</Overview>

          <ExtraInformations>
            <p>Titulo original: {originalTitle}</p>
            <p>Atores principais: {composeList(mainCast)}</p>
          </ExtraInformations>
        </Informations>
      </WrapperInformations>

      <Backdrop backdropUrl={src} />
    </Container>
  );
}

export const getStaticPaths = async () => ({
  paths: [
    {
      params: {
        id: '315635',
      },
    },
  ],
  fallback: 'blocking',
});

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const movieUrl = `movie/${id}?api_key=${apiKey}&${apiLanguage}`;
  const movieCreditsUrl = `movie/${id}/credits?api_key=${apiKey}&${apiLanguage}`;

  const movie = await getMovieData(movieUrl);
  const movieCredits = await getMovieData(movieCreditsUrl);

  const { cast } = movieCredits;
  const mainCast = cast?.slice(0, 5);

  return {
    props: {
      movie,
      mainCast,
    },
    revalidate: 300,
  };
};
