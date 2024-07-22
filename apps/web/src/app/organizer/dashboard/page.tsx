'use client'
import { useSelector } from "react-redux";
import { useGetTransactions } from "@/features/event/hooks/useGetTransactions";
import { useGetEvents } from "@/features/event/hooks/useGetEvents";
import StatisticBlock from "@/components/statistic_block";

export default function OrganizerDashboardPage(){
    const auth = useSelector((state: any) => state.auth.auth)
    const { dataEvents, isErrorEvents } = useGetEvents()
    const { dataTransactions, isErrorTransactions } = useGetTransactions()

    return (
        <main className="flex flex-col justify-center items-center py-4 gap-4 bg-gray-200">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <h2 className="text-2xl font-bold">Welcome, {auth?.first_name} {auth?.last_name}</h2>
            <StatisticBlock />
            <section>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Organized Events</h2>
                    <table className="table-auto border border-collapse">
                        <thead>
                            <tr className="border border-b-2 border-b-black">
                                <th className="px-2">No.</th>
                                <th className="px-2">Name</th>
                                <th className="px-2">Location</th>
                                <th className="px-2">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataEvents?.map((item: any, index: number) => {
                                    return (
                                        <tr key={index} className="border border-b-2 border-b-black">
                                            <th className="px-2">{index+1}</th>
                                            <td className="px-2">{item.name}</td>
                                            <td className="px-2">{item.location}</td>
                                            <td className="px-2">{item.event_categories.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Transactions List</h2>
                    <table className="table-auto border border-collapse">
                        <thead>
                            <tr className="border border-b-2 border-b-black">
                                <th className="px-2">No.</th>
                                <th className="px-2">Participant Name</th>
                                <th className="px-2">Event</th>
                                <th className="px-2">No. of Tickets</th>
                                <th className="px-2">Amount Paid</th>
                                <th className="px-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataTransactions?.map((item: any, index: number) => {
                                    return (
                                        <tr key={index} className="border border-b-2 border-b-black">
                                            <th className="px-2">{index+1}</th>
                                            <td className="px-2">{item.participants.first_name} {item.participants.last_name}</td>
                                            <td className="px-2">{item.events.name}</td>
                                            <td className="px-2">{item.number_of_tickets}</td>
                                            <td className="px-2">{item.amount_paid}</td>
                                            <td className="px-2">{item.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <section></section>
        </main>
    )
}