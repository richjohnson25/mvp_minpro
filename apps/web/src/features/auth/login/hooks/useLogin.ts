import { setAuth } from "@/redux/slices/authSlice"
import { axiosInstance } from "@/utils/axiosInstance"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

export const useLogin = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const {mutate: mutationLogin} = useMutation({
        mutationFn: async({username, password}: {username: string, password: string}) => {
            return await axiosInstance.post('/auth', {
                username,
                password
            })
        },
        onSuccess: (response) => {
            dispatch(setAuth(response.data.data))
            localStorage.setItem('tkn', response.data.data.token)
            toast.success(response.data.message)
            router.push('/')
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    return {
        mutationLogin
    }
}