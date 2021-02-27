const isScrolling = false;
const SET_IS_SCROLLING = 'SET_IS_SCROLLING';

export default function isScrollingReducer(state = isScrolling, action) {
	switch (action.type) {
		case SET_IS_SCROLLING:
			return action.payload;
		default:
			return state;
	}
}

export const setIsScrollingAction = (value) => (dispatch, getState) => {
	dispatch({
		type: SET_IS_SCROLLING,
		payload: value,
	});
};
