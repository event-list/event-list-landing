import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Text,
} from '@chakra-ui/react';

type ButtonProps = {
  text: string;
} & ChakraButtonProps;

const Button = (props: ButtonProps) => {
  const { text = '', ...restProps } = props;
  return (
    <ChakraButton
      bgGradient="linear(to-r, red.500,pink.600)"
      color={'white'}
      _hover={{
        bgGradient: 'linear(to-r, red.600,pink.700)',
        boxShadow: 'xl',
        transitionDuration: '2ms',
      }}
      {...restProps}
    >
      <Text>{text}</Text>
    </ChakraButton>
  );
};

export default Button;
