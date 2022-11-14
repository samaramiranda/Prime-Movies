import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

import { Container, Title, MovieList } from '../styles/home';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiPopularMoviesPath = process.env.NEXT_PUBLIC_API_POPULAR_MOVIES_PATH;
const apiSearchPath = process.env.NEXT_PUBLIC_SEARCH_PATH;
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

export const getServerSideProps = async ({ query }) => {
  const page = query?.page || 1;
  const search = query?.search || null;

  const moviesUrl = `${
    search ? apiSearchPath : apiPopularMoviesPath
  }?api_key=${apiKey}&${apiLanguage}&query=${search}&page=${page}`;

  const res = await fetch(moviesUrl);
  const data = await res.json();

  return {
    props: {
      topMoviesData: data,
      page,
    },
  };
};
