import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 89.6px);
  background-color: ${({ theme }) => theme.colors.richBlack};
`;

export const Backdrop = styled.div`
  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-position: center left;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 40vh 0 20vh -100px ${({ theme }) => theme.colors.richBlack};
  width: 70vw;
`;

export const Informations = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
