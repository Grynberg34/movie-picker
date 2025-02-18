import movies from '../../app/api/movies';

export const NextFilter = (filterId) => {
    return (dispatch) => {

        dispatch({ type: 'NEXT_FILTER' });

        if (filterId === 4) {
            dispatch({ type: 'FILTER_CAST_CREW', payload: [] });
        } else if (filterId === 5) {
            dispatch({ type: 'FILTER_COMPANIES', payload: [] });
        }
    };
};

export const PrevFilter = (filterId) => {
    return (dispatch) => {
        dispatch({ type: 'PREV_FILTER' });

        if (filterId === 4) {
            dispatch({ type: 'FILTER_CAST_CREW', payload: [] });
        } else if (filterId === 5) {
            dispatch({ type: 'FILTER_COMPANIES', payload: [] });
        }
    };
};

export const SearchFilter = (filter, searchQuery) => async dispatch => {

    const query = searchQuery.toLowerCase();

    if (filter.id === 1) {

        const filteredGenres = filter.all.filter(genre => genre.name.toLowerCase().includes(query));

        dispatch({ type: 'FILTER_GENRES', payload: filteredGenres });

    } else if (filter.id === 2) {

        const filteredCountries = filter.all.filter(country => country.name.toLowerCase().includes(query));

        dispatch({ type: 'FILTER_COUNTRIES', payload: filteredCountries });

    } else if (filter.id === 3) {

        const filteredDecades = filter.all.filter(decade => decade.name.toLowerCase().includes(query));

        dispatch({ type: 'FILTER_DECADES', payload: filteredDecades });

    } else if (filter.id === 4) {

        var formattedQuery= searchQuery.replace(/ /g, '%20')

        await movies.get(`/search/person?query=${formattedQuery}`, {
        }).then(function(response){
            dispatch({ type: 'FILTER_CAST_CREW', payload: response.data.results });
        }).catch(function(err){
            console.log(err)
        })
        
    } else if (filter.id === 5) {

        var formattedQuery= searchQuery.replace(/ /g, '%20')

        await movies.get(`/search/company?query=${formattedQuery}&page=1`, {
        }).then(function(response){
            dispatch({ type: 'FILTER_COMPANIES', payload: response.data.results });
        }).catch(function(err){
            console.log(err)
        })

    }

};

export const AddToSelected = (item, filterId) => {
    return (dispatch) => {
        const updatedItem = { ...item, filterId };

        dispatch({ type: 'ADD_TO_SELECTED', payload: updatedItem });
    };
};

export const DeleteFromSelected = (name) => ({
    type: 'DELETE_FROM_SELECTED',
    payload: name
});