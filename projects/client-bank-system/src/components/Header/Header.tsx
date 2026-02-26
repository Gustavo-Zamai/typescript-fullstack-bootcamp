/*import { Box, 
        Center, 
        Image } 
        from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box>
            <Center bg='#0F172A' 
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
}*/

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { HeaderProps } from "../../utils/utils";

export const Header = ({ showMenu, menuContent }: HeaderProps) => {
  return (
    <Box as="header" bg='#0F172A' color='white' w='100%'>
      {/* Faixa Superior (Logo e Título) - Agora mais fina */}
      <Flex 
        align='center' 
        p='1rem 2rem' 
        justifyContent={showMenu ? 'space-between' : 'center'}
      >
        <Flex align='center'>
          <Image 
            src='https://placehold.co/100x100' 
            alt='Bank Logo' 
            w='50px' // Diminuímos o logo
            h='50px' 
            borderRadius='50%' 
            marginRight='1rem'
          />
          <Text as="h1" fontSize='2xl' fontWeight="bold">
            Banking System
          </Text>
        </Flex>
        {/* Faixa do Menu com avatar, saudação e botão de logout */}
        <Flex align='center' gap={4}>
            {showMenu && <Image src='https://placehold.co/50x50' alt='User Avatar' w='40px' h='40px' borderRadius='50%' marginLeft='1rem'/>}
            {showMenu && <Text>Welcome, User</Text>} {/* TODO Substituir "User" pelo nome real do usuário logado */}
            {showMenu && <Button bg='#3B82F6' size="sm" _hover={{ bg: '#1D4ED8' }}>Logout</Button>}
        </Flex>    
      </Flex>

      {/* Faixa do Menu (Só aparece se showMenu for true) */}
      {showMenu && (
        <Box bg='#1E293B' p='0.5rem 2rem' borderTop="1px solid #334155">
          {menuContent || (
            <Flex gap={4}>
                <Button bg='transparent' size="xs">Example</Button>
                <Button bg='transparent' size="xs">Example</Button>
                <Button bg='transparent' size="xs">Example</Button>
                <Button bg='transparent' size="xs">Example</Button>
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
}
