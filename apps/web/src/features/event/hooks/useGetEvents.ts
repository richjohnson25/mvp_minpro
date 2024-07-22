import { axiosInstance } from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"

export const useGetEvents = () => {
    const { data: dataEvents, isError: isErrorEvents } = useQuery({
        queryKey: ['get-events'],
        queryFn: async() => {
            const response = await axiosInstance.get('/events')
            return response.data.data
        }
    })

    return {
        dataEvents,
        isErrorEvents
    }
}