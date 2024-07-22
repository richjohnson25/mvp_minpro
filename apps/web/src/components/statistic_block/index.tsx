'use client'
import { MdEvent, MdEventNote, MdPayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useGetEvents } from "@/features/event/hooks/useGetEvents"
import { useGetTransactions } from "@/features/event/hooks/useGetTransactions"
import { useSelector } from "react-redux"
import { useGetEventsByOrganizerUid } from "@/features/event/hooks/useGetEventsByOrganizerUid";


export default function StatisticBlock(information: any){
    const auth = useSelector((state: any) => state.auth.auth)
    const organizer_uid = auth?.uid
    const { dataEvents, isErrorEvents } = useGetEvents()
    const { dataTransactions, isErrorTransactions } = useGetTransactions()
    const { dataEventsByOrganizerUid, isErrorEventsByOrganizerUid } = useGetEventsByOrganizerUid(organizer_uid)

    return (
        <section className="flex flex-row p-4 gap-4 bg-white">
            <div className="flex flex-row border p-4">
                <div className="bg-sky-400 p-2">
                    <MdEvent className="text-5xl" />
                </div>
                <div className="flex flex-col">
                    <h3 className="px-4">Events Organized</h3>
                    <div className="text-2xl font-bold px-4">{dataEventsByOrganizerUid ? dataEventsByOrganizerUid.length : 0}</div>
                </div>
            </div>
            <div className="flex flex-row border p-4">
                <div className="bg-blue-400 p-2">
                    <MdEventNote className="text-5xl" />
                </div>
                <div className="flex flex-col">
                    <h3 className="px-4">Total Organized Events</h3>
                    <div className="text-2xl font-bold px-4">{dataEvents ? dataEvents.length : 0}</div>
                </div>
            </div>
            <div className="flex flex-row border p-4">
                <div className="bg-yellow-400 p-2">
                    <FaUsers className="text-5xl" />
                </div>
                <div className="flex flex-col">
                    <h3 className="px-4">Attendee Registrations</h3>
                    <div className="text-2xl font-bold px-4">{dataTransactions ? dataTransactions.length : 0}</div>
                </div>
            </div>
            <div className="flex flex-row border p-4">
                <div className="bg-green-500 p-2">
                    <MdPayments className="text-5xl" />
                </div>
                <div className="flex flex-col">
                    <h3 className="px-4">Event Transactions</h3>
                    <div className="text-2xl font-bold px-4">{dataTransactions ? dataTransactions.length : 0}</div>
                </div>
            </div>
        </section>
    )
}