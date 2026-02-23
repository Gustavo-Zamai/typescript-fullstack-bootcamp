import { Box, 
        Center, 
        Image } 
        from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box>
            <Center bg='#1a66ff' 
            h='100px' 
            w='100%' 
            color='white' 
            fontSize='4xl' 
            fontFamily='Arial sans-serif'
            padding='2rem'>
                <Image src='https://placehold.co/100x100' alt='Bank Logo' w='80px' h='80px' borderRadius='50%' marginRight='2rem'/>
                <h1>Banking System</h1>
            </Center>
        </Box>
    );
}
