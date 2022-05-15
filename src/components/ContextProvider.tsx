import React, { createContext, Dispatch, FC, ReactNode, useReducer, } from "react";
import rootReducer, { Action, IRootState, rootState } from "@/reducers/root";

interface IContext {
    root: IRootState;
    dispatch: Dispatch<Action>;
}

interface IProps {
    children: ReactNode;
}

export const Context = createContext<IContext>(null);

const ContextProvider: FC<IProps> = ({ children }) => {
    const [root, dispatch] = useReducer(rootReducer, rootState);
    return (
        <Context.Provider value={{ root, dispatch }}>{children}</Context.Provider>
    );
};

export default ContextProvider;
