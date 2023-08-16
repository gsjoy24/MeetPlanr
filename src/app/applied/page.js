import SectionTitle from "@/Components/SectionTitle";

const Pricing = () => {
    return (

        <>




            {/* Pricing Plans */}
            <section>

                <div className='lg:my-[100px] my-10'>
                    <div className='text-center '>
                        <SectionTitle className="my-5" title={"Pricing Plans"}></SectionTitle>
                        <p className='lg:w-[563px] mx-auto font-normal Normal text-lg'>When it comes to choosing the right Price, we know how easy it is to get overwhelmed with the number.

                        </p>
                    </div>

                    <div className='grid  px-4 xl:px-0 xl:mx-[100px] lg:mt-[50px] grid-cols-1 gap-[30px] lg:grid-cols-3 md:grid-cols-2'>
                        {/* 1 */}
                        <div className="card lg:w-[310px]  rounded-[25px] xl:w-auto  bg-base-100 shadow-xl text-center bg_stander text-[#272223] ">
                            <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Basic</h2>
                            <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                            <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                            <hr className='borderBottom mb-[31px]' />


                            <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                <h2 className='text-lg  font-medium Medium'>Perfect for Individual</h2>
                                <p>50 GB Cloud Storage</p>
                                <p>
                                    Automated Server Backup
                                </p>
                                <p>24/7 Support</p>
                                <p>Customer Management</p>

                            </div>

                            <hr className='borderBottom mb-[31px]' />


                            <div className='mt-[30px] w-full  mx-auto py-4 px-[44px] ChosePlan'>
                                <button className='bg-[#465AF7] hover:bg-sky-950 text-white px-8 py-3 rounded-lg mt-6'>Choose Plan</button>

                            </div>
                            <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center hover:text-white mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                        </div>

                        {/* 2 */}




                        <div className="card lg:w-[310px] bg_stander text-[#272223]  rounded-[25px] xl:w-auto  bg-base-100 shadow-xl text-center">
                            <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Standard</h2>
                            <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                            <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                            <hr className='borderBottom mb-[31px]' />


                            <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                <h2 className='text-lg font-medium Medium'>Perfect for Individual</h2>
                                <p>50 GB Cloud Storage</p>
                                <p>
                                    Automated Server Backup
                                </p>
                                <p>24/7 Support</p>
                                <p>Customer Management</p>

                            </div>

                            <hr className='borderBottom mb-[31px]' />


                            <div className='mt-[30px] w-full  mx-auto py-4 px-[44px] ChosePlan'>
                                <button className='bg-[#465AF7] hover:bg-sky-950 text-white px-8 py-3 rounded-lg mt-6'>Choose Plan</button>

                            </div>
                            <h1 className='text-[14px] font-medium Medium text-[#783FBE] underline text-center hover:text-white mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                        </div>

                        {/* 3 */}

                        <div className="card lg:w-[310px] bg_stander  text-[#272223]  rounded-[25px] xl:w-auto   bg-base-100 shadow-xl text-center">
                            <h2 className=' text-[20px] uppercase mt-[30px] font-medium Medium'>Premium</h2>
                            <h1 className=' lg:text-[50px] uppercase mt-[23px] font-medium Medium'>$65.99</h1>
                            <p className=' text-[16px] uppercase mt-[24px] pb-[31px] font-bold Bold'>Yearly</p>

                            <hr className='borderBottom mb-[31px] bg-white' />


                            <div className='space-y-[17px] pb-[31px]   font-normal Normal text-lg'>
                                <h2 className='text-lg  font-medium Medium'>Perfect for Individual</h2>
                                <p>50 GB Cloud Storage</p>
                                <p>
                                    Automated Server Backup
                                </p>
                                <p>24/7 Support</p>
                                <p>Customer Management</p>

                            </div>

                            <hr className='borderBottom mb-[31px]' />




                            <div className='mt-[30px] w-full  mx-auto py-4 px-[44px] ChosePlan'>
                                <button className='bg-[#465AF7] hover:bg-sky-950 text-white px-8 py-3 rounded-lg mt-6'>Choose Plan</button>

                            </div>
                            <h1 className='text-[14px] font-medium Medium  text-[#783FBE] hover:text-white underline text-center mt-[21px] mb-[30px]'>Get Your 30 Day Free Trail</h1>




                        </div>

                    </div>
                </div>
            </section>


        </>


    )
}
export default Pricing;