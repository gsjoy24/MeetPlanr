'use client';
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/container';
import { FaDollarSign } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import Link from 'next/link';

const PricingSection = () => {
	return (
		<Container>
			<section>
				<div className="my-16">
					<div className="text-center">
						<SectionTitle title={'Pricing Plans'}></SectionTitle>
						<p className="md:w-[600px] lg:w-[563px] mx-auto font-normal Normal text-[20px] text-[#5A7795]">
							When it comes to choosing the right Price, we know how easy it is to get overwhelmed with the number.
						</p>
					</div>

					<div className="grid lg:mt-[50px] grid-cols-1 gap-[30px] lg:grid-cols-3 md:grid-cols-2 mt-10">
						{/* Plan 1 */}
						<div className="card group lg:w-[310px] rounded-3xl xl:w-auto bg-base-100 hover:bg-[#0B3558] text-[#0B3558] hover:text-white border shadow-md pb-10 duration-300 mx-auto">
							<div className="px-5">
								<p className="text-[22px] uppercase mt-[30px] font-bold">Basic</p>
								<div className="flex items-center lg:text-[42px] uppercase my-2 font-bold">
									<span className="text-4xl lg:text-[40px] mt-[5px]">Free</span>
								</div>
								<p className="text-[17px] uppercase font-bold">Yearly</p>
							</div>
							<hr className="borderBottom my-3" />
							<div className="Normal px-5 pb-6 font-normal">
								<p className="Medium mb-3 text-lg font-medium">Basic features</p>
								<div className="text-[#5A7795] space-y-2 group-hover:text-white">
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect one calendar</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Create one active event type</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect to Google Meet</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Send automated event notifications</span>
									</p>
								</div>
							</div>
							<hr className="borderBottom" />
							<div className="px-5">
								<button className="text-[16px] font-semibold text-[#0B3558] group-hover:text-white bg-sky-100 group-hover:bg-sky-800 border border-[#0b3558af] px-8 py-3 rounded-lg mt-6">
									<Link href="/payment" data-testid="buyPlanBtn">
										Choose Plan
									</Link>
								</button>
							</div>
							<Link
								href="/payment"
								className="text-[#0B3558] group-hover:text-white text-sm px-5 mt-5 underline font-medium"
							>
								Get Your 30 Day Free Trail
							</Link>
						</div>

						{/* Plan 2 */}
						<div className="card lg:w-[310px] rounded-3xl xl:w-auto bg-[#0B3558] text-white border shadow-md pb-10 mx-auto">
							<div className="px-5">
								<div className="mt-[30px] flex items-center">
									<span className="text-[22px] uppercase font-bold mr-3">Standard</span>
									<span className="text-[14px] text-sky-500 bg-[#25455f] font-semibold rounded-full py-[1px] px-3">
										Recommended
									</span>
								</div>
								<div className="flex items-center text-4xl lg:text-[42px] uppercase my-2 font-bold Medium">
									<span className="lg:text-[40px] mt-[5px] -mr-1 -ml-2">
										<FaDollarSign />
									</span>
									<span>15</span>
								</div>
								<p className="text-[17px] uppercase font-bold Bold">Yearly</p>
							</div>
							<hr className="borderBottom my-3" />
							<div className="pb-6 px-5 font-normal Normal text-[16px]">
								<p className="Medium mb-3 text-lg font-medium">Standard features plus</p>
								<div className="space-y-2 text-white">
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect four calendar</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Create unlimited event types</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect to Google Meet</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Send automated event notifications</span>
									</p>
								</div>
							</div>
							<hr className="borderBottom" />
							<div className="px-5">
								<button className="text-[16px] font-semibold text-white bg-[#0b355831] bg-sky-800 border border-[#0b3558af] px-8 py-3 rounded-lg mt-6">
									<Link href="/payment">Choose Plan</Link>
								</button>
							</div>
							<Link href="/payment" className="px-5 mt-5 text-sm font-medium text-white underline">
								Get Your 30 Day Free Trail
							</Link>
						</div>

						{/* Plan 3 */}
						<div className="card group lg:w-[310px] rounded-3xl xl:w-auto bg-base-100 hover:bg-[#0B3558] text-[#0B3558] hover:text-white border shadow-md pb-10 duration-300 mx-auto">
							<div className="px-5">
								<p className="text-[22px] uppercase mt-[30px] font-bold Medium">Premium</p>
								<div className="flex items-center text-4xl lg:text-[42px] uppercase my-2 font-bold Medium">
									<span className="lg:text-[40px] mt-[5px] -mr-1 -ml-2">
										<FaDollarSign />
									</span>
									<span>25</span>
								</div>
								<p className="text-[17px] uppercase font-bold Bold">Yearly</p>
							</div>
							<hr className="borderBottom my-3" />
							<div className="pb-6 px-5 font-normal Normal text-[16px]">
								<p className="Medium mb-3 text-lg font-medium">Premium features plus</p>
								<div className="text-[#5A7795] space-y-2 group-hover:text-white">
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect unlimited calendar</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Create group events</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Connect to Google Meet</span>
									</p>
									<p className="flex items-center">
										<span className="mr-2 text-green-500">
											<GiCheckMark />
										</span>
										<span>Send automated event notifications</span>
									</p>
								</div>
							</div>
							<hr className="borderBottom" />
							<div className="px-5">
								<button className="text-[16px] font-semibold text-[#0B3558] group-hover:text-white bg-sky-100 group-hover:bg-sky-800 border border-[#0b3558af] px-8 py-3 rounded-lg mt-6">
									<Link href="/payment">Choose Plan</Link>
								</button>
							</div>
							<Link href="" className="text-[#0B3558] group-hover:text-white text-sm px-5 mt-5 underline font-medium">
								Get Your 30 Day Free Trail
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default PricingSection;
