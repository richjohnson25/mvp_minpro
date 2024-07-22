import { axiosInstance } from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"

export const useGetTransactions = () => {
    const { data: dataTransactions, isError: isErrorTransactions } = useQuery({
        queryKey: ['get-transactions'],
        queryFn: async() => {
            const response = await axiosInstance.get('/transactions')
            return response.data.data
        }
    })

    return {
        dataTransactions,
        isErrorTransactions
    }
}