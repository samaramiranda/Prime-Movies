import { useRouter } from 'next/router';

import { Container } from './styles';

export default function Pagination({ totalPages, initialPage }) {
  const router = useRouter();

  return (
    <Container
      onPageChange={e => router.push(`/movies/${e.selected + 1}`)}
      pageCount={totalPages}
      forcePage={initialPage - 1}
      marginPagesDisplayed={3}
      renderOnZeroPageCount={null}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      className="pagination"
      pageClassName="page"
      activeClassName="active"
      pageLinkClassName="page-link"
      breakLinkClassName="break-link"
      previousLinkClassName="previous-link"
      nextLinkClassName="next-link"
      breakClassName="break"
      previousClassName="previous"
      nextClassName="next"
    />
  );
}
