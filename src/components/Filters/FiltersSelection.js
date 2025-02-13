"use client";
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../../selectors/selectors';
import { nextFilter, prevFilter } from '../../store/actions/filterActions';
import Grid from '@mui/material/Grid2';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function FilterSelection() {

    const dispatch = useDispatch();

    const activeFilter = useSelector(selectActiveFilter);

    return (
        <div className="filters__box__select">

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, sm: 2 }} onClick={() => dispatch(prevFilter())}>

                    <ArrowLeftIcon className="filters__box__select__icon" />

                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                    <h1 className="filters__box__select__title">{activeFilter.name}</h1>
                </Grid>

                <Grid size={{ xs: 12, sm: 2 }} onClick={() => dispatch(nextFilter())}>

                    <ArrowRightIcon className="filters__box__select__icon icon--right" />

                </Grid>

            </Grid>
            

        </div>
    )

}

export default FilterSelection