import React from 'react';
import { Redirect } from 'react-router-dom'
import DashboardPage from 'views/Dashboard/Dashboard';
import { Dashboard, /* Star */ } from 'variables/icons';
// import NotFound from 'layouts/404/NotFound';
// import Loadable from 'react-loadable';
// import AsyncLoader from 'components/Loader/AsyncLoader';

// const AsyncHoliday = Loadable({
// 	loader: () => import('routes/holiday'),
// 	loading: AsyncLoader
// })
// const AsyncFavorites = Loadable({
// 	loader: () => import('routes/favorites'),
// 	loading: AsyncLoader
// })

const dashboardRoutes = [
	{
		path: '/dashboard',
		sidebarName: 'sidebar.dashboard',
		navbarName: 'Senti Dashboard',
		icon: Dashboard,
		component: DashboardPage,
		menuRoute: 'dashboard'
	},
	// {
	// 	path: '/favorites',
	// 	sidebarName: 'sidebar.favorites',
	// 	icon: Star,
	// 	component: AsyncFavorites,
	// 	menuRoute: 'favorites'
	// },
	// {
	// 	path: '/404',
	// 	sidebarName: 'Error',
	// 	component: NotFound,
	// 	hideFromSideBar: true,
	// },
	{
		path: '/index:ext',
		hideFromSideBar: true,
		component: () => <Redirect to={'/dashboard'} />
	},
	{
		path: '*',
		component: () => <Redirect from={window.location.pathname} to={{ pathname: window.location.pathname === '/' ? '/dashboard' : '/404', prevURL: window.location.pathname }} />,
		hideFromSideBar: true
	},

];

export default dashboardRoutes;
