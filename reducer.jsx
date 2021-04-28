export const initialState = {
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }
    }
};

export default reducer;