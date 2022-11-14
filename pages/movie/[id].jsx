import getMovies from '../../services/getMovies';

import { Container, Title } from '../../styles/movie';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiMovieDetailsPath = process.env.NEXT_PUBLIC_API_MOVIE_DETAILS_PATH;
const apiImgPath = process.env.NEXT_PUBLIC_API_IMG_PATH;

export default function Movie({ data }) {
  const src = `${apiImgPath}w1280${data.backdrop_path}`;

  return (
    <Container backdropUrl={src}>
      <Title>{data.title}</Title>
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
