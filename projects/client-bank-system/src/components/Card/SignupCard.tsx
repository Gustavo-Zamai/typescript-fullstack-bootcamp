import { Box, Center } from '@chakra-ui/react';
import { Label } from '../Label/Label';
import { LoginButton } from '../Button/Button';
import { LinkComponent } from '../Link/Link';
import { login } from '../../services/login/login';
import { useState } from 'react';

export const SignupCard = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            <Label id='email' type='email' label='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <Label id='password' type='password' label='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Label id='confirmPassword' type='password' label='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <LoginButton text='Signup' event={() => login(email, password)}/>
            <LinkComponent href='/login' text="Already have an account? Login Here" />
        </Box>
        </Center>
    );
};