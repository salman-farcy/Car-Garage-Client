
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
     const {_id, title, img, price } = service;


     return (
          <div className="card bg-base-100 rounded-md shadow-xl border">
               <figure className="p-4">
                    <img src={img} alt="Shoes" className="rounded-md" />
               </figure>
               <div className="p-4 space-y-4">
                    <h2 className="card-title">{title}</h2>

                    <div className="text-red-600 flex justify-between">
                         <p className="font-bold">Price: ${price}</p>
                         <Link to={`/book/${_id}`}><FaArrowRightLong></FaArrowRightLong></Link>
                    </div>
               </div>
          </div>
     );
};

export default ServicesCard; 