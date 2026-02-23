import { Box } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box bg='#1a66ff' 
        h='50px' 
        w='100%' 
        color='white' 
        fontSize='sm' 
        fontFamily='Arial sans-serif' 
        position='fixed' bottom={0} left={0} 
        display='flex' alignItems='center' justifyContent='center'>
            <p>&copy; 2024 Banking System. All rights reserved.</p>
        </Box>
    )
}