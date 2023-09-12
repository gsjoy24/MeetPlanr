'use client';
import { UserAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { BiLinkExternal } from 'react-icons/bi';

const VerifyEmailMessage = () => {
	const { user } = UserAuth();
	if (user && user?.email && !user?.emailVerified) {
		return (
			<div className="sm:flex-row sm:gap-5 flex flex-col gap-2 p-4 text-sm text-yellow-600 bg-yellow-100">
				<span className="flex gap-2">
					<PiWarningOctagonFill size={20} />
					<span>Please verify your email address!</span>
				</span>

				<Link
					className="hover:underline flex items-center gap-2 duration-200"
					target="_blank"
					href="https://mail.google.com/"
				>
					<BiLinkExternal size={18} />
					Open Gmail
				</Link>
			</div>
		);
	} else {
		return;
	}
};

export default VerifyEmailMessage;
