import { Box, Center, Input } from "@chakra-ui/react";
import { InputProps } from "../../utils/utils";


export const Label = (props: InputProps) => {
    return (
        <Box>
            <Center flexDirection={'column'} marginBottom={'2rem'} color={'white'} >
                <Input id={props.id} type={props.type} placeholder={props.label} value={props.value} onChange={props.onChange}
                w='80%' 
                color='#0F172A' 
                border='1px solid #000000' 
                borderRadius='25px' 
                padding='0.5rem'></Input>
            </Center>
        </Box>
    );
}