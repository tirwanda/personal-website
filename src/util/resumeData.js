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
		facebook: {
			link: 'https://web.facebook.com/tirwanda.edho/',
			username: 'Tirwanda Edho',
			icon: <FacebookIcon />,
		},

		github: {
			link: 'https://github.com/tirwanda',
			username: 'Edho Dwi Tirwanda',
			icon: <GitHubIcon />,
		},

		instagram: {
			link: 'https://www.instagram.com/edho_dt/',
			username: '@edho_dt',
			icon: <InstagramIcon />,
		},

		linkedin: {
			link: 'https://www.linkedin.com/in/edho-dwi-tirwanda-63696916b/',
			username: 'Edho Dwi Tirwanda',
			icon: <LinkedInIcon />,
		},
	},
};

export default data;
