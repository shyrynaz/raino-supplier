import React from 'react';
import './App.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Form from './components/Form';
const colors = {
  brand: {
    900: '#2AB4AA',
    800: '#494395'
  }
};
const theme = extendTheme({ colors });
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        marginBottom='10'
      >
        <Navbar />
        <Form />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
