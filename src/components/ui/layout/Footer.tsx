import {
  Box,
  Container,
  Button,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
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

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      role="contentinfo"
      borderColor='gray.800'
      position="relative"
      bottom={'0'}
      left={'0'}
      right={'0'}
      as={'footer'}
      bg={'gray.900'}
      color={'gray.200'}
      borderTop="1px"
      py="10"
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container as={Stack} maxW={'6xl'}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr' }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/'}>About us</Link>
            <Link href={'mailto:viblaziusgoulart@gmail.com'}>Contact us</Link>
            <Link href={'services#prices'}>Pricing</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>
          <Stack spacing={6}>
            <Box w="40">
              <Logo />
            </Box>
            <Text fontSize={'sm'}>© {new Date().getFullYear()} Event List. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Github'} href={'https://github.com/event-list'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/evtlist/'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
