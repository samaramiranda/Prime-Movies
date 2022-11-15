import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 5rem 1.5rem;
  min-height: calc(100vh - 5.6rem);
`;

export const Title = styled.h1`
  text-align: center;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.flame},
    ${({ theme }) => theme.colors.yellowOrange}
  );
  -webkit-background-clip: text;
  background-clip: text;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.8125rem, 1fr));
  grid-column-gap: 1.3em;
  grid-row-gap: 1.6em;
  padding: 2.8rem 0;
`;
