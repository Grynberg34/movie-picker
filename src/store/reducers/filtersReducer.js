import decades from "../../filters/decades";
import countries from "../../filters/countries";
import genres from "../../filters/genres";

const initialState = {
    activeFilter: 1,
    selected: [],
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
            name: 'decades',
            all: decades,
            filtered: []
        },
        {
            id: 4,
            name: 'cast and crew',
            all: null,
            filtered: []
        },
        {
            id: 5,
            name: 'companies',
            all: null,
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

        case 'FILTER_GENRES':
            return {
                ...state,
                filters: state.filters.map(filter =>
                    filter.id === 1 ? { ...filter, filtered: action.payload } : filter
                )
            };        

        case 'FILTER_COUNTRIES':
            return {
                ...state,
                filters: state.filters.map(filter =>
                    filter.id === 2 ? { ...filter, filtered: action.payload } : filter
                )
            };  

        case 'FILTER_DECADES':
            return {
                ...state,
                filters: state.filters.map(filter =>
                    filter.id === 3 ? { ...filter, filtered: action.payload } : filter
                )
            };  
        case 'FILTER_CAST_CREW':
            return {
                ...state,
                filters: state.filters.map(filter =>
                    filter.id === 4 ? { ...filter, filtered: action.payload } : filter
                )
            }; 
        case 'FILTER_COMPANIES':
            return {
                ...state,
                filters: state.filters.map(filter =>
                    filter.id === 5 ? { ...filter, filtered: action.payload } : filter
                )
            }; 
        case 'ADD_TO_SELECTED':
            return {
                ...state,
                selected: [...state.selected, action.payload]
            };
            
        case 'DELETE_FROM_SELECTED':
            return {
                ...state,
                selected: state.selected.filter(item => item.name !== action.payload)
            };

        default:
        return state;
    }
};
  

export default filtersReducer;