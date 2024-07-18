import { axiosInstance } from "@/utils/axiosInstance"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const usePostUser = () => {
    const {mutate: mutationRegisterUser} = useMutation({
        mutationFn: async({first_name, last_name, username, phone_number, role, email, password}: any) => {
            await axiosInstance.post('/auth/register', {
                first_name,
                last_name,
                username,
                phone_number,
                role,
                email,
                password
            })
        },
        onSuccess: (response) => {
            toast.success('Registration Success!')
        },
        onError: (error) => {
            toast.error('Registration Failed!')
        }
    })

    return {
        mutationRegisterUser
    }
}