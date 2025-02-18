"use client";
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Button from '../components/Button/Button';
import Movies from '../components/Movies/Movies';
import Grid from '@mui/material/Grid2';

export default function Home() {

  const movies = useSelector(state => state.movies);

  return (
    <div>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, sm: 4 }}></Grid>

        <Grid size={{ xs: 12, sm: 4 }}>

          {
            movies.list.length < 1 ?
            <>
              <Header />
              <Filters />
              <Button />
            </>:
            <>
              <Header />
              <Movies />
            </>
            
          }

        </Grid>

      </Grid>

    </div>
  );
}
