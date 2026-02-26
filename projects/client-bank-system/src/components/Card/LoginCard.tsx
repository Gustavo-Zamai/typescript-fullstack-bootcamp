import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { InputCard } from '../Input/Input';
import { LoginButton } from '../Button/Button';
import { LinkComponent } from '../Link/Link';
import { login } from '../../services/login/login';


export const LoginCard = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
            <InputCard id='email' type='email' label='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}  /> 
            <InputCard id='password' type='password' label='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginButton text='Login' event={() => { login(email, password); console.log(email, password); }}/>
            <LinkComponent href='/signup' text="Don't have an account? Signup Here" />
        </Box>
        </Center>
    );
};