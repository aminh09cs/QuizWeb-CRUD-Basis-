import { fetch_user_login } from "../action/userAction";
const INITIAL_STATE = {
    userInfo: {
        access_token: "",
        refresh_token: "",
        username: "",
        image: "",
        role: ""
    },
    isAuthenticated: false //isLogin?
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case fetch_user_login:
            return {
                ...state,
                userInfo: {
                    access_token: action.payload.DT.access_token,
                    refresh_token: action.payload.DT.refresh_token,
                    username: action.payload.DT.username,
                    image: action.payload.DT.image,
                    role: action.payload.DT.role
                },
                isAuthenticated: true //isLogin?
            };

        default: return state;
    }
};

export default userReducer;