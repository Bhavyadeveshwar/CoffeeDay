import React from 'react'
import HomeCoffee from "../../assets/Photo/HomeCoffee.png"

function Home() {
    return (
        <div className='min-h-[550px] sm:min-h-[500px] bg-brandDark flex justify-center
     items-center text-white'>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section  */}
                    <div className='order-1 sm:order-2'>
                        <h1 className='text-5xl sm:text-7xl lg:text-7xl font-bold'>
                            Best choice for exceptional <span className='text-primary font-cursive'>
                                Coffee</span> Obsessions</h1>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary
                                border-2 border-primary rounded-full px-4 py-2 text-white 
                                hover:scale-105 duration-200 relative'>
                                Coffee and you
                            </button>
                        </div>

                    </div>


                    {/* Photo content section  */}
                    <div className='min-h-[450px] flex justify-center items-center
                    order-1 sm:order-2'>
                        <img src={HomeCoffee} alt="Home" className='w-[300px] sm:w-[450px]
                         sm:scale-125 mx-auto spin' />
                        <div className='bg-gradient-to-r from-primary to-secondary
                         absolute top-28 right-20 p-3 rounded-xl'>
                            <h1>Hey Coffee Lover</h1>
                        </div>
                        {/* <div className='bg-gradient-to-r from-primary to-secondary
                         absolute bottom-20 left-1/3 p-3 rounded-xl'>
                            <h1>Best coffee</h1>
                        </div> */}
                    </div>



                </div>
            </div>
        </div>



    )
}

export default Home