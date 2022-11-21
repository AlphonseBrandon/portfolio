import Theme from '../styles/theme';
// Google analytics
import ReactGA from 'react-ga';

const TrackingId = 'UA-249995739-2';


export default function App({ Component, pageProps }) {
  setGA = () => {
    ReactGA.initialize(TrackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  };
  componentDidMount = () => {
    this.setGA();
  }
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

