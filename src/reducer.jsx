export const initialState = {
    user: "User",
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
                slots:[...state.slots,action.item],
            }
        default:
            return state;
    }
};

export default reducer;