import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const data = {
	name: 'Edho Dwi Tirwanda',
	title: 'Software Developer',
	birthday: '08 June 1997',
	email: 'edhodwitirwanda@gmail.com',
	address: 'Bekasi',
	phone: '+6285889644070',

	socials: {
		Facebook: {
			link: 'https://web.facebook.com/tirwanda.edho/',
			username: 'Tirwanda Edho',
			icon: <FacebookIcon />,
		},

		Github: {
			link: 'https://github.com/tirwanda',
			username: 'Edho Dwi Tirwanda',
			icon: <GitHubIcon />,
		},

		Instagram: {
			link: 'https://www.instagram.com/edho_dt/',
			username: '@edho_dt',
			icon: <InstagramIcon />,
		},

		Linkedin: {
			link: 'https://www.linkedin.com/in/edho-dwi-tirwanda-63696916b/',
			username: 'Edho Dwi Tirwanda',
			icon: <LinkedInIcon />,
		},
	},

	about: 'High-quality professional with 1+ years of IT experiences in development, implementation and testing of Client-Server, Web Applications using JAVA/J2EE technologies, Spring Framework. Interested in a challenging career in web application development environment. Skilled in JAVA/J2EE, Mongodb, MySQL, PostgreSql Reactjs, React Native, Nodejs/Expressjs.',

	experiences: [
		{
			title: 'Process Engineer - PT AHM',
			date: '2019 - Present',
			description:
				'Assembling Operational and Project (Productivity and Quality Improvement)',
		},
	],

	educations: [
		{
			title: 'Jakarta State Polytechnic ',
			date: 'Agust 2015 - September 2018',
			description: 'Electrical Engineering - IPK : 3.41',
		},
	],
};

export default data;
