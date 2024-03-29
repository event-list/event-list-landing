import {Heading, Text, TextProps} from '@chakra-ui/react';

type H1DecoratedProps = TextProps & {
  children: React.ReactNode
}

const H1Decorated = (props: H1DecoratedProps) => {
  return (
    <Heading
      bgClip="text"
      fontWeight={'bold'}
      fontSize={{base: '5xl', md: '8xl'}}
      bgGradient="linear(to-r, red.500,pink.600)"
      {...props}
    />
  );
};

export default H1Decorated