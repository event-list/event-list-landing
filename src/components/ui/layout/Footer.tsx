import {
  Box,
  Container,
  Button,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Logo } from '../Logo';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg="blackAlpha.100"
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}
    >
      <>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </>
    </Button>
  );
};

export default function Footer() {
  return (
    <Box
      borderTop={'1px'}
      borderColor='gray.800'
      role="contentinfo"
      position="absolute"
      bottom={'0'}
      left={'0'}
      right={'0'}
      as={'footer'}
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box h="10">
          <Logo />
        </Box>
        <Text>© 2022 Event List. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'} href={'https://github.com/event-list'}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/eventlist.ev/'}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
