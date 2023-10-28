import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";




const Services = () => {
     const [services, setServices] = useState([])


     useEffect( () => {
          fetch('services.json')
          .then(res => res.json())
          .then(data => setServices(data))
     }, [])

     return (
          <div className="container mx-auto py-10">
               <div className="text-center">
                    <h3 className="text-3xl text-orange-600  font-bold">Our Services</h3>
                    <h2 className="text-5xl py-5">Our Service Area</h2>
                    <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    
                    {
                         services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
               </div>
          </div>
     );
};

export default Services;