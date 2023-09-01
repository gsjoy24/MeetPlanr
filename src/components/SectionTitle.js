import { bebas_neue } from '@/utils/fonts';

const SectionTitle = ({ title }) => {
	return <h2 className={`${bebas_neue.className} uppercase text-4xl md:text-5xl text-center mb-12`}>{title}</h2>;
};

export default SectionTitle;
