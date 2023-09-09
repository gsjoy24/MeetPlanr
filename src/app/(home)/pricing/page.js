import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/container';
import { GiCheckMark } from 'react-icons/gi';
import ButtonCheckout from '@/components/PayButton';
import UseLoadPrice from '@/hooks/UseLoadPrice';
const Pricing = async() => {
	const prices = await UseLoadPrice();
	return (
		<Container>
			<div className="my-16">
				<div className="text-center">
					<SectionTitle title={'Pricing Plans'}></SectionTitle>
					<p className="md:w-[600px] lg:w-[563px] mx-auto font-normal Normal text-[20px] text-[#5A7795]">
						When it comes to choosing the right Price, we know how easy it is to get overwhelmed with the number.
					</p>
				</div>

				<div className="grid lg:mt-[50px] gap-5 lg:grid-cols-3 md:grid-cols-2 mt-10">
				{
					prices?.map(price=>(
						<div key={price.id} className={`rounded-3xl max-w-[350px] card group w-full hover:bg-[#0B3558] text-[#0B3558] hover:text-white border transition-all shadow-md pb-10 duration-700 mx-auto ${price.nickname === "STANDARD" && "bg-[#0B3558] text-white"}`}>
							<div className="px-5">
								<p className="text-[22px] uppercase mt-[30px] font-bold">{ price.nickname}</p>
								<div className="flex items-center lg:text-[42px] uppercase my-2 font-bold">
									<span className="text-4xl lg:text-[40px] mt-[5px]">{price.unit_amount / 100}$</span>
								</div>
								<p className="text-[17px] uppercase font-bold">Yearly</p>
							</div>
							<hr className="borderBottom my-3" />
							<div className="Normal px-5 pb-6 font-normal">
								<p className="Medium mb-3 text-lg font-medium">Basic features</p>
								
								<ul>
								{
									price?.lookup_key ?
									price?.lookup_key?.split(',').map((sentence, index) => (
										<li key={index} className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>{sentence.trim()}</span>
										</li>
									))
									: <>
										<li className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>Connect one calendar</span>
										</li>
										<li className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>Create one active event type</span>
										</li>
										<li className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>Connect to Google Meet</span>
										</li>
										<li className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>Send automated event notifications</span>
										</li>
										<li className="flex items-center">
											<span className="mr-2 text-green-500">
												<GiCheckMark />
											</span>
											<span>24/7 email support</span>
										</li>
									</>
								}
								</ul>
							</div>
							<hr className="borderBottom"/>
							<div className="px-5">
								<ButtonCheckout priceName={price.nickname} price={price.unit_amount / 100} priceId={price.id} />
							</div>
						</div>
					
					))
				}
				</div>
			</div>
		</Container>
	);
};
export default Pricing;
