export default function Movie({ id }) {
  return <h1>ID: {id}</h1>;
}

export const getStaticPaths = async () => ({
  paths: [
    {
      params: {
        id: '1',
      },
    },
  ],
  fallback: 'blocking',
});

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  return {
    props: {
      id,
    },
  };
};
