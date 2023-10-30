

const BookingRow = ({ booking, handleDelite }) => {
     const { _id, customarName, email, date, img, price, service } = booking;

     return (
          <tr>
               <th>
                    <label>
                         <button onClick={() => handleDelite(_id)} className="btn btn-sm btn-square rounded-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4  w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                         </button>
                    </label>
               </th>
               <td>
                    <div className="flex items-center space-x-3">
                         <div className="avatar">
                              <div className="mask w-8 h-8 md:w-10 md:h-10  lg:w-16 lg:h-16 xl:w-20 xl:h-20">
                                   <img src={img} alt="booking product" />
                              </div>
                         </div>
                         <div>
                              <div className="font-bold">{service}</div>
                              <div className="text-sm opacity-50">{date}</div>
                         </div>
                    </div>
               </td>
               <td>
                    {customarName}
               </td>
               <td>
                    <p className="hidden md:block">{email}</p>
               </td>
               <td>${price}</td>
               <th>
                    <button className="btn btn-ghost btn-xs">details</button>
               </th>
          </tr>
     );
};

export default BookingRow;