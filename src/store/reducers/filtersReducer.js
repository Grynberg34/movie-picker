import years from "../../filters/years";
import countries from "../../filters/countries";
import genres from "../../filters/genres";

const initialState = {
    activeFilter: 1,
    filters: [
        {
            id: 1,
            name: 'genres',
            all: genres,
            filtered: []
        },
        {
            id: 2,
            name: 'countries',
            all: countries,
            filtered: []
        },
        {
            id: 3,
            name: 'years',
            all: years,
            filtered: []
        },
        {
            id: 4,
            name: 'cast and crew',
            filtered: []
        },
        {
            id: 5,
            name: 'companies',
            filtered: []
        }
    ]
};
  
const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
  
        case 'NEXT_FILTER': {
            const currentIndex = state.filters.findIndex(f => f.id === state.activeFilter);
            const nextIndex = (currentIndex + 1) % state.filters.length;
            return { ...state, activeFilter: state.filters[nextIndex].id };
        }

        case 'PREV_FILTER': {
            const currentIndex = state.filters.findIndex(f => f.id === state.activeFilter);
            const prevIndex = (currentIndex - 1 + state.filters.length) % state.filters.length;
            return { ...state, activeFilter: state.filters[prevIndex].id };
        }

        default:
        return state;
    }
};
  

export default filtersReducer;