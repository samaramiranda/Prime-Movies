import Image from 'next/image';

import getMovieData from '../services/getMovieData';
import useQueryParams from '../hooks/useQueryParams';
import imgSadness from '../public/images/not_found_sadness.png';

import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

import { Container, Title, MovieList, NotFound } from '../styles/home';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiPageLimit = 500;

export default function Home({ topMoviesData, page }) {
  const search = useQueryParams('search');

  const { results: topMoviesList, total_pages: totalPages } = topMoviesData;
  const numberOfPages = totalPages > apiPageLimit ? apiPageLimit : totalPages;

  return (
    <Container>
      <Title>
        {search ? `Resultados para: ${search}` : 'Filmes Populares'}
      </Title>

      {topMoviesList.length > 0 ? (
        <MovieList>
          {topMoviesList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieList>
      ) : (
        <NotFound>
          <Image
            src={imgSadness}
            alt="Não encontrado"
            width={224}
            height={320}
          />

          <p>Nenhum resultado encontrado!</p>
        </NotFound>
      )}

      <Pagination totalPages={numberOfPages} initialPage={page} />
    </Container>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query?.page || 1;
  const search = query?.search || null;

  const moviesUrl = `${
    search ? 'search/movie/' : 'movie/popular/'
  }?api_key=${apiKey}&${apiLanguage}&query=${search}&page=${page}`;

  const data = await getMovieData(moviesUrl);

  return {
    props: {
      topMoviesData: data,
      page,
    },
  };
};
