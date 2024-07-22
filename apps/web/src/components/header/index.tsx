'use client'
import { setAuthLogout } from "@/redux/slices/authSlice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"

export default function Header(){
    const auth = useSelector((state: any) => state.auth.auth)

    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('tkn')

        dispatch(setAuthLogout());

        router.push('/auth')
    }

    return (
        <main className={`flex justify-between items-center bg-blue-500 top-0 px-10 py-10 py-3 text-white`}>
            <section className="flex basis-1/2">
                <Link href={'/'}>
                    <h1 className="font-bold text-2xl">Tiket.com</h1>
                </Link>
            </section>
            <section className="flex basis-1/2 justify-end items-center gap-4">
                {
                    auth === null?
                    <>
                        <Link href={'/auth'}>
                            <h3>Login</h3>
                        </Link>
                        <Link href={'/auth/register'}>
                            <h3>Register</h3>
                        </Link>
                    </>
                    :
                    <button onClick={handleLogout} className="btn bg-yellow-300 text-black">Logout</button>
                }
                <h3>EN|ID</h3>
            </section>
        </main>
    )
}