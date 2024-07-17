'use client'
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
    children: ReactNode;
}

const ReduxProvider: FC<Props> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider