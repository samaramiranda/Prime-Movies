import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem 5rem;
`;

export const Title = styled.h1`
  text-align: center;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.ultramarineBlue},
    ${({ theme }) => theme.colors.jordyBlue}
  );
  -webkit-background-clip: text;
  background-clip: text;
`;

export const MovieList = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`;
