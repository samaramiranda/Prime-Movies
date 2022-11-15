import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
