import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Button as ButtonChakra,
  useColorMode,
} from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import React from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../Logo';
import Button from '../button/Button';
import { HiMoon, HiSun } from 'react-icons/hi';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

export const Header = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} zIndex={5}>
      <Link to="home" smooth={'easeOutCubic'}>
        <Box h={'60px'}>
          <Logo />
        </Box>
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="#7E22CE"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#7E22CE"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = '/', ...rest }: any) => {
  return (
    <Link to={to} smooth={'easeOutCubic'}>
      <Text
        fontFamily={inter}
        display="block"
        cursor={'pointer !important'}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>
          <ButtonChakra onClick={toggleColorMode}>
            {colorMode === 'light' ? <HiMoon /> : <HiSun />}
          </ButtonChakra>
        </MenuItem>
        <MenuItem to="everyone">
          <Text>Everyone</Text>
        </MenuItem>
        <MenuItem to="control">
          <Text>Control</Text>
        </MenuItem>
        <MenuItem to="region">
          <Text>Region</Text>
        </MenuItem>
        <MenuItem to="waitlist">
          <Button size="lg" text={'Get started'} />
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      position={'fixed'}
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      padding={'10px 20px'}
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      height="fit-content"
      {...props}
    >
      {children}
    </Flex>
  );
};
