import { Box, Center } from '@chakra-ui/react';
import { Label } from '../Label/Label';
import { LoginButton } from '../Button/Button';
import { LinkComponent } from '../Link/Link';


export const LoginCard = () => {
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
            <Center fontSize='2xl' marginBottom='3rem' color='#0F172A'>
                <h1>Login to your account</h1>
            </Center>
            <Label id='email' type='email' label='Enter your email' /> 
            <Label id='password' type='password' label='Enter your password' />
            <LoginButton text='Login'/>
            <LinkComponent href='/signup' text="Don't have an account? Signup Here" />
        </Box>
        </Center>
    );
};