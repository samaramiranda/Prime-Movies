import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background: linear-gradient(
      ${({ theme }) => theme.colors.richBlack} 50%,
      ${({ theme }) => theme.colors.ultramarineBlueOpacity25}
    );
    background-color: ${({ theme }) => theme.colors.richBlack};

    &::-webkit-scrollbar {
      width: 1rem;               
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.richBlack}   
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.ultramarineBlue};
      border-radius: .5rem;       
      border: 0.25rem solid ${({ theme }) => theme.colors.richBlack}
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
