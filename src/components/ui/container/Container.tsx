import {
  Box,
  Container as ChakraContainer,
  Stack,
} from '@chakra-ui/react';

const Container = (props) => {
  return (
    <ChakraContainer maxW={'100vw'} h={'100vh'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        h={'100vh'}
        zIndex={1}
      >
        <Stack h={'50vh'} justifyContent={'flex-end'} zIndex={1}>{props.children}</Stack>
      </Stack>
    </ChakraContainer>
  );
};

export { Container };
