import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  margin-top: 16.5vh;

  p {
    flex: 0.4;
    font-size: 1.5625rem;
    color: ${({ theme }) => theme.colors.cultured};
  }
`;

export default Container;
