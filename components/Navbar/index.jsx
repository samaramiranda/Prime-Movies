import Link from 'next/link';

import { Container, Logo, IconTicket, SearchBar, IconSearch } from './styles';

export default function Navbar() {
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

      <SearchBar>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <IconSearch />
        </button>
      </SearchBar>
    </Container>
  );
}
