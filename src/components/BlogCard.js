import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BlogCard = ({ blog }) => {
	const { content, image, subtitle, title, _id } = blog || {};

	// Function to truncate the content to a maximum of 30 words
	const truncateContent = (text, maxLength) => {
		const words = text.split(' ');
		if (words.length > maxLength) {
			return words.slice(0, maxLength).join(' ') + '...';
		} else {
			return text;
		}
	};

	const truncatedContent = truncateContent(content, 17);

	return (
		<div className="card min-w-[310px] max-w-sm bg-base-100 shadow-xl hover:-translate-y-1 hover:bg-blue-100 duration-200 mx-auto">
			<figure className="max-h-[180px] overflow-hidden">
				<Image width={500} height={180} src={image} alt="blogs image" />
			</figure>
			<div className="card-body">
				<p className="text-xs">{subtitle}</p>
				<h2 className="text-lg font-bold">{title}</h2>
				<p className="">{truncatedContent}</p>
				<Link href={`/blogs/${_id}`} className="group flex items-center gap-2 text-blue-600">
					<span>Read more</span> <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
