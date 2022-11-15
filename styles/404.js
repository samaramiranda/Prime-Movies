import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  margin-top: 16.5vh;
`;

export const Informations = styled.div`
  flex: 0.4;

  p {
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.cultured};
  }

  button {
    margin-top: 40px;
    padding: 11px 20px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.cultured};
    background-color: ${({ theme }) => theme.colors.ultramarineBlue};
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }
`;

export default Container;
