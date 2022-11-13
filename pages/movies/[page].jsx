import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';

import { Container, Title, MovieList } from '../../styles/home';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiPath = process.env.NEXT_PUBLIC_API_PATH;

export default function Home({ topMoviesData }) {
  const { results: topMoviesList, total_pages: totalPages } = topMoviesData;

  console.log('topMoviesData', topMoviesData);

  return (
    <Container>
      <Title>Filmes Populares</Title>

      <MovieList>
        {topMoviesList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieList>

      <Pagination totalPages={totalPages} />
    </Container>
  );
}

export const getStaticPaths = async () => ({
  paths: [
    {
      params: {
        page: '1',
      },
    },
  ],
  fallback: 'blocking',
});

export async function getStaticProps({ params }) {
  const { page } = params;

  const topMoviesUrl = `${apiPath}popular?api_key=${apiKey}&${apiLanguage}&page=${page}`;

  const res = await fetch(topMoviesUrl);
  const data = await res.json();

  return {
    props: {
      topMoviesData: data,
    },
  };
}
