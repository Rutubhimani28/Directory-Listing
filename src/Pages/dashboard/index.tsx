import DashboardCard from "../dashboard/cards";
import TotalChart from "./totalChart";
import Charts from "./Charts";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <DashboardCard />
      <div className="featuresAndCharts">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <TotalChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Charts height={540} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
