import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, Box } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider>
    <Box display={'flex'} bgColor={'brown.500'} bg={'orange.600'} minH={'100vh'} fontFamily="Hanken Grotesk"
 alignItems={'center'} justifyContent={'center'}>
          <App />
    </Box>
  </ChakraProvider>
  </StrictMode>
 
 
)
