import MovieCard from '../components/MovieCard';

import { Container, Title, MovieList } from '../styles/home';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiLanguage = process.env.NEXT_PUBLIC_API_LANGUAGE;
const apiPath = process.env.NEXT_PUBLIC_API_PATH;

export default function Home({ topMoviesData }) {
  const { results: topMoviesList } = topMoviesData;

  return (
    <Container>
      <Title>Filmes Populares</Title>

      <MovieList>
        {topMoviesList.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </MovieList>
    </Container>
  );
}

export async function getStaticProps() {
  const topMoviesUrl = `${apiPath}popular?api_key=${apiKey}&${apiLanguage}&page=1`;

  const res = await fetch(topMoviesUrl);
  const data = await res.json();

  return {
    props: {
      topMoviesData: data,
    },
  };
}
