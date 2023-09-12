import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlockLink = ({ route, closeSideNAv }) => {
	const currentPath = usePathname();
	const path = '/' + route;

	return (
		<Link
			onClick={closeSideNAv}
			className={`py-1 capitalize hover:text-[#465AF7] rounded-lg duration-200 ${
				currentPath == path && 'text-[#465AF7]'
			}`}
			href={path}
		>
			{route}
		</Link>
	);
};

export default BlockLink;
