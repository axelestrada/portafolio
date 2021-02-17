// Constantes
const currentLink = 'about';

const SET_CURRENT_LINK = 'SET_CURRENT_LINK';

// Reducer
export default function navbarReducer(state = currentLink, action) {
	switch (action.type) {
		case SET_CURRENT_LINK:
			return action.payload;
		default:
			return state;
	}
}

// Acciones

export const setCurrentLinkAction = (href) => (dispatch, getState) => {	
	dispatch({
		type: SET_CURRENT_LINK,
		payload: href,
	});
};
