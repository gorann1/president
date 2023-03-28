import '@/styles/global.css';

import { Inter } from '@next/font/google';
import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import cx from 'classnames';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Provider as RWBProvider } from 'react-wrap-balancer';

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
