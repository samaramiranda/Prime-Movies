import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 5.6rem);
  background-color: ${({ theme }) => theme.colors.richBlack};
`;

export const WrapperInformations = styled.div`
  flex: 0.3;
  position: relative;
  padding-left: 5rem;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 37vw;
  color: ${({ theme }) => theme.colors.cultured};
`;

export const WrapperDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5625rem;
  margin: 1.25rem 0;
  font-size: 0.8438rem;
`;

export const Details = styled.div`
  display: flex;
  gap: ${({ isRating }) => (isRating ? '.3125rem' : '.5rem')};
`;

export const Overview = styled.p`
  text-align: justify;
  font-size: 0.9rem;
  line-height: 1.25rem;
`;

export const ExtraInformations = styled.div`
  margin-top: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.25rem;

  p:first-of-type {
    margin-bottom: 0.625rem;
  }
`;

export const Backdrop = styled.div`
  flex: 0.7;
  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-position: center left;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 40vh 0 20vh -6.25rem ${({ theme }) => theme.colors.richBlack};
`;
