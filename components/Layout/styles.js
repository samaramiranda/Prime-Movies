import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.colors.richBlack} 50%,
    ${({ theme }) => theme.colors.ultramarineBlueOpacity25}
  );
  background-color: ${({ theme }) => theme.colors.richBlack};
`;

export default Container;
