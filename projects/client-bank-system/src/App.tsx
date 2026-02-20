import { LoginButton } from './components/Button/Button';
import { Box, Center, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Label } from './components/Label/Label';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg='royalblue' minHeight='100vh'>
        <Header />
        <Box marginTop='25px' padding={'50px'} >
          <Center fontSize='2xl' marginBottom={'3rem'} color={'white'}>
            <h1>Login to your account</h1>
          </Center>
          <Label id='username' type='text' label='Enter your username'/>
          <Label id='password' type='password' label='Enter your password'/>
          <LoginButton />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
