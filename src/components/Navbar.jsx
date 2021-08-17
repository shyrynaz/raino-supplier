import React from 'react';
import logo from '../assets/logo.png';
import { Flex, Image } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      bg='purple.800'
      w='100%'
      p={4}
      color='white'
    >
      <Image src={logo} h={['50%', '30%', '10%']} w={['50%', '30%', '10%']} />
    </Flex>
  );
};

export default Navbar;
