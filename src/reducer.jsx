export const initialState = {
    user: null,
    slots: []
};

const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }
        case 'BOOK_SLOT':
            return{
                ...state,
                slots:[action.data],
            }
        default:
            return state;
    }
};

export default reducer;