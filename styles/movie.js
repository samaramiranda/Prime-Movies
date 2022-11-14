import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 89.6px);
  width: 100vw;

  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-position: center top;
  background-size: 100% auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
