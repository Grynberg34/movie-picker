import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Grid from '@mui/material/Grid2';

export default function Home() {
  return (
    <div>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, sm: 4 }}></Grid>

        <Grid size={{ xs: 12, sm: 4 }}>

          <Header />
          <Filters />

        </Grid>

      </Grid>

    </div>
  );
}
