import Theme from '../styles/theme';
// Google analytics
import ReactGA from 'react-ga';

const TrackingId = 'G-SM6XKJYGX6';
ReactGA.initialize(TrackingId);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
// Adding vercel analytics

import { Analytics } from '@vercel/analytics/react';

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

