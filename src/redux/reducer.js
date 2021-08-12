import initialState from "./initialState";
import { SET_TODOS, TOGGLE_MENU } from "./types";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: return { ...state, todos: action.payload };

        case TOGGLE_MENU: return { ...state, isSidebarShow: !state.isSidebarShow }

        default: return state;
    }
}

export default reducer;