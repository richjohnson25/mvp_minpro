'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
    children: ReactNode
}

const TanstackProvider: FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default TanstackProvider;