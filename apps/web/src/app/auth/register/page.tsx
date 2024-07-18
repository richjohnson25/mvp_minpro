'use client'
import { registerSchema } from "@/features/auth/register/schemas/registerSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaRegUser, FaUser, FaCircleUser, FaLock } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import authImage from "@/../public/images/Login Register.jpg"

import { usePostUser } from "@/features/auth/register/hooks/usePostUser";

export default function RegisterPage(){
    const { mutationRegisterUser } = usePostUser()
    
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
                    <h1 className="font-bold text-2xl py-4 text-center text-white">Register</h1>
                    <Formik
                        validationSchema={registerSchema}
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            username: '',
                            phone_number: '',
                            role: '',
                            email: '',
                            password: '',
                            confirm_password: ''
                        }}
                        onSubmit={(values) => {
                            mutationRegisterUser({
                                first_name: values.first_name,
                                last_name: values.last_name,
                                username: values.username,
                                phone_number: values.phone_number,
                                role: values.role,
                                email: values.email,
                                password: values.password
                            })
                        }}
                    >
                        <Form>
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaRegUser />
                                <Field type="text" name="first_name" className="grow" placeholder="Enter First Name" />
                            </label>
                            <ErrorMessage name="first_name" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaUser />
                                <Field type="text" name="last_name" className="grow" placeholder="Enter Last Name" />
                            </label>
                            <ErrorMessage name="last_name" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaCircleUser />
                                <Field type="text" name="username" className="grow" placeholder="Enter Username" />
                            </label>
                            <ErrorMessage name="username" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <IoCallSharp />
                                <Field type="text" name="phone_number" className="grow" placeholder="Enter Phone Number" />
                            </label>
                            <ErrorMessage name="phone_number" component={'div'} className="text-red-500" />
                            <Field name="role" as="select" className="select select-bordered w-full my-2">
                                <option value="" disabled selected>Select Role</option>
                                <option value="PARTICIPANT">PARTICIPANT</option>
                                <option value="ORGANIZER">ORGANIZER</option>
                            </Field>
                            <ErrorMessage name="role" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <MdAlternateEmail />
                                <Field type="text" name="email" className="grow" placeholder="Enter Email" />
                            </label>
                            <ErrorMessage name="email" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaLock />
                                <Field type="password" name="password" className="grow" placeholder="Enter Password" />
                            </label>
                            <ErrorMessage name="password" component={'div'} className="text-red-500" />
                            <label className="input input-bordered flex items-center gap-2 my-2">
                                <FaLock />
                                <Field type="password" name="confirm_password" className="grow" placeholder="Confirm Password" />
                            </label>
                            <ErrorMessage name="confirm_password" component={'div'} className="text-red-500" />
                            <button type="submit" className="btn bg-blue-500 rounded text-white w-full my-2">
                                Register
                            </button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    )
}