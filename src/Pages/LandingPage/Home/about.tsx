import React from 'react'
import Grid from '@mui/material/Grid';
import HotelIcon from '@mui/icons-material/Hotel';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Container } from '@mui/material';
const About = () => {
    const about = [
        {
            img: <HotelIcon />,
            name: "Hotel",
        },
        {
            img: <RiceBowlIcon />,
            name: "Restaurent",
        },
        {
            img: <ShoppingBagIcon />,
            name: "Shopping",
        },
        {
            img: <ContentCutIcon />,
            name: "Beauty & spa",
        },
        {
            img: <LocalHospitalIcon />,
            name: "Hospital"
        },
        {
            img: <EventNoteIcon />,
            name: "Services"
        }
    ]
    return (
        <Container>
            <Grid container spacing={2} sx={{ flexGrow: 1, margin: 0 }}>
                {about.map((item, index) => (
                    <Grid xs={6} sm={6} md={4} lg={2}>
                        <div key={index} className='about-box' >
                            {item.img}<h5>{item.name}</h5>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default About