import ReactPaginate from 'react-paginate';

import styled from 'styled-components';

export const Container = styled(ReactPaginate)`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;

  .page,
  .break,
  .previous,
  .next {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 0 1.5px;
    border-radius: 9px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.ultramarineBlue};
    cursor: pointer;
    transition: 0.3s;
  }

  .active {
    background-color: ${({ theme }) => theme.colors.ultramarineBlueOpacity70};
  }

  .page:not(.page.active):hover,
  .break:hover,
  .previous:hover,
  .next:hover {
    filter: brightness(120%);
  }
`;

export default Container;
