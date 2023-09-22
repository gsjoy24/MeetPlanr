import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<footer className="footer p-10 bg-base-200 text-base-content">
				<aside>
					<div className="w-16 h-16 rounded-lg flex justify-center items-center text-3xl bg-[#465AF7] text-white font-bold select-none">
						MP
					</div>
					<p>
						<span className="text-xl sm:text-2xl font-semibold text-[#465AF7]">MeetPlanr</span>
						<br />
						Providing reliable schedules since 2023
						<br />
						<br />
						Support : <Link href="mailto:meetplanr@gmail.com">meetplanr@gmail.com</Link>
					</p>
				</aside>

				<nav>
					<header className="footer-title">Quick Links</header>
					<Link className="link link-hover" href="/product">
						Product
					</Link>
					<Link className="link link-hover" href="/pricing">
						Pricing
					</Link>
					<Link className="link link-hover" href="/blogs">
						Blogs
					</Link>
					<Link className="link link-hover" href="/sign-up">
						Sign Up
					</Link>
					<Link className="link link-hover" href="/login">
						Login
					</Link>
					<Link className="link link-hover" href="/report">
						Report
					</Link>
				</nav>
				<nav>
					<header className="footer-title">Solutions</header>
					<Link className="link link-hover" href="/solutions/marketing">
						Marketings
					</Link>
					<Link className="link link-hover" href="/solutions/technology">
						Technology
					</Link>
					<Link className="link link-hover" href="/solutions/customer-success">
						Customer Success
					</Link>
					<Link className="link link-hover" href="/solutions/professional-services">
						Professional Services
					</Link>
					<Link className="link link-hover" href="/solutions/businesses">
						Small & Medium Businesses
					</Link>
				</nav>
				<nav>
					<header className="footer-title">Legal</header>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
			<div className="p-2 text-center text-sm">Copyright © 2023 - All rights reserved by MeetPlanr</div>
		</div>
	);
};

export default Footer;
