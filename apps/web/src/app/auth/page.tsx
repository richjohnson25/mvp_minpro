'use client'
import { FaUser } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { loginSchema } from "@/features/auth/login/schemas/loginSchema";
import Link from "next/link";
import Image from "next/image";
import authImage from "@/../public/images/Login Register.png";

import { useLogin } from "@/features/auth/login/hooks/useLogin";

export default function LoginPage(){
    const { mutationLogin } = useLogin()

    return (
        <main className="relative">
            <section style={{ width: '100%', height: '1200px', position: 'relative' }}>
                <Image
                    src={authImage}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Page"
                />
                <div className="bg-slate-600/50 flex flex-col justify-center items-center absolute inset-0">
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
                                <FaUser />
                                <Field type="text" name="username" className="grow" placeholder="Email or username" />
                            </label>
                            <ErrorMessage name="username" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaUnlockAlt />
                                <Field type="password" name="password" className="grow" placeholder="Password" />
                            </label>
                            <ErrorMessage name="password" component={'div'} className="text-red-500" />
                            <label className="flex gap-2 text-white">
                                <Field type="checkbox" name="remember_me" />
                                Remember Me
                            </label>
                            <button type="submit" className="btn bg-blue-500 rounded text-white w-full my-4">
                                Login
                            </button>
                        </Form>
                    </Formik>
                    <div className="text-center text-white">Don&apos;t have an account? <Link href={'/auth/register'} className="text-sky-300 underline">Register</Link></div>
                </div>
            </section>
        </main>
    )
}