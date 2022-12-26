import { Text, TextProps } from '@chakra-ui/react';

type H2DecoratedProps = TextProps & {
  children: React.ReactNode
}

const H2Decorated = (props: H2DecoratedProps) => {
  return (
    <Text
      bgClip="text"
      as={'span'}
      fontWeight={'bold'}
      fontSize={{base: '3xl', md: '6xl'}}
      bgGradient="linear(to-r, red.500,pink.600)"
      {...props}
    />
  );
};

export default H2Decorated