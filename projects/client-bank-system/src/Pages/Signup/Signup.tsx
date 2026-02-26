import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { SignupCard } from "../../components/Card/SignupCard";
import { Layout } from "../../components/Layout/Layout";


export const Signup = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box bg='#0F172A'  minHeight='100vh'>
                <Layout>
                    <SignupCard />
                </Layout>
            </Box>
        </ChakraProvider>
    );
}