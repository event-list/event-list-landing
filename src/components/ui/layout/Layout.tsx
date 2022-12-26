import Head from 'next/head';
import Footer from './Footer';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';

export default function Layout(props: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          {props.title
            ? `Event List | ${props.title}`
            : 'Event List | A new way to share your parties'}
        </title>
        <link href="https://fonts.cdnfonts.com/css/sifonn" rel="stylesheet" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
