import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  padding: 5px 5px 10px 5px;
  border-radius: 0 0 20px 20px;
  background-color: #1e233d;
`;

export const Overview = styled.p`
  margin: 5px 0;
  font-size: 11.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const WrapperDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
