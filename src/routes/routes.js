import { HomePage } from '../pages/HomePage'

export const routes = [
	{
		path: "/",
		exact: true,
		page: () => <HomePage />,
	},
	
];
