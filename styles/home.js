import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 5rem;
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
  padding: 2.8rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.8rem, 1fr));
  grid-gap: 1.3em;
`;
