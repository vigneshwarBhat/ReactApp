import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateElement = ({ children }) => {
	let location = useLocation();
	return localStorage.getItem('user') ? (
		children
	) : (
		<Navigate to='/login' replace locationstate={{ path: location.pathname }} />
	);
};
export default PrivateElement;
