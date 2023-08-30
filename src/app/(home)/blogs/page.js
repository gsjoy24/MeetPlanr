import Image from 'next/image';
import customer from '../../../assets/Untitled-design-6.jpg';
import img2 from '../../../assets/card2.png';
import img3 from '../../../assets/card3.jpg';
import img4 from '../../../assets/card4.jpg';
import img5 from '../../../assets/card5.jpg';
import img6 from '../../../assets/card7.jpg';
import mobile from '../../../assets/phone.webp';
import ios from '../../../assets/icon-apple.png';
import android from '../../../assets/icon-android.png';
import people from '../../../assets//setmore-people-community.webp';

import Link from 'next/link';
import Container from '@/components/container';
import Button from '@/common/Button';

const Page = () => {
	return (
		<section>
			<Container>
				<div className="lg:flex lg:p-8 items-center justify-center p-4 space-y-3">
					<div className="md:pr-8 flex flex-col items-center">
						<Image className="w-full" src={customer} alt="customer" width={500} height={500} />
					</div>
					<div className="lg:pl-8 flex flex-col">
						<p className="mb-4 text-sm font-thin">FEATURES — 5 MIN READ</p>
						<h1 className="mb-4 text-2xl font-bold">
							The perfect fit: Choosing the <br></br> best scheduling app for your <br></br> small business.
						</h1>
						<p>
							Streamlining your scheduling process is crucial in helping small <br></br> businesses find time to serve
							more customers. Managing appointments <br></br> efficiently, enhancing…
						</p>
						<Link className="hover:underline mt-2 text-blue-500" href="/your-target-page">
							Read article
						</Link>
					</div>
				</div>

				{/* card section  */}

				<div className="md:grid-cols-2 lg:grid-cols-3 mt-14 grid grid-cols-1 gap-12">
					{/* card 1 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={customer} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">FEATURES — 5 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold">Choosing the best scheduling app for your small business.</h1>
							<p className="mt-4">
								Streamlining your scheduling process is crucial in helping small businesses find time to serve more
								customers. Managing appointments efficiently, enhancing…
							</p>
						</div>
					</div>
					{/* card 2 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={img2} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">HOW-TO — 3 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold">How Reserve with Google bookings fill your calendar.</h1>
							<p className="mt-4">
								Offering effortless online booking is a must to increase your customer base. By enabling Reserve with
								Google, you can convert leads straight from Google Search and Maps...
							</p>
						</div>
					</div>
					{/* card 3 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={img3} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">HOW-TO — 6 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold">leads straight from Google Search and Maps.</h1>
							<p className="mt-4">
								An e-commerce store is essential for your business to reach a wider audience and make sales throughout
								the day. Relying you can convert leads...
							</p>
						</div>
					</div>
					{/* card 4 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={img4} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">UNCATEGORIZED — 6 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold">
								E-commerce vs. marketplace: why you should build your own online store.
							</h1>
							<p className="mt-4">
								Many startups might feel that a marketplace is the best avenue to get seen by new customers. But
								building your own e-commerce store benefits your...{' '}
							</p>
						</div>
					</div>
					{/* card 5 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={img5} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">UNCATEGORIZED — 8 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold">Taking their cut – how online marketplaces leave you short.</h1>
							<p className="mt-4">
								Any service-based business operator knows the value of return visits. When a customer is happy, not only
								will they come to the value of return visits yours area …
							</p>
						</div>
					</div>
					{/* card 6 */}
					<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
						<figure>
							<Image src={img6} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="text-sm">FEATURES — 5 MIN READ</h2>
							<h1 className="mt-4 text-xl font-bold"> Choosing the best scheduling app for your small business.</h1>
							<p className="mt-4">
								Streamlining your scheduling process is crucial in helping small businesses find time to serve more
								customers. Managing appointments efficiently, enhancing…
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center m-12">
					<Button>Learn more</Button>
				</div>

				<div className="md:flex-row-reverse md:mb-0 flex flex-col items-center justify-center gap-5 mb-8">
					<div className="flex flex-col items-center">
						<Image src={mobile} alt="" width={500} height={500} />
					</div>
					<div className="">
						<h1 className="mb-4 text-2xl font-bold">Get the freedom to book Anywhere.</h1>
						<p>
							For teams on-the-move, Setmore Free comes in a pocket-<br></br>friendly edition for your Android or iOS
							device. Your<br></br>appointments are just a tap away.
						</p>
						<div className="flex mt-5">
							<button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 mr-2 font-thin text-blue-500 border border-blue-500 rounded">
								<Image src={ios} alt="iOS Icon" className="w-4 h-5 mb-1 mr-2" /> iOS
							</button>
							<button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 font-thin text-blue-500 border border-blue-500 rounded">
								<Image src={android} alt="Android Icon" className="w-4 h-5 mr-2" /> Android
							</button>
						</div>
					</div>
				</div>

				<div className=" flex items-center justify-center">
					<Image width="1440" height="280" src={people} alt="" loading="lazy" />
				</div>
			</Container>
			<div className="blue-section h-96 flex flex-col items-center justify-center w-full mb-10 text-white bg-blue-500">
				<p className="md:text-4xl max-w-xl px-2 mb-8 text-2xl font-bold leading-tight text-center">
					Make the magic happen, we’ll make sure it happens on time.
				</p>
				<div className="mt-4">
					<button className=" hover:bg-slate-300 hover: flex items-center justify-center px-4 py-2 font-thin text-blue-500 bg-white rounded">
						Sign Up
					</button>
				</div>
			</div>
		</section>
	);
};

export default Page;
