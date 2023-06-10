import './globals.css';
import React, { ReactNode } from 'react';
import { AppProvider } from '@/providers';

export const metadata = {
  title: 'Francin Vincent',
  description: 'Learn more about Francin!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
