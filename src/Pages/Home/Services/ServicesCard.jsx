
import { FaArrowRightLong } from "react-icons/fa6";


const ServicesCard = ({ service }) => {
     const { title, img, price } = service;


     return (
          <div className="card bg-base-100 rounded-md shadow-xl border">
               <figure className="p-4">
                    <img src={img} alt="Shoes" className="rounded-md" />
               </figure>
               <div className="p-4 space-y-4">
                    <h2 className="card-title">{title}</h2>

                    <div className="text-red-600 flex justify-between">
                         <p className="font-bold">Price: ${price}</p>
                         <a href=""><FaArrowRightLong></FaArrowRightLong></a>
                    </div>
               </div>
          </div>
     );
};

export default ServicesCard; 