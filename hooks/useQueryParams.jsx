import { useRouter } from 'next/router';

export default function useQueryParams(queryName) {
  const router = useRouter();
  const query = router.query?.[queryName];

  return query || null;
}
