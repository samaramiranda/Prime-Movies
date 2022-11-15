import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  height: calc(100vh - 5.6rem);
`;

export const Informations = styled.div`
  flex: 0.4;

  p {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.cultured};
  }

  button {
    margin-top: 2.5rem;
    padding: 0.6875rem 1.25rem;
    border-radius: 1.25rem;
    font-size: 1rem;
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
