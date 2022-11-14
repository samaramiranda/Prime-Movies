import getMovies from '../../services/getMovies';

import MovieRating from '../../components/MovieRating';

import {
  Container,
  Informations,
  Details,
  Title,
  Backdrop,
} from '../../styles/movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiMovieDetailsPath = process.env.NEXT_PUBLIC_API_MOVIE_DETAILS_PATH;
const apiImgPath = process.env.NEXT_PUBLIC_API_IMG_PATH;

export default function Movie({ data }) {
  const src = `${apiImgPath}w1280${data.backdrop_path}`;
  console.log(data);

  return (
    <Container>
      <Informations>
        <Title>{data.title}</Title>

        <Details>
          <MovieRating voteAverage={data.vote_average} />
        </Details>
      </Informations>

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
  const data = await getMovies(movieUrl);

  return {
    props: {
      data,
    },
    revalidate: 300,
  };
};
