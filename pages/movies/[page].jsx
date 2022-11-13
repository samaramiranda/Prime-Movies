import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';

import { Container, Title, MovieList } from '../../styles/home';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiPath = process.env.NEXT_PUBLIC_API_PATH;
const apiPageLimit = 500;

export default function Home({ topMoviesData, page }) {
  const { results: topMoviesList, total_pages: totalPages } = topMoviesData;
  const numberOfPages = totalPages > apiPageLimit ? apiPageLimit : totalPages;

  return (
    <Container>
      <Title>Filmes Populares</Title>

      <MovieList>
        {topMoviesList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieList>

      <Pagination totalPages={numberOfPages} initialPage={page} />
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
      page: Number(page),
    },
  };
}
