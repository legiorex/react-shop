const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'ADD_BOOKS':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
            };
        case 'REMOVE_BOOK':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        default:
            return state;
    }
};