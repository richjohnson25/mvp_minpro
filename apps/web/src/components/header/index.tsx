import Link from "next/link"

export default function Header(){
    return (
        <main className="flex justify-between items-center bg-blue-500 px-10 py-10 py-3 text-white">
            <section className="flex basis-1/2">
                <Link href={'/'}>
                    <h1 className="font-bold text-2xl">Tiket.com</h1>
                </Link>
            </section>
            <section className="flex basis-1/2 justify-end gap-4">
                <Link href={'/auth'}>
                    <h3>Login</h3>
                </Link>
                <Link href={'/auth/register'}>
                    <h3>Register</h3>
                </Link>
                <h3>EN|ID</h3>
            </section>
        </main>
    )
}