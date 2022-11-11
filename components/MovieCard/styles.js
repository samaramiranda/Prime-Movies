import { ImStarFull } from 'react-icons/im';

import Image from 'next/image';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Poster = styled(Image)`
  border-radius: 20px;
`;

export const Details = styled.div`
  width: 189px;
  margin-top: 5px;

  h4 {
    font-weight: 100;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.goldenrod};

  p {
    font-size: 13.5px;
  }
`;

export const IconRating = styled(ImStarFull)`
  font-size: 13.5px;
`;
