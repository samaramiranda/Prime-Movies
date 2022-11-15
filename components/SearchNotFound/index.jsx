import Image from 'next/image';

import imgSadness from '../../public/images/not_found_sadness.png';

import { Container } from './styles';

export default function SearchNotFound() {
  return (
    <Container>
      <Image src={imgSadness} alt="Não encontrado" width={280} height={400} />
      <p>Nenhum resultado encontrado!</p>
    </Container>
  );
}
