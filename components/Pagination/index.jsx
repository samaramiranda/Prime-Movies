import { Container } from './styles';

export default function Pagination() {
  return (
    <Container
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={10}
      renderOnZeroPageCount={false}
      containerClassName="pagination"
      pageClassName="page"
      breakClassName="break"
      activeClassName="active"
      previousClassName="previous"
      previousLinkClassName="next"
    />
  );
}
