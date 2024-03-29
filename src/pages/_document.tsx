import {Html, Head, Main, NextScript} from "next/document";
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from "../components/ui/theme/theme";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}