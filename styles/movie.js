import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 89.6px);
  background-color: ${({ theme }) => theme.colors.richBlack};
`;

export const Informations = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const WrapperDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.cultured};
  font-size: 0.8438rem;
`;

export const Details = styled.div`
  display: flex;
  gap: 5px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.cultured};
`;

export const Backdrop = styled.div`
  flex: 0.7;
  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-position: center left;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 40vh 0 20vh -100px ${({ theme }) => theme.colors.richBlack};
`;
