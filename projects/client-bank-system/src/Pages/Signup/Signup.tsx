import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { SignupCard } from "../../components/Card/SignupCard";


export const Signup = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box bg='#0F172A'  minHeight='100vh'>
                <Header />
                <SignupCard />
                <Footer />
            </Box>
        </ChakraProvider>
    );
}