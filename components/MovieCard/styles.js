import { ImStarFull } from 'react-icons/im';

import Image from 'next/image';

import styled from 'styled-components';

export const Poster = styled(Image)`
  border-radius: 1.25rem;
`;

export const Details = styled.div`
  width: 11.8125rem;
  margin-top: 0.3125rem;

  h4 {
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ExpandedDetails = styled.div`
  display: none;
  background-color: blue;
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

  &:hover ${Details} {
    display: none;
  }

  &:hover ${ExpandedDetails} {
    display: block;
    width: 11.8125rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.1875rem;
  color: ${({ theme }) => theme.colors.goldenrod};

  p {
    font-size: 0.8438rem;
  }
`;

export const IconRating = styled(ImStarFull)`
  font-size: 0.8438rem;
`;
