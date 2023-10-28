

import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


4
const Banner = () => {
     return (
          <div className="container mx-auto py-5 px-4">
               <div className="carousel w-full rounded-sm md:rounded-md lg:rounded-lg md:h-[550px] lg:h-[650px] xl:h-[750px]">
                    <div id="slide1" className=" carousel-item relative w-full ">
                         <img src={img1} className="w-full " />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide6" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                         <img src={img2} className="w-full" />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide1" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                         <img src={img3} className="w-full" />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide2" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                         <img src={img4} className="w-full" />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide3" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide5" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                         <img src={img5} className="w-full" />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide4" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide6" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                         <img src={img6} className="w-full" />
                         <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute flex justify-start items-center gap-5 h-full top-0 left-0  right-5  ">
                              <div className="pl-3 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8 space-y-1 sm:space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-7 ">
                                   <h2 className=' leading-4 sm:leading-5 md:leading-7 lg:leading-10  text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white'>Affordable <br />  Price For Car <br /> Servicing</h2>
                                   <p className='w-full lg:w-4/5 xl:w-3/5 text-white text-xs md:text-sm lg:text-base xl:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                   <div className="">
                                        <button className="btn-xs md:btn-sm btn btn-error rounded-md mr-2 sm:mr-3 md:mr-4 lg:mr-5 text-white text-xs md:text-sm lg:text-base">Discover More</button>
                                        <button className="btn-xs md:btn-sm btn btn-outline btn-error rounded-md text-white">Latest Project</button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide5" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-xs sm:btn-sm hover:bg-red-500 hover:text-white border-none btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;