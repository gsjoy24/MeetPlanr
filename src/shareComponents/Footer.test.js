import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
	it('should render the footer content correctly', () => {
		const { getByText } = render(<Footer />);

		// Test for the presence of specific text in the footer
		expect(getByText('MeetPlanr')).toBeInTheDocument();
		expect(getByText('meetplanr@gmail.com')).toBeInTheDocument();
		expect(getByText('Quick Links')).toBeInTheDocument();
		expect(getByText('Solutions')).toBeInTheDocument();
		expect(getByText('Legal')).toBeInTheDocument();
	});
});
