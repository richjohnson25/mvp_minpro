'use client'
import { FaTrain, FaPlane, FaBus, FaHotel, FaTicket } from "react-icons/fa6";
import { RiShip2Fill } from "react-icons/ri";
import { MdApartment, MdTour } from "react-icons/md";
import Image from "next/image";
import homeDraper from "@/../public/images/Homepage.png";
import { useGetEvents } from "@/features/event/hooks/useGetEvents";
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state: any) => state.auth.auth)
  const { dataEvents, isErrorEvents } = useGetEvents()

  return (
    <main className="relative">
      <section style={{ width: '100%', height: '500px', position: 'relative' }}>
        <Image
          src={homeDraper}
          fill
          style={{ objectFit: 'cover' }}
          alt="Home"
        />
        <div className="flex flex-col justify-center items-center gap-4 absolute inset-0">
          <h1 className="text-3xl font-bold text-white shadow-md">Hi {auth?.first_name}, choose your event here</h1>
          <div className="flex items-center justify-center mt-6">
            <div className="bg-white shadow-md rounded-lg flex items-center p-2 gap-2">
              <input
                type="text"
                className="px-2 py-2 w-64 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Search..."
              />
              <button className="btn bg-blue-500 rounded-md text-white px-10 py-2">Search</button>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="flex flex-row justify-center gap-4">
              <button className="btn rounded-full">
                <FaTrain />
                Train
              </button>
              <button className="btn rounded-full">
                <FaPlane />
                Plane
              </button>
              <button className="btn rounded-full">
                <RiShip2Fill />
                Ship
              </button>
              <button className="btn rounded-full">
                <FaBus />
                Bus
              </button>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <button className="btn rounded-full">
                <FaHotel />
                Hotel
              </button>
              <button className="btn rounded-full">
                <MdApartment />
                Villa & Apartment
              </button>
              <button className="btn rounded-full">
                <FaTicket />
                Events
              </button>
              <button className="btn rounded-full">
                <MdTour />
                Tours
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <h1 className="text-3xl font-bold">Check What&apos;s Popular Here</h1>
      </section>
    </main>
  )
}
