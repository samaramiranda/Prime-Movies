import { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import useQueryParams from '../../hooks/useQueryParams';

import { Container, Logo, IconTicket, SearchBar, IconSearch } from './styles';

export default function Navbar() {
  const search = useRef(null);
  const router = useRouter();
  const querySearch = useQueryParams('search');

  useEffect(() => {
    if (search.current) {
      search.current.value = querySearch;
    }
  });

  const handleSearch = e => {
    e.preventDefault();

    if (!search.current.value) {
      return;
    }

    router.push({
      pathname: `/`,
      query: { search: search.current.value },
    });
  };

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
