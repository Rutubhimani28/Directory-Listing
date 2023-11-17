import React from 'react'
import Grid from '@mui/material/Grid';
const About = () => {
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={8}>
                <div>xs=8</div>
            </Grid>
            <Grid xs={4}>
                <div>xs=4</div>
            </Grid>
            <Grid xs={4}>
                <div>xs=4</div>
            </Grid>
            <Grid xs={8}>
                <div>xs=8</div>
            </Grid>
        </Grid>
    )
}

export default About