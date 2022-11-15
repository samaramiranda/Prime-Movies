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
      ${({ theme }) => theme.colors.chineseBlack} 50%,
      ${({ theme }) => theme.colors.charlestonGreen}
    );
    background-color: ${({ theme }) => theme.colors.chineseBlack};

    &::-webkit-scrollbar {
      width: 1rem;               
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.chineseBlack}   
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.flame};
      border-radius: .5rem;       
      border: 0.25rem solid ${({ theme }) => theme.colors.chineseBlack}
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
