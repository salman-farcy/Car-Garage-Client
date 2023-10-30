import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";


const Bookings = () => {
     const { user } = useContext(AuthContext)
     const [bookings, setBookings] = useState([]);


     const url = `http://localhost:5000/bookings?email=${user?.email}`
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setBookings(data))
     }, [])


     const handleDelite = id => {
          const proceed = confirm('are you sure you want to delete')
          if (proceed) {
               fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         if (data.deletedCount > 0) {
                              alert('Delete is susses full')
                              const remaining = bookings.filter(booking => booking._id !== id)
                              setBookings(remaining)
                         }
                    })
          }
     }

     return (
          <div className="container mx-auto py-10">

               <div className="overflow-x-auto">
                    <table className="table">
                         <thead>
                              <tr>
                                   <th>
                                        <label>
                                             <button className="flex items-center justify-center btn-sm bg-[#F2F2F2]">
                                                  <p className="text-base font-bold ">{bookings.length}</p>
                                             </button>
                                        </label>
                                   </th>
                                   <th>Service</th>
                                   <th>Customar Name</th>
                                   <th> <p className="hidden md:block">Email</p></th>
                                   <th>Price</th>
                                   <th></th>
                              </tr>
                         </thead>

                         <tbody>

                              {
                                   bookings.map(booking => <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                        handleDelite={handleDelite}
                                       
                                   ></BookingRow>)
                              }

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Bookings;