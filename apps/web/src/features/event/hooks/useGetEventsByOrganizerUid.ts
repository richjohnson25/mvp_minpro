import { axiosInstance } from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"

export const useGetEventsByOrganizerUid = (organizer_uid: string) => {
    const token = localStorage.getItem('tkn')
    const { data: dataEventsByOrganizerUid, isError: isErrorEventsByOrganizerUid } = useQuery({
        queryKey: ['get-events', organizer_uid],
        queryFn: async() => {
            const response = await axiosInstance.get(`/events/${organizer_uid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.data
        }
    })

    return {
        dataEventsByOrganizerUid,
        isErrorEventsByOrganizerUid
    }
}