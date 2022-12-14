import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import useQueryParams from '../../hooks/useQueryParams';
import debounce from '../../utils/debounce';

import {
  Container,
  Logo,
  IconTicket,
  SearchBar,
  IconSearch,
  ErrorDebounce,
} from './styles';

export default function Navbar() {
  const search = useRef(null);
  const router = useRouter();
  const querySearch = useQueryParams('search');

  const [timer, setTimer] = useState(null);
  const [errorDebounce, setErrorDebounce] = useState(false);

  const navigateToMovie = () => {
    router.push({
      pathname: `/`,
      query: { search: search.current.value },
    });
  };

  const handleSearch = e => {
    e.preventDefault();

    if (!search.current.value && !querySearch) {
      return;
    }

    setErrorDebounce(!!timer);
    debounce(navigateToMovie, 500, timer, setTimer)();
  };

  useEffect(() => {
    if (search.current) {
      search.current.value = querySearch;
    }
  }, [querySearch]);

  return (
    <Container>
      <Link href="/">
        <Logo>
          <IconTicket />

          <div>
            <h3>Prime</h3>
            <h2>Movies</h2>
          </div>
        </Logo>
      </Link>

      <SearchBar onSubmit={handleSearch}>
        <input type="text" placeholder="Busque um filme" ref={search} />
        <button type="submit">
          <IconSearch />
        </button>

        {errorDebounce && (
          <ErrorDebounce>
            <p>
              Limite de requisições a API atingido. Tente novamente em alguns
              segundos!
            </p>
          </ErrorDebounce>
        )}
      </SearchBar>
    </Container>
  );
}
