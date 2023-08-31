
export default function EventLayout({ children }) {
	return (
		<div>
			<div>
				<main className="min-h-[calc(100vh-200px)]">{children}</main>
			</div>
		</div>
	);
}
