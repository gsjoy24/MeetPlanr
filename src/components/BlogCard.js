import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

	const truncatedContent = truncateContent(content, 20);

	return (
		<div className="card min-w-[320px] max-w-sm bg-base-100 shadow-xl hover:-translate-y-1 hover:bg-blue-100 transition-transform duration-200 mx-auto">
			<figure>
				<Image width={500} height={200} src={image} alt="blogs image" />
			</figure>
			<div className="card-body">
				<h2 className="text-sm">{subtitle}</h2>
				<h1 className="mt-4 text-lg font-bold">{title}</h1>
				<p className=" mt-4">
					{truncatedContent}
					<Link href={`/blogs/${_id}`} className="hover:underline text-blue-600">
						Read more
					</Link>
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
