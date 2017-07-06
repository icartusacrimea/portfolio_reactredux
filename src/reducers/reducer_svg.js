import { FETCH_SVG } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_SVG:
			return [ action.payload.data ];
	}
	return state;
}