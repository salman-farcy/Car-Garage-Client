
import parts from '../../assets/images/about_us/parts.jpg'
import personn from '../../assets/images/about_us/person.jpg'


const About = () => {
     return (
          <div className="hero container mx-auto px-4 py-10">
               <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 relative">
                         <img src={personn} className="md:3/4 lg:w-4/5 lg:h-96 rounded-lg shadow-2xl" />
                         <img src={parts} className='md:4/12 lg:w-6/12 h-60 absolute top-1/2 right-16 border-white border-8 rounded-md' alt="" />
                    </div>
                    <div className="w-full space-y-4 lg:w-1/2">
                         <h2 className="text-red-500 font-bold">About Us</h2>
                         <h3 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h3>
                         <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                         <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                         <button className="btn btn-error">Get More Info</button>
                    </div>
               </div>
          </div>
     );
};

export default About;