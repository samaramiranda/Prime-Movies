import { ImTicket, ImSearch } from 'react-icons/im';

import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9375rem 5rem;
  background-color: #060b28;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  transition: 0.3s;

  div {
    text-align: center;
    color: transparent;
    background-image: linear-gradient(90deg, #2f5aff, #89bdff);
    -webkit-background-clip: text;
    background-clip: text;

    h2 {
      font-size: 1.6rem;
    }
  }

  &:hover {
    filter: brightness(120%);
  }
`;

export const IconTicket = styled(ImTicket)`
  font-size: 2.25rem;
  color: #2f5aff;
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 25vw;
  border: 0.125rem solid #2f5aff;
  border-radius: 1.25rem;
  transition: 0.3s;

  input {
    flex: 1;
    color: #fff;
    padding: 0.625rem 0.9375rem;
    border: none;
    border-radius: 1.25rem 0 0 1.25rem;
    background-color: transparent;
    outline: none;

    &::placeholder {
      color: #ffffff80;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.8125rem;
    border: none;
    border-radius: 0 1.25rem 1.25rem 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      filter: brightness(120%);
    }
  }

  &:hover {
    box-shadow: 0 0 0 0.1875rem #2f5aff66;
  }
`;

export const IconSearch = styled(ImSearch)`
  font-size: 1.125rem;
  color: #2f5aff;
`;
