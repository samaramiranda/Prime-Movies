import { ImStarFull } from 'react-icons/im';

import styled from 'styled-components';

export const Container = styled.div`
  width: 11.8125rem;
  margin-top: 0.3125rem;

  h4 {
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
