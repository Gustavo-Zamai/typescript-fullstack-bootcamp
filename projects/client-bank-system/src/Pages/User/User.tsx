import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { UserPage } from "../../components/Card/UserPageCard";

export const User = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box>
                <Layout showMenu={true} />
                <UserPage />
            </Box>
        </ChakraProvider>
    );
}