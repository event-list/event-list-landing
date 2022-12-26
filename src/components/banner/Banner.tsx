import { Heading, Text } from '@chakra-ui/react';
import H1Decorated from '../ui/text/H1Decorated';
import { Container } from '../ui/container/Container';

export const Banner: React.FC = () => {
  return (
    <Container>
      <Heading>
        <Text fontSize={'5xl'}>A new way to </Text>
        <H1Decorated>Share your Parties</H1Decorated>
      </Heading>
    </Container>
  );
};
