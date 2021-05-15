export const initialState = {
    user: null,
    sport: null,
    regid: null,
    slots:[],
    fields:[],
};

const reducer = (state, action) => {
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
        case 'SET_SPORT':
            return{
                ...state,
                sport:action.data,
                fields:action.list,

            }
        default:
            return state;
    }
};

export default reducer;