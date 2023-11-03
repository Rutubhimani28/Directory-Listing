import React from 'react'
import "./mylisting.css";
import { Box, Button, Container, Grid, Rating, Tabs, Typography } from '@mui/material';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import Tab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';
import Pricing from './pricing';
import Gallary from './gallary';
import Review from './review';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const singleListing = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ratingValue, setRatingValue] = React.useState<number | null>(5);
  const Overview = [
    {
      img: <CheckIcon />,
      title: "Parking Street",
    },
    {
      img: <CheckIcon />,
      title: "Vegan Options",
    },
    {
      img: <CheckIcon />,
      title: " Kids Activities Nearby",
    },
    {
      img: <CheckIcon />,
      title: "Accepts Apple Pay",
    }, {
      img: <CheckIcon />,
      title: "Accepts Google Pay",
    },
    {
      img: <CheckIcon />,
      title: " Wheelchair Accessible",
    },
    {
      img: <CheckIcon />,
      title: "Takes Reservations",
    },
    {
      img: <CheckIcon />,
      title: " Offers Takeout",
    },
    {
      img: <CheckIcon />,
      title: " Bike Parking",
    },
    {
      img: <CheckIcon />,
      title: "Good for Kids",
    },
    {
      img: <CheckIcon />,
      title: " Accepts Cryptocurrency",
    },
    {
      img: <CheckIcon />,
      title: " Accepts Credit Cards"
    }
  ]
  return (
    <div>

      <div className='single-list'>
        <Container>
          <div className='list-banner'>
            <p><SingleBedIcon /> RESTAURANT</p>
            <h3> Chipotle Mexican Grill</h3>
            <div className='d-flex' style={{ marginBottom: "25px" }}>
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
                style={{ fontSize: '16px' }}
              />
              <p>(45)</p>
            </div>

            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6} lg={3}>

                <div><Button variant="contained" className='call-btn' startIcon={<WifiCalling3OutlinedIcon />}> (+212) 279-1456</Button></div>
              </Grid>
              <Grid item xs={12} md={6} lg={3} className='d-flex banner-location'>
                <AccessTimeIcon />
                <div>
                  <h5>Currently Open</h5>
                  <p>08:00 AM - 10:00 PM</p>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={3} className='d-flex banner-location'>
                <LocationOnOutlinedIcon />
                <div>
                  <h5>Location</h5>
                  <p>New York, USA</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>

      </div>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='listing-tabs'>
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Gallery" {...a11yProps(1)} />
            <Tab label="Pricing" {...a11yProps(2)} />
            <Tab label="Review" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Container>
          <CustomTabPanel value={value} index={0}>
            <div className='overview'>
              <h3>Dateils</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginBottom:"30px"}}>
                {Overview.map((item, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={index} >
                    <div className='d-flex'>{item.img}<h5>{item.title}</h5></div>
                  </Grid>
                ))}
              </Grid>
            </div>
              <Pricing />
              <Review/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           <Gallary/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Pricing />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
           <Review/>
          </CustomTabPanel>
        
        </Container>
      </Box>
    </div>
  )
}

export default singleListing