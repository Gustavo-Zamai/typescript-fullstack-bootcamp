import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { LoginCard } from '../../components/Card/LoginCard';
import { Layout } from '../../components/Layout/Layout';


// the sign <> </> means React Fragment, it is used to group a list of children without adding extra nodes to the DOM.
function Login() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg='#0F172A' minHeight='100vh'>
        <Layout>
          <LoginCard />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default Login;