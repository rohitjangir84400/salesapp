/* initial state of auth or user reducer to store user satates  */
const initialState = {
    isAuthenticated: false,
    Token: null,
    error: null,
    message: null,
    userId: null,
    user: {},
};

/* reducer to manage state of auth or user and update with respect to action types that are dispatched from authactions */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                Token: action.payload.Token,
                userId: action.payload.userid,
                message: 'Login Successfully'
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                Token: null,
                error: null,
                isAuthenticated: false,
                user: {}
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                message: action.payload

            }
        case 'REGISTER_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'USERDETAILS_SUCCESS':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default authReducer;
