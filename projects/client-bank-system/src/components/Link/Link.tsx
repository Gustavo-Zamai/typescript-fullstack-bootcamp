import { Link } from '@chakra-ui/react';
import { LinkProps } from '../../utils/utils';
 
export const LinkComponent = (props: LinkProps) => {
    return (
        <Link 
            href={props.href} 
            color='#0F172A' 
            marginTop='1rem' 
            display='block' 
            textAlign='center' 
            fontSize='sm'
        >{props.text}</Link>

    );
} 