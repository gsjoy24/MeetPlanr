'use client';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/container';
import Slider from 'react-infinite-logo-slider';
import img1 from '@/assets/solutions/virtual_meeting.jpg';
import img2 from '@/assets/solutions/gardaworld.png';
import img3 from '@/assets/solutions/no-padding.png';
import img4 from '@/assets/solutions/thoughtworks.png';
import img5 from '@/assets/solutions/Culture-Amp.png';
import img6 from '@/assets/solutions/new_relic.png';
import img7 from '@/assets/solutions/stuart.png';
import img8 from '@/assets/solutions/Twilio.png';
import img9 from '@/assets/solutions/Virtu.png';
import img10 from '@/assets/solutions/Doordash.png';
import img11 from '@/assets/solutions/meeting-phone.png';
import img12 from '@/assets/solutions/Sharing.png';
import img13 from '@/assets/solutions/cloud-based.png';
import img14 from '@/assets/solutions/person.jpeg';
import img15 from '@/assets/solutions/Luat.png';

const ProfessionalServices = () => {
	return (
		<div>
			<Container>
				<section className="mt-16">
					<div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
						<div className="lg:mt-10">
							<h3 className="text-[#465AF7] font-semibold uppercase">MeetPlanr FOR PROFESSIONAL SERVICES</h3>
							<p className="text-4xl lg:text-5xl text-[#0B3558] md:w-[550px] my-6 font-bold leading-10">
								Premium customer service for your clients
							</p>
							<p className="text-[19px] text-[#5A7795] md:w-[550px] mb-10 leading-8">
								Increase the scheduling process from booking to follow-up and make it simple for your team to
								concentrate on advancing client work.
							</p>
							<Link
								href="/my-account"
								className="border border-[#465AF7] bg-[#465AF7] hover:bg-sky-950 hover:border-sky-950 text-[16px] font-semibold text-white rounded-lg mr-5 py-3 px-6"
							>
								Create event
							</Link>
						</div>

						<div>
							<Image src={img1} alt="virtual meeting" />
						</div>
					</div>
				</section>

				<section>
					<div className="my-16">
						<Slider duration={25} pauseOnHover={false} blurBorders={false} blurBorderColor={'#fff'}>
							<Slider.Slide className="mr-20">
								<Image src={img2} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img3} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img4} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img5} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img6} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img7} alt="docs image" className="w-28"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-10">
								<Image src={img8} alt="docs image"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-9">
								<Image src={img9} alt="docs image" className="w-24"></Image>
							</Slider.Slide>
							<Slider.Slide className="mr-16">
								<Image src={img10} alt="docs image" className="w-40"></Image>
							</Slider.Slide>
						</Slider>
					</div>
				</section>
			</Container>

			<section className="pt-14 pb-16 bg-[#FBFBFB]">
				<Container>
					<div className="pb-14 text-center" data-aos="fade-up" data-aos-duration="500">
						<h3 className="text-[#465AF7] font-semibold uppercase">Why MeetPlanr</h3>
						<h1 className="text-3xl lg:text-[39px] text-[#0B3558] lg:w-[840px] mx-auto my-6 font-semibold">
							A time management system created with professionals
						</h1>
					</div>

					<div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
						<div data-aos="fade-up" data-aos-duration="900" className="md:order-last lg:order-first order-last">
							<Image src={img13} alt="Calender" />
						</div>

						<div data-aos="fade-up" data-aos-duration="600" className="lg:mt-8">
							<h3 className="text-[#465AF7] font-semibold uppercase">SHARE YOUR AVAILABILITY</h3>
							<p className="text-3xl lg:text-[30px] text-[#0B3558] md:w-[650px] lg:w-[420px] my-6 font-semibold leading-8">
								Give your customers a simple booking experience
							</p>
							<p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
								Share a personalized link to your companys booking website to make yourself accessible to customers and
								establish a streamlined and uniform scheduling process.
							</p>
						</div>
					</div>

					<div className="lg:grid-cols-2 mt-36 grid grid-cols-1 gap-16">
						<div data-aos="fade-up" data-aos-duration="500">
							<h3 className="text-[#465AF7] font-semibold uppercase">STAY ON TRACK</h3>
							<p className="text-3xl lg:text-4xl text-[#0B3558] md:w-[500px] lg:w-[540px] my-6 font-semibold leading-8">
								Maintain projects progress and make sure all important parties are involved
							</p>
							<p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[480px] lg:mb-10 leading-8">
								Easily evaluate availability among all parties involved and reserve a time that suits them all. Do not
								allow a project get derailed by a confusing calendar.
							</p>
						</div>

						<div data-aos="fade-up" data-aos-duration="900" className="md:order-last">
							<Image src={img12} alt="Calender" className="lg:-mt-8" />
						</div>
					</div>

					<div className="lg:grid-cols-2 grid grid-cols-1 gap-16 mt-24">
						<div data-aos="fade-up" data-aos-duration="900" className="md:order-last lg:order-first order-last">
							<Image src={img11} alt="Calender" className="w-[520px]" />
						</div>

						<div data-aos="fade-up" data-aos-duration="600" className="lg:mt-5">
							<h3 className="text-[#465AF7] font-semibold uppercase">BOOK MEETINGS WITH NEW CLIENTS</h3>
							<p className="text-3xl lg:text-[30px] text-[#0B3558] md:w-[650px] lg:w-[540px] my-6 font-semibold leading-8">
								Make it simple for new customers to schedule enquiries and consultations
							</p>
							<p className="text-[18px] text-[#5A7795] md:w-[680px] lg:w-[520px] lg:mb-10 leading-8">
								Allow potential customers to schedule appointments directly from your website, and when necessary,
								direct them to the appropriate team member. Use MeetPlanr Linkedin addon to advertise your availability
								when looking for new clients.
							</p>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-14 bg-[#f4f7fd]">
				<Container>
					<div className="lg:grid-cols-2 grid grid-cols-1 gap-16">
						<div className="pb-14 space-y-7">
							<p className="text-[#465AF7] font-semibold uppercase">TESTIMONIALS</p>
							<p className="text-3xl lg:text-[40px] text-[#0B3558] lg:w-[500px] font-semibold">
								Real individuals, real outcomes
							</p>
							<p className="text-[#5A7795] lg:w-[480px] leading-8">
								Don&apos;t simply accept it from us. Here are some reviews from satisfied clients.
							</p>
						</div>

						<div
							className="rounded-xl p-8 space-y-4 bg-white border shadow-sm"
							data-aos="fade-up"
							data-aos-duration="700"
						>
							<p className="font-serif text-2xl font-semibold">Mossadams</p>
							<p className="text-[#0B3558]">
								&#34;We must ensure that our clients are successful in order to ensure continued income and contract
								renewals. This meeting scheduling functionality must be quick and simple for our organization.&#34;
							</p>
							<div className="flex items-center">
								<Image src={img14} alt="Person" className="w-16 mr-4 rounded-full" />
								<div>
									<h4 className="font-semibold">Lorraine Davidson</h4>
									<p className="text-[14px] text-[#556d86]">Manager, Customer Success, Mossadams</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className="pt-16 pb-2 bg-[#fcf9f9]">
				<Container>
					<div className="text-center" data-aos="fade-up" data-aos-duration="500">
						<p className="text-[#465AF7] font-semibold uppercase">DON&apos;T JUST USE WHAT WE SAY</p>
						<p className="md:text-4xl lg:text-5xl text-sky-950 my-8 text-4xl font-bold">
							Discover more from our clients
						</p>
					</div>

					<div className="my-12">
						<div className="md:grid-cols-3 grid grid-cols-1 gap-16">
							<div
								className="border border-[#e4e1e1] rounded-tr-3xl rounded-bl-3xl p-5 space-y-7 bg-white"
								data-aos="fade-up"
								data-aos-duration="600"
							>
								<Image src={img15} alt="logo" className="w-12" />
								<p className="text-[#5A7795]">
									&#34;It is simple and obvious. offers features and advantages that I had not considered that further
									improve and elevate the user experience.&#34;
								</p>
							</div>

							<div
								className="border border-[#e4e1e1] rounded-tr-3xl rounded-bl-3xl p-5 space-y-7 bg-white"
								data-aos="fade-up"
								data-aos-duration="800"
							>
								<Image src={img15} alt="logo" className="w-12" />
								<p className="text-[#5A7795]">
									&#34;I love how simple it is to send my calendar to clients and how simple it is for them to schedule
									themselves.&#34;
								</p>
							</div>

							<div
								className="border border-[#e4e1e1] rounded-tr-3xl rounded-bl-3xl p-5 space-y-7 bg-white"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<Image src={img15} alt="logo" className="w-12" />
								<p className="text-[#5A7795]">
									&#34;MeetPlanr has changed my life. Finding a mutually convenient time for a meeting is greatly
									simplified.&#34;
								</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default ProfessionalServices;
