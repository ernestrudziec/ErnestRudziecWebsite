import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import HomePageView from '../HomePageView/HomePageView';

const RootView = () => {
	return (
		<Scrollbar damping={0.01}>
			<HomePageView />
		</Scrollbar>
	);
};

export default RootView;
