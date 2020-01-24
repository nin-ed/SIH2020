import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    loading: true,
    isAuthenticated: false,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case LOGOUT:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            console.log("LOGOUT CALLED" + LOGOUT);

            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}
