import Head from 'next/head';
import Footer from './Footer';
import {Header} from './Header';
import {Box} from "@chakra-ui/react";

export default function Layout(props: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Box>
      <title>
        {props.title
          ? `Event List | ${props.title}`
          : 'Event List | A new way to share your events'}
      </title>
      <Header/>
      <Box pt={'80px'} pb={{base: '160px', sm: '70px'}} minH={'100vh'}>
        {props.children}
      </Box>
      <Footer/>
    </Box>
  );
}
