const AdminNavbar = ({ children }) => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="navbar bg-base-300 w-full">
					<div className="lg:hidden flex-none">
						<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</label>
					</div>
					<div className="flex-1 px-2 mx-2">Navbar Title</div>
					<div className="lg:block flex-none hidden">
						<ul className="menu menu-horizontal">
							{/* Navbar menu content here */}
							<li>
								<a>Navbar Item 1</a>
							</li>
							<li>
								<a>Navbar Item 2</a>
							</li>
						</ul>
					</div>
				</div>
				{/* Page content here */}
				{children}
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu w-80 bg-base-200 min-h-full p-4">
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminNavbar;
