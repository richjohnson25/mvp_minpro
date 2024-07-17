'use client'
import { BsPerson } from "react-icons/bs";
import { FaUnlockAlt } from "react-icons/fa";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { loginSchema } from "@/features/auth/login/schemas/loginSchema";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { setAuth } from "@/redux/slices/authSlice";

export default function LoginPage(){
    const dispatch = useDispatch()
    const router = useRouter()

    const {mutate: mutationLogin} = useMutation({
        mutationFn: async({username, password}: {username: string, password: string}) => {
            return await axios.post('http://localhost:8000/auth', {
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

    return (
        <main className="flex justify-center">
            <section className="w-[40%] rounded-md border-2 px-8 py-4">
                <h1 className="font-bold text-2xl py-4 text-center">Login</h1>
                <Formik
                    validationSchema={loginSchema}
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        mutationLogin({username: values.username, password: values.password})
                    }}
                >
                    <Form>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <BsPerson />
                            <Field type="text" name="username" className="grow" placeholder="Email or username" />
                        </label>
                        <ErrorMessage name="username" component={'div'} className="text-red-500" />
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <FaUnlockAlt />
                            <Field type="text" name="password" className="grow" placeholder="Password" />
                        </label>
                        <ErrorMessage name="password" component={'div'} className="text-red-500" />
                        <label className="flex gap-2">
                            <Field type="checkbox" name="remember_me" />
                            Remember Me
                        </label>
                        <button type="submit" className="btn bg-blue-500 rounded text-white w-full my-4">
                            Login
                        </button>
                    </Form>
                </Formik>
                <div className="text-center">Don&apos;t have an account? Register</div>
            </section>
        </main>
    )
}