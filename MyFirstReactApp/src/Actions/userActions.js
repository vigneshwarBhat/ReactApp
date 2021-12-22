import { userConstants } from '../Constants/userConstants';
import { userService } from '../Services/userService';
import { alertActions } from './alertActions';

function Register(user) {
	return async (dispatch) => {
		dispatch(request(user));
		try {
			const result = await userService.Register(user);
			dispatch(success(result));
			dispatch(alertActions.success('Registration is successful'));
		} catch (error) {
			dispatch(failure(error));
			dispatch(alertActions.failure('failed to register'));
		}
	};
	function request(user) {
		return { type: userConstants.REGISTER_REQUEST, user };
	}
	function success(user) {
		return { type: userConstants.REGISTER_SUCCESS, user };
	}
	function failure(error) {
		return { type: userConstants.REGISTER_FAILURE, error };
	}
}

function Logout() {
	userService.Logout();
	return { type: userConstants.LOGOUT };
}

export const userActions = {
	Register,
	Logout,
};
