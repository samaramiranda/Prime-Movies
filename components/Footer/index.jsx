import { Container, IconSocialNetwork, Line, Description } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <Line />
        <IconSocialNetwork />
        <IconSocialNetwork />
        <Line />
      </div>

      <Description>The Movie Database API</Description>
    </Container>
  );
}
