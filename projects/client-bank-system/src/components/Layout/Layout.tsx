/*import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};*/

import { Box } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, showMenu }: any) => {
    return (
        <>
            <Header showMenu={showMenu} />
            <Box as="main" p="4">
                {children}
            </Box>
            <Footer />
        </>
    )
};