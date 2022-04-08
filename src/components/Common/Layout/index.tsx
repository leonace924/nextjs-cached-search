import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Layout = ({
  children,
  title = 'Nextjs Cached Search',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Nextjs Cached Search" />
      </Head>

      <main className="flex flex-col flex-1 h-full min-h-screen bg-light-primary">
        {children}
      </main>

      <footer></footer>
    </>
  );
};
