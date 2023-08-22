'use client';
import { UserAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { BiLinkExternal } from 'react-icons/bi';

const VerifyEmailMessage = () => {
	const { user } = UserAuth();
	if (user && user?.email && !user?.emailVerified) {
		return (
			<div className="text-yellow-600 flex items-center gap-2 bg-yellow-100 p-4 text-sm">
				<PiWarningOctagonFill size={20} />
				<span className="flex items-center gap-2">
					Please verify your email address!
					<Link
						className="hover:underline duration-200 flex items-center gap-2"
						target="_blank"
						href="https://mail.google.com/"
					>
						Open Gmail
						<BiLinkExternal />
					</Link>
				</span>
			</div>
		);
	} else {
		return;
	}
};

export default VerifyEmailMessage;
