import movies from '../../app/api/movies';

export const PickMovies = (filters) => {
    return async (dispatch) => {
        if (filters.length === 0) {
            dispatch({ type: 'SHOW_MODAL', payload: 'Select at least one filter to pick a movie' });
            return;
        }

        dispatch({ type: 'LOADING', payload: true });

        let query = `/discover/movie?&sort_by=popularity.desc&with_release_type=1|2|3`;

        const genres = filters.filter(f => f.filterId === 1);
        if (genres.length > 0) {
            query += `&with_genres=${genres.map(g => g.id).join(',')}`;
        }

        const countries = filters.filter(f => f.filterId === 2);
        if (countries.length > 0) {
            query += `&with_origin_country=${countries.map(c => c.iso_3166_1).join(',')}`;
        }

        const decades = filters.filter(f => f.filterId === 3);
        if (decades.length > 0) {
            query += `&primary_release_date.gte=${Math.min(...decades.map(d => d.firstYear))}-01-01`;
            query += `&primary_release_date.lte=${Math.max(...decades.map(d => d.lastYear))}-12-31`;
        }

        const people = filters.filter(f => f.filterId === 4);
        if (people.length > 0) {
            query += `&with_people=${people.map(p => p.id).join(',')}`;
        }

        const companies = filters.filter(f => f.filterId === 5);
        if (companies.length > 0) {
            query += `&with_companies=${companies.map(c => c.id).join(',')}`;
        }

        try {

            const response = await movies.get(query);
            const movieResults = response.data.results.slice(0, 10); 

            if (movieResults.length === 0) {
                dispatch({ type: 'SHOW_MODAL', payload: 'No movies found for the selected filters' });
                dispatch({ type: 'LOADING', payload: false });
            } else {
                const movieDetails = await Promise.all(movieResults.map(async (movie) => {
                    try {
                        const [detailsResponse, creditsResponse, providersResponse] = await Promise.all([
                            movies.get(`/movie/${movie.id}`), 
                            movies.get(`/movie/${movie.id}/credits`),
                            movies.get(`/movie/${movie.id}/watch/providers`)
                        ]);
                
                        return {
                            ...movie,
                            runtime: detailsResponse.data.runtime || 'Unknown',
                            director: creditsResponse.data.crew.find(member => member.job === 'Director')?.name || 'Unknown',
                            cast: creditsResponse.data.cast.slice(0, 5).map(member => member.name) || [],
                            providers: providersResponse.data.results || {}
                        };
                    } catch (error) {
                        console.log(`Error fetching details for movie ${movie.id}:`, error);
                        return { ...movie, runtime: 'Unknown', director: 'Unknown', cast: [], providers: {} };
                    }
                }));                

                dispatch({
                    type: 'PICK_MOVIES',
                    payload: movieDetails
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const CloseModal = () => ({
    type: 'CLOSE_MODAL',
});

export const NextMovie = (currentIndex) => ({
    type: 'NEXT_MOVIE',
    payload: currentIndex
});

export const PrevMovie = (currentIndex) => ({
    type: 'PREV_MOVIE',
    payload: currentIndex
});