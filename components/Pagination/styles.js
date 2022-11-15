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
    margin: 0 0.075rem;
    border-radius: 0.5625rem;
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
    height: 1.875rem;
    min-width: 1.875rem;
    padding: 0 0.3125rem;
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
