import { alertConstants } from '../Constants/alertConstants';

function success(message) {
	return { type: alertConstants.SUCCESS, message };
}

function failure(error) {
	return { type: alertConstants.FAILURE, error };
}

function clear() {
	return { type: alertConstants.CLEAR };
}

export const alertActions = {
	success,
	failure,
	clear,
};
