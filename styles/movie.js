import Image from 'next/image';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled(Image)`
  object-fit: cover;
  width: 100% !important;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
