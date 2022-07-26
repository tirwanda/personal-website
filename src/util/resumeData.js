import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import BrandingWatermarkOutlinedIcon from '@material-ui/icons/BrandingWatermarkOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const data = {
	name: 'Edho Dwi Tirwanda',
	title: 'Software Developer',
	birthday: '1997',
	email: 'edhodwitirwanda@gmail.com',
	address: 'Kota Bekasi',
	phone: '-',

	socials: {
		Github: {
			link: 'https://github.com/tirwanda',
			username: 'Edho Dwi Tirwanda',
			icon: <GitHubIcon />,
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
			tag: 'React Js',
			tech: ['ReactJs', 'NodeJs', 'Bootstrap'],
			image: [
				require('assets/images/portfolio/mern.png').default,
				require('assets/images/portfolio/mern2.png').default,
			],
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
			tag: 'Node Js',
			image: [require('assets/images/portfolio/nodeJs.png').default],
			title: 'Staycation-Admin',
			tech: ['ReactJs', 'NodeJs', 'MongoDb', 'Healthcare', 'Firebase'],
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
		{
			tag: 'Python',
			image: [
				require('assets/images/portfolio/python000.png').default,
				require('assets/images/portfolio/python001.png').default,
				require('assets/images/portfolio/python002.png').default,
				require('assets/images/portfolio/python003.png').default,
			],
			title: 'Face Mask Detection',
			tech: ['Python', 'OpenCv', 'TensorFlow'],
			caption: 'Tech: Python, OpenCv, TensorFlow',
			description:
				'This project was built using Python, OpenCv and TensorFlow',
			links: [
				{
					link: 'https://github.com/tirwanda/face-mask-detection',
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
			image: [require('assets/images/achievment/aws.png').default],
		},
		{
			title: 'Peserta ABU Robocon 2018',
			date: '13 Juli 2018',
			organizer: 'RISTEKDIKTI',
			image: [
				require('assets/images/achievment/pesertaKRAI2018.png').default,
			],
		},
		{
			title: 'Juara Harapan ABU Robocon 2018',
			date: '13 Juli 2018',
			organizer: 'RISTEKDIKTI',
			image: [
				require('assets/images/achievment/harapanKRAI2018.png').default,
			],
		},
		{
			title: 'PIMNAS Ke-30',
			date: '25 Agustus 2017',
			organizer: 'RISTEKDIKTI',
			image: [require('assets/images/achievment/pimnas.png').default],
		},
		{
			title: 'Svelte JavaScript Developer',
			date: '1 January 2021',
			organizer: 'Build With Angga',
			image: [require('assets/images/achievment/svelte.png').default],
		},
		{
			title: 'MERN Stack Developer',
			date: '27 February 2021',
			organizer: 'Build With Angga',
			image: [require('assets/images/achievment/mern.png').default],
		},
	],
};

export default data;
