import { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import useQueryParams from '../../hooks/useQueryParams';
import debounce from '../../utils/debounce';

import { Container, Logo, IconTicket, SearchBar, IconSearch } from './styles';

export default function Navbar() {
  const search = useRef(null);
  const debounceRunning = useRef(false);
  const router = useRouter();
  const querySearch = useQueryParams('search');

  const navigateToMovie = () => {
    router.push({
      pathname: `/`,
      query: { search: search.current.value },
    });
  };

  const handleSearch = e => {
    e.preventDefault();

    if (!search.current.value) {
      return;
    }

    if (debounceRunning.current) {
      return;
    }

    debounce(navigateToMovie, 500, debounceRunning)();
  };

  useEffect(() => {
    if (search.current) {
      search.current.value = querySearch;
    }
  });

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
      </SearchBar>
    </Container>
  );
}
