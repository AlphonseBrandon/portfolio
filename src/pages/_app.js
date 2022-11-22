import Theme from '../styles/theme';
import * as gtag from '../../lib/gtag'



export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    
  }, [])

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
import { useEffect } from 'react';

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

