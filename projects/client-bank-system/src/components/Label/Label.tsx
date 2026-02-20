import { Box, Center, Input } from "@chakra-ui/react";
import { LabelProps } from "../../utils/utils";


export const Label = (props: LabelProps) => {
    return (
        <Box color={'white'}>
            <p>{props.label}</p>
            <Center flexDirection={'column'} marginBottom={'2rem'} color={'white'}>
                <Input id={props.id} type={props.type}></Input>
            </Center>
        </Box>
    );
}