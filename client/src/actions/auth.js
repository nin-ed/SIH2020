import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

// Register User

export const register = ({
    name,
    email,
    password,
    category
}) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Body for POST request to server
    const body = JSON.stringify({ name, email, password, category });
    console.log(body);
    try {
        const res = await axios.post("/api/users", body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User

export const login = ({ email, password }) => async dispatch => {
    console.log({ email, password });

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("/api/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Load User

export const loadUser = () => async dispatch => {
    if (localStorage.token) setAuthToken(localStorage.token);

    try {
        const res = await axios.get("/api/auth");
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Logout
export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT });
};
