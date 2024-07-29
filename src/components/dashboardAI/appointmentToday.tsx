import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointments from '@/components/appointment/all-appointments'
import InfoBar from '@/components/infobar'
import Section from '@/components/section-label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const DashboardAppointment = async (props: Props) => {
  const user = await currentUser()

  if (!user) return null
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  const today = new Date()

  if (!domainBookings)
    return (
      <div className="w-full flex justify-center">
        <p>No Appointments</p>
      </div>
    )

  const bookingsExistToday = domainBookings.bookings.filter(
    (booking) => booking.date.getDate() === today.getDate()
  )

  return (
    <>
   
     
        <div className="sm:w-[340px] md:w-[340px] lg:w-[400px] ">
          <Section
            label="Bookings For Today"
            message="All your bookings for today are mentioned below."
          />
          {bookingsExistToday.length ? (
            bookingsExistToday.map((booking) => (
              <Card
                key={booking.id}
                className="rounded-xl overflow-hidden mt-4 sm:w-[340px] md:w-[340px] lg:w-[400px]"
              >
                <CardContent className="p-0 flex">
                  <div className="w-4/12 text-xl bg-gradient-to-r from-purple-300 via- to-cyan-300  py-10 flex justify-center items-center font-bold">
                    {booking.slot}
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between w-full p-3">
                      <p className="text-sm">
                        created
                        <br />
                        {booking.createdAt.getHours()}{' '}
                        {booking.createdAt.getMinutes()}{' '}
                        {booking.createdAt.getHours() > 12 ? 'PM' : 'AM'}
                      </p>
                      <p className="text-sm">
                        Domain <br />
                        {booking.Customer?.Domain?.name}
                      </p>
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="w-full flex items-center p-3 gap-2">
                      <Avatar>
                        <AvatarFallback>{booking.email[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm">{booking.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
               <Card
                
                className="rounded-xl overflow-hidden mt-4  sm:w-[340px] md:w-[340px] lg:w-[400px]"
              >
                <CardContent className="p-0 flex">
                  <div className="w-4/12 text-sm bg-gradient-to-r from-purple-300 via- to-cyan-300  py-10 flex justify-center items-center font-bold">
                    No Meeting <br />
                    Today
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between w-full p-3">
                      <p className="text-sm">
                        created
                        <br />
                        <span className='text-[12px]'>No Time Detail</span>
                      </p>
                      <p className="text-sm">
                        Domain <br />
                        <span className='text-[12px]'> DataQueryAi </span>
                      </p>
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="w-full flex items-center p-3 gap-2">
                      <Avatar>
                        <AvatarFallback> P </AvatarFallback>
                      </Avatar>
                      <p className="text-[12px]">Not Email Avaliable Today </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          )}
        </div>
    
    </>
  )
}

export default DashboardAppointment
