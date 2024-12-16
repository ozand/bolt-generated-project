import '../styles/globals.css';
import { ErrorBoundary } from 'react-error-boundary'; // Ensure this import is correct

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
