'use client'
import { MdDashboard, MdEvent, MdPayments } from "react-icons/md";
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Sidebar(){
    const auth = useSelector((state: any) => state.auth.auth)

    const display = auth?.role === 'ORGANIZER' ? 'block' : 'hidden';

    return (
        <main className={`h-full w-1/6 flex flex-col left-0 top-0 ${display}`}>
            <div>
                <Link href={'/organizer/dashboard'}>
                    <div className="flex flex-row p-4 text-xl items-center gap-4">
                        <MdDashboard />
                        <h3 className="">Dashboard</h3>
                    </div>
                </Link>
                <Link href={'/organizer/events'}>
                    <div className="flex flex-row p-4 text-xl items-center gap-4">
                        <MdEvent />
                        <h3 className="text-xl">Events</h3>
                    </div>
                </Link>
                <Link href={'/organizer/transactions'}>
                    <div className="flex flex-row p-4 text-xl items-center gap-4">
                        <MdPayments />
                        <h3 className="text-xl">Transactions</h3>
                    </div>
                </Link>
            </div>
        </main>
    )
}