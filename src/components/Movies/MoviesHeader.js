import { useSelector, useDispatch } from 'react-redux';
import { NextMovie, PrevMovie } from '../../store/actions/moviesActions';
import Grid from '@mui/material/Grid2';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Movies() {

    const movies = useSelector(state => state.movies);

    const dispatch = useDispatch();

    return (
        <div className="movies__header">

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, sm: 2 }} onClick={() => dispatch(PrevMovie(movies.activeIndex))}>

                    <ArrowLeftIcon className="movies__header__icon" />

                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                    <h1 className="movies__header__title"> PICK <span className="movies__header__title__number">#{movies.activeIndex + 1}</span></h1>
                </Grid>

                <Grid size={{ xs: 12, sm: 2 }} onClick={() => dispatch(NextMovie(movies.activeIndex))}>

                    <ArrowRightIcon className="movies__header__icon icon--right" />

                </Grid>

            </Grid>
           

        </div>
    )

}

export default Movies