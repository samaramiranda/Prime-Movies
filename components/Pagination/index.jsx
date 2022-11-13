import { useRouter } from 'next/router';

import { Container } from './styles';

export default function Pagination({ totalPages, initialPage }) {
  const router = useRouter();

  return (
    <Container
      onPageChange={e => router.push(`/movies/${e.selected + 1}`)}
      pageCount={totalPages}
      forcePage={initialPage - 1}
      marginPagesDisplayed={5}
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
