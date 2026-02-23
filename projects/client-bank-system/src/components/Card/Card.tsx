import { Box, Center, Link } from '@chakra-ui/react';
import { Label } from '../Label/Label';
import { LoginButton } from '../Button/Button';

export const Card = () => {
    return (
        <Center>
        <Box padding='3rem' 
            marginTop='2rem' 
            border='1px solid black' 
            borderRadius='10px' 
            bg='#ffffff'
            alignItems='center' 
            justifyContent='center'
            width='75%'
            shadow='lg'
            >
            <Center fontSize='2xl' marginBottom='3rem' color='#1a66ff'>
                <h1>Login to your account</h1>
            </Center>
            <Label id='username' type='text' label='Enter your username' />
            <Label id='password' type='password' label='Enter your password' />
            <LoginButton />
            <Link href='#' 
                color='#1a66ff' 
                marginTop='1rem' 
                display='block' 
                textAlign='center' 
                fontSize='sm'
            >Don't have an account? Signup Here</Link>
        </Box>
        </Center>
    );
};