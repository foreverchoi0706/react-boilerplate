import {Box, Img, ImgProps, Text} from "@chakra-ui/react";
import React, {createContext, FC, PropsWithChildren} from "react";
import {Link} from "react-router-dom";

interface IContext {
    id: number | null;
}

const Context = createContext<IContext>({
    id: null
});

interface IViewCount {
    value: number;
}

export const ViewCount: FC<IViewCount> = ({value}) => {
    return <Text bottom="20px" position="absolute" right="20px">{value}</Text>
}

export const Image: FC<ImgProps> = (props) => {
    return <Img _hover={{
        transform: "scale(1.2)",
        transitionDuration: "0.5s"
    }
    } {...props}/>;
}

export const Wrap: FC<PropsWithChildren<IContext>> = ({children, id}) => {
    const value = {id};
    return (
        <Context.Provider value={value}>
            <Link to={`/about/${id}`}>
                <Box backgroundColor="#e4e4e4" borderRadius="10px" overflow="hidden" padding="10px" position="relative">
                    {children}
                </Box>
            </Link>
        </Context.Provider>
    );
}

export default null;