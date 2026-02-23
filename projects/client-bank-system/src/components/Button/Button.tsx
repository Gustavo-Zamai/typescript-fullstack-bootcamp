import { Button, 
        Box, 
        Center } 
    from "@chakra-ui/react";

export const LoginButton = () => {
    return (
        <Box>
            <Center h='100px' w='100%' color='blue' fontSize='2xl' marginTop={'2rem'}>
                <Button bg='#f2f2f2' 
                color='#1a66ff' 
                w='40%' 
                borderRadius='25px'
                border='#000000' 
                _hover={{bg: '#ffffff', color: '#0044cc', shadow: 'md' , border:'#000000'}}
                >Login</Button>
            </Center>
        </Box>
    );
}