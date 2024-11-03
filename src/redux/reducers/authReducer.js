const initialState = {
    token: null,
    userId: null,
    name: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, token: action.payload };
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'SET_USER_INFO':
            return { ...state, userId: action.payload.userId, name: action.payload.name };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
