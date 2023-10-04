import { Suspense } from 'react';
import { AppHeader, AppFooter, AppMetadata } from '@/_components';
import Loading from './loading';
import 'styles/globals.css';
import { ThemeContext } from '@/_context';

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nilkumar Patel</title>
      </head>
      <body>
        <ThemeContext>
          <AppHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}
