'use client';

import { Suspense } from 'react';
import { AppHeader, AppFooter } from '@/_components';
import Loading from '@/loading';
import 'styles/globals.css';
import { ThemeContext } from '@/_context';

export const AppWrapper = ({ children }) => {
  return (
    <ThemeContext>
      <AppHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <AppFooter />
    </ThemeContext>
  );
};
