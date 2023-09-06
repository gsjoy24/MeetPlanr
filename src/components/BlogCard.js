import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
	const { content, image, subtitle, title, _id } = blog || {};
	return (
		<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 mx-auto">
			<figure>
				<Image width={500} height={200} src={image} alt="blogs image" />
			</figure>
			<div className="card-body">
				<h2 className="text-sm">{subtitle}</h2>
				<h1 className="mt-4 text-xl font-bold">{title}</h1>
				<p className="mt-4">
					{content}
					<Link href={`/blogs/${_id}`} className="hover:underline text-blue-600">
						Read more
					</Link>
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
