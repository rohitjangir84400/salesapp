const salesReducer = (state = { salesdata: [], totalrevenue: null, userrevenue: null, error: null, usersalesdata: [] }, action) => {
    /* reducer to manage state of sales and update with respect to action types that are dispatched from salesactions */
    switch (action.type) {
        case 'ADD_SALE_SUCCESS':
            return {
                ...state,
                error: null,
            };
        case 'ADD_SALE_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'GETTOPSALES_SUCCESS':
            return {
                ...state,
                loading: false,
                salesdata: action.payload,
            }
        case 'GETTOPSALES_FAILURE':
            return {
                ...state,
                Error: action.payload,
            }
        case 'REVENUE_SUCCESS':
            return {
                ...state,
                loading: false,
                totalrevenue: action.payload,
            }
        case 'REVENUE_FAILURE':
            return {
                ...state,
                Error: action.payload,
            }
        case 'USERSALES_SUCCESS':
            return {
                ...state,
                usersalesdata: action.payload,
            }
        case 'USERSALES_FAILURE':
            return {
                ...state,
                Error: action.payload,
            }
        case 'USERREVENUE_SUCCESS':
            return {
                ...state,
                userrevenue: action.payload,
            }
        case 'USERREVENUE_FAILURE':
            return {
                ...state,
                Error: action.payload,
            }
        default:
            return state;
    }
};

export default salesReducer;
