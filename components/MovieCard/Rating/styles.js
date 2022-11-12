import { ImStarFull } from 'react-icons/im';

import styled from 'styled-components';

export const Container = styled.div`
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
