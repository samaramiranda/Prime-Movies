import Navbar from '../Navbar';

import { Container } from './styles';

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
