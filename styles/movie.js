import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 89.6px);
  background-color: ${({ theme }) => theme.colors.richBlack};
`;

export const Shadow = styled.div`
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
  line-height: 20px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 20px 0;
  font-size: 0.8438rem;
`;

export const Details = styled.div`
  display: flex;
  gap: ${({ isRating }) => (isRating ? '5px' : '8px')};
`;

export const Overview = styled.p`
  font-size: 0.9rem;
  text-align: justify;
`;

export const ExtraInformations = styled.div`
  font-size: 0.9rem;
  margin-top: 20px;

  p:first-of-type {
    margin-bottom: 10px;
  }
`;

export const Backdrop = styled.div`
  flex: 0.7;
  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-position: center left;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 40vh 0 20vh -100px ${({ theme }) => theme.colors.richBlack};
`;
