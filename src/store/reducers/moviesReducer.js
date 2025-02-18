const initialState = {
    list: [],
    activeIndex: 0,
    modalMessage: '',
    loading: false,
    showModal: false,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PICK_MOVIES':
            return {
                ...state,
                list: action.payload,
                showModal: false,
            };
        case 'SHOW_MODAL':
            return {
                ...state,
                modalMessage: action.payload,
                showModal: true,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalMessage: '',
                showModal: false,
            };
        case 'NEXT_MOVIE':
            return {
                ...state,
                activeIndex: (state.activeIndex + 1) % state.list.length
            };
        
        case 'PREV_MOVIE':
            return {
                ...state,
                activeIndex: state.activeIndex === 0 ? state.list.length - 1 : state.activeIndex - 1 // Goes to last movie if at index 0
            };
        case 'LOADING':
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
};

export default moviesReducer;
