import Link from 'next/link';

import {
  Container,
  IconGitHub,
  IconLinkedin,
  Line,
  Description,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <Line />

        <Link href="https://github.com/samaramiranda" target="_blank">
          <IconGitHub />
        </Link>

        <Link
          href="https://www.linkedin.com/in/samara-miranda/"
          target="_blank"
        >
          <IconLinkedin />
        </Link>

        <Line />
      </div>

      <Description>The Movie Database API</Description>
    </Container>
  );
}
