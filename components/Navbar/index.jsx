import { useRef } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, Logo, IconTicket, SearchBar, IconSearch } from './styles';

export default function Navbar() {
  const router = useRouter();
  const search = useRef(null);

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
