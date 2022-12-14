import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5625rem;
  padding: 2rem 5rem;
  background-color: ${({ theme }) => theme.colors.chineseBlack};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
  }
`;

export const Line = styled.hr`
  flex: 1;
  height: 0.0313rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.flameOpacity70};
`;

export const IconGitHub = styled(FaGithub)`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.cultured};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconLinkedin = styled(FaLinkedin)`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.cultured};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.cultured};
`;
