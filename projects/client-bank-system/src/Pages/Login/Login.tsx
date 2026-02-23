import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function Login() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg='#1a66ff' minHeight='100vh'>
        <Header />
        <Card />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default Login;