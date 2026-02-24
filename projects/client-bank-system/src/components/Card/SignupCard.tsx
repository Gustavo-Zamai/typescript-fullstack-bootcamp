import { Box, Center, Link } from '@chakra-ui/react';
import { Label } from '../Label/Label';
import { LoginButton } from '../Button/Button';

export const SignupCard = () => {
    return (
        <Center>
        <Box padding='3rem' 
            marginTop='2rem' 
            border='1px solid black' 
            borderRadius='10px' 
            bg='#FFFFFF'
            width='75%'
            shadow='lg'
            >
            <Center fontSize='2xl' marginBottom='2rem' color='#0F172A'>
                <h1>Signup an account</h1>
            </Center>
            <Label id='email' type='email' label='Enter your email' /> 
            <Label id='password' type='password' label='Enter your password' />
            <Label id='confirmPassword' type='password' label='Confirm your password' />
            <LoginButton text='Signup'/>
            <Link href='#' 
                color='#0F172A' 
                marginTop='1rem' 
                display='block' 
                textAlign='center' 
                fontSize='sm'
            >Don't have an account? Signup Here</Link>
        </Box>
        </Center>
    );
};