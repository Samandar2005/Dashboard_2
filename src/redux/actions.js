import { GetAlbums, getTodos, GetUsers,  GetPhotos, GetPosts, } from "../api"
import { SET_ALBUMS, SET_TODOS, SET_USERS, TOGGLE_MENU, SET_PHOTOS, SET_POSTS } from "./types";

export const setTodos = async (dispatch) => {
    const data = await getTodos();

    console.log(data);

    dispatch({ type: SET_TODOS, payload: data });
}

export const setUsers = async (dispatch) => {
    const data = await GetUsers();

    console.log(data);

    dispatch({ type: SET_USERS, payload: data });
}
export const setAlbums = async (dispatch) => {
    const data = await GetAlbums();

    console.log(data);

    dispatch({ type: SET_ALBUMS, payload: data });
}
export const setPhotos = async (dispatch) => {
    const data = await GetPhotos();

    console.log(data);

    dispatch({ type: SET_PHOTOS, payload: data });
}

export const setPosts = async (dispatch) => {
    const data = await GetPosts();

    console.log(data);
    dispatch({ type: SET_POSTS, payload: data });
}

export const toggleMenu = (dispatch) => {
    dispatch({ type: TOGGLE_MENU })
}