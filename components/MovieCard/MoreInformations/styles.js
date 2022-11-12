import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  padding: 0.5rem;
  border-radius: 0 0 1.25rem 1.25rem;
  background-color: #1e233d;
`;

export const Overview = styled.p`
  margin: 0.3125rem 0 0.5rem 0;
  font-size: 0.7188rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const WrapperDetails = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const Date = styled.p`
  font-size: 0.8438rem;
  font-weight: 100;
`;
