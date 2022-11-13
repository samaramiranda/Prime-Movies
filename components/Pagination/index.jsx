import { Container } from './styles';

export default function Pagination({ totalPages }) {
  return (
    <Container
      // onPageChange={handlePageClick}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      className="pagination"
      pageClassName="page"
      breakClassName="break"
      activeClassName="active"
      previousClassName="previous"
      nextClassName="next"
    />
  );
}
