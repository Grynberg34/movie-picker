import movies from '../../app/api/movies';

export const NEXT_FILTER = 'NEXT_FILTER';
export const PREV_FILTER = 'PREV_FILTER';

export const nextFilter = () => ({
    type: NEXT_FILTER
});

export const prevFilter = () => ({
    type: PREV_FILTER
});