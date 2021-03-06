import {
	LOCATION_LOAD_SUCCESS,
	LOCATION_CHANGE_SUCCESS,
	LOCATION_USER_SET
} from './locateConstants';


export const initialState = {
	station: {
		lon: 0,
		lat: 0
	},
	user: {
		lon: 0,
		lat: 0
	},
	isCommunity: false
};


export const reducer = (state = initialState, { type, payload, meta }) => {
	switch (type) {

		case LOCATION_LOAD_SUCCESS:
			return Object.assign({}, state, { station: payload.location || payload, isCommunity: payload.default || false });

		case LOCATION_USER_SET:
			return Object.assign({}, state, { user: payload });

		default:
			return state;
	}
};
