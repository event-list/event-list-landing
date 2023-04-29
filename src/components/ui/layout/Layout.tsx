import Head from 'next/head';
import Footer from './Footer';
import {Header} from './Header';
import {Box} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";

export default function Layout(props: {
  title?: string;
  children: React.ReactNode;
}) {
  const {t} = useTranslation('common')

  return (
    <Box>
      <title>
        {props.title
          ? `Event List | ${props.title}`
          : t('title')}
      </title>
      <Header/>
      <Box pt={'80px'} minH={'100vh'}>
        {props.children}
      </Box>
      <Footer/>
    </Box>
  );
}
