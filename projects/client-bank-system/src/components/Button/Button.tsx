import { Button, Box, Center } from "@chakra-ui/react";

export const LoginButton = () => {
    return (
        <Box>
            <Center h='100px' w='100%' color='blue' fontSize='2xl' marginTop={'2rem'}>
                <Button bg='white' color='royalblue' w={'100%'}>Login</Button>
            </Center>
        </Box>
    );
}