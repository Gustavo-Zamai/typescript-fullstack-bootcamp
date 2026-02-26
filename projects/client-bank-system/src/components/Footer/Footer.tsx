import { Box } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box bg='#0F172A' 
        h='50px' 
        w='100%' 
        color='white' 
        fontSize='sm' 
        fontFamily='Arial sans-serif' 
        position='fixed' bottom={0} left={0} 
        display='flex' alignItems='center' justifyContent='center'>
            &copy; 2026 Banking System. All rights reserved.
        </Box>
    )
}