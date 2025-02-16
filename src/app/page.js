import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Button from '../components/Button/Button';
import Grid from '@mui/material/Grid2';

export default function Home() {
  return (
    <div>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, sm: 4 }}></Grid>

        <Grid size={{ xs: 12, sm: 4 }}>

          <Header />
          <Filters />
          <Button />

        </Grid>

      </Grid>

    </div>
  );
}
