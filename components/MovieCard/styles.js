import Image from 'next/image';

import styled from 'styled-components';

import { Container as Informations } from './Informations/styles';
import { Container as MoreInformations } from './MoreInformations/styles';

export const Poster = styled(Image)`
  border-radius: 1.25rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:hover ${Poster} {
    border-radius: 1.25rem 1.25rem 0 0;
  }

  &:hover ${Informations} {
    display: none;
  }

  &:hover ${MoreInformations} {
    display: block;
    width: 11.8125rem;
  }
`;
