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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5625rem;
  padding: 2.8rem 0;
`;
