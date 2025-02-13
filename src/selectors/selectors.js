export const selectActiveFilter = (state) => {

    const activeFilterId = state.filters.activeFilter;
    return state.filters.filters.find(filter => filter.id === activeFilterId);
};