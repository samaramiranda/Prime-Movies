import ReactPaginate from 'react-paginate';

import styled from 'styled-components';

export const Container = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style-type: none;

  .page,
  .break,
  .previous,
  .next {
    margin: 0 1.2px;
    border-radius: 9px;
    color: ${({ theme }) => theme.colors.cultured};
    background-color: ${({ theme }) => theme.colors.ultramarineBlue};
    cursor: pointer;
    transition: 0.3s;
  }

  .page-link,
  .break-link,
  .previous-link,
  .next-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    min-width: 30px;
    padding: 0 5px;
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
