import Image from 'next/image';
import Link from 'next/link';

import imgSadness from '../public/images/error_404_mike.png';

import { Container, Informations } from '../styles/404';

export default function Custom404() {
  return (
    <Container>
      <Image src={imgSadness} alt="Não encontrado" width={343} height={400} />

      <Informations>
        <p>OOPS! PÁGINA NÃO ENCONTRADA</p>

        <Link href="/">
          <button type="button">Voltar para a pagina inicial</button>
        </Link>
      </Informations>
    </Container>
  );
}
