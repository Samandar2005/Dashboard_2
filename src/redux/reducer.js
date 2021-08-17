import initialState from "./initialState";
import { SET_TODOS, SET_USERS, TOGGLE_MENU, SET_ALBUMS, SET_PHOTOS, SET_POSTS } from "./types";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: return { ...state, todos: action.payload };
        case SET_USERS: return { ...state, users: action.payload };
        case SET_ALBUMS: return { ...state, albums: action.payload };
        case SET_PHOTOS: return { ...state, photos: action.payload };
        case SET_POSTS: return { ...state, posts: action.payload };

        case TOGGLE_MENU: return { ...state, isSidebarShow: !state.isSidebarShow }

        default: return state;
    }
}

export default reducer;