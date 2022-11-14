import { useRouter } from 'next/router';

import { Container } from './styles';

export default function Pagination({ totalPages, initialPage }) {
  const router = useRouter();
  const search = router.query?.search;

  return (
    <Container
      onPageChange={e =>
        router.push({
          pathname: `/`,
          query: { page: e.selected + 1, search },
        })
      }
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
