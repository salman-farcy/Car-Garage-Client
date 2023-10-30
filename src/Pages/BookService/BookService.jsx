import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const BookService = () => {
     const service = useLoaderData();
     const { title, _id, price, img } = service;
     const {user} = useContext(AuthContext)

     const handleBookService = event => {
          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const date = form.date.value;
          const email = user?.email;
          const text = form.text.value;

          const booking = {
               customarName: name,
               email,
               img,
               date,
               text,
               service: title,
               service_id: _id,
               price: price
          }

          console.log(booking);

          fetch('http://localhost:5000/bookings', {
               method: 'POST',
               headers:{
                    'content-type': 'application/json'
               },
               body: JSON.stringify(booking)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data.insertedId){
                    alert('service book successfully')
               }
          })
          
     }


     return (
          <div className="hero min-h-screen container mx-auto px-4">
               <div className="hero-content flex-col lg:flex-row bg-[#F3F3F3] border rounded-lg w-full p-0">
                    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                         <h2 className="text-center font-bold text-3xl pb-8">Book Service: {title}</h2>
                         <form onSubmit={handleBookService} className="card-body p-0">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                   <div className="form-control ">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" name="name" defaultValue={user?.displayName} placeholder="Name" className="input " required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name="date" placeholder="date" className="input " required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input " required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Due Amount</span>
                                        </label>
                                        <input type="text" name="Amount"  defaultValue={'$' + price} className="input " required />
                                   </div>
                              </div>

                              <div className="">
                                   <textarea type="text" name="text" className="textarea  w-full mt-7" rows="5" placeholder="Bio"></textarea>
                              </div>

                              <div className="form-control mt-6">
                                   <input className="btn capitalize bg-[#FF3811]" type="submit" value="Order Confirm" />
                              </div>
                         </form>
                    </div>
               </div>
          </div>

     );
};
export default BookService;