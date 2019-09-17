export const postReducer = (state, action) => {
    switch(action.type) {
        case 'START_POSTS_FETCH': {
            return {
                ...state,
                loading: true
            }
        }
        case 'POSTS_FETCHED': {
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        }
        case 'SHOW_POSTS_FETCHED': {
            return {
                ...state,
                fetched: true
            }
        }
        case 'ADD_POST': {
            return {
                ...state,
                data: [...state.data, action.newData]
            }
        }        
        case 'ANIMATE_BEFORE_DELETE_POST': {
            const animated = [...state.data].map(dt => {
                if (dt.id === action.id) {
                    dt.hide = true
                }
                return dt;
             });
            return {
                ...state,
                data: animated
            }
        }
        case 'DELETE_POST': {
            const newPost = [...state.data].filter(item => item.id !== action.id);
            return {
                ...state,
                data: newPost
            }
        }
        default:
            return state;
    }
};