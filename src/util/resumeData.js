import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import BrandingWatermarkOutlinedIcon from '@material-ui/icons/BrandingWatermarkOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const data = {
	name: 'Edho Dwi Tirwanda',
	title: 'Software Developer',
	birthday: '08 June 1997',
	email: 'edhodwitirwanda@gmail.com',
	address: 'JL Perintis 4, Bekasi, 17124',
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
			title: 'Binus University',
			date: 'February 2021 - Present',
			description: 'Computer Science - IPK : 3.48',
		},
		{
			title: 'Jakarta State Polytechnic',
			date: 'Agust 2015 - September 2018',
			description: 'Electrical Engineering - IPK : 3.41',
		},
	],

	services: [
		{
			title: 'Web Developer',
			description: 'I have been a web developer for 1+ year',
			icon: <CodeOutlinedIcon />,
		},
		{
			title: 'Branding Identity',
			description: 'I have been a web developer for 1+ year',
			icon: <BrandingWatermarkOutlinedIcon />,
		},
		{
			title: 'Mobile Developer',
			description: 'I have been a web developer for 1+ year',
			icon: <DeveloperModeOutlinedIcon />,
		},
		{
			title: 'Fast Delivery',
			description: 'I have been a web developer for 1+ year',
			icon: <AssignmentTurnedInIcon />,
		},
	],

	skills: [
		{
			title: 'Front-End',
			description: ['React Js', 'JavaScript', 'Bootstrap', 'Material UI'],
		},

		{
			title: 'Back-End',
			description: ['Java (Spring boot)', 'NodeJs/Express', 'C'],
		},
		{
			title: 'Databases',
			description: ['MySQL', 'PostgreSQL', 'MongooDb', 'Firebase'],
		},
		{
			title: 'Source Control',
			description: ['Git', 'Github'],
		},
	],

	portfolio: [
		{
			tag: 'Front-End',
			tech: [
				'ReactJs',
				'NodeJs',
				'Firebase',
				'Healthcare',
				'ReactJs',
				'NodeJs',
				'Firebase',
				'Healthcare',
			],
			image: require('assets/images/portfolio/mern.png').default,
			title: 'Staycation',
			caption: 'Tech: ReactJs, Bootstrap 4',
			description:
				'This project was built using ReactJs, NodeJs/ExpressJs, Mocha Chai, Bootstrap 4, Sass and Multer',
			links: [
				{
					link: 'https://staycation-tirwanda.herokuapp.com/',
					icon: <PlayCircleOutlineIcon />,
				},
				{
					link: 'https://github.com/tirwanda/staycation-mern',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'Back-End',
			image: require('assets/images/portfolio/nodeJs.png').default,
			title: 'Staycation-Admin',
			tech: [
				'ReactJs',
				'NodeJs',
				'Firebase',
				'Healthcare',
				'ReactJs',
				'NodeJs',
				'Firebase',
				'Healthcare',
			],
			caption: 'Tech: NodeJs/ExpressJs',
			description:
				'This project was built using ReactJs, NodeJs/ExpressJs, Mocha Chai, Bootstrap 4, Sass and Multer.\n Username: admin || Password: rahasia',
			links: [
				{
					link: 'https://tirwanda-staycation.herokuapp.com/',
					icon: <PlayCircleOutlineIcon />,
				},
				{
					link: 'https://github.com/tirwanda/server-staycation',
					icon: <GitHubIcon />,
				},
			],
		},
	],

	achievment: [
		{
			title: 'Cloud Practitioner Essentials (AWS Cloud)',
			date: '15 Mei  2021',
			organizer: 'Dicoding',
			image: require('assets/images/portfolio/mern.png').default,
		},
	],
};

export default data;
