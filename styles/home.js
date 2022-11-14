import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 5rem 2.5rem 5rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.8125rem, 1fr));
  grid-column-gap: 1.3em;
  grid-row-gap: 1.6em;
  padding: 2.8rem 0;
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  margin-top: 16.5vh;

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.cultured};
  }
`;
