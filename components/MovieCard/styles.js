import Image from 'next/image';

import styled from 'styled-components';

import { Container as MoreInformations } from './MoreInformations/styles';

export const Poster = styled(Image)`
  border-radius: 1.25rem;
`;

export const Informations = styled.div`
  width: 11.8125rem;
  margin-top: 0.3125rem;

  h4 {
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
    opacity: 0;
  }

  &:hover ${MoreInformations} {
    opacity: 1;
  }
`;

export const WrapperInformations = styled.div`
  position: relative;
  width: 11.8125rem;
`;
