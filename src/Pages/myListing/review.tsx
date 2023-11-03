import React, { useState } from 'react'
import { Box, Button, Grid, Modal, Rating, TextField, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Review = () => {
    const [value, setValue] = React.useState<number | null>(5);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
    const Review = [
        {
            name: "Location",
            rating: 80,
            avrege: "4.0"
        },
        {
            name: " Accuracy",
            rating: 40,
            avrege: "2.0"
        },
        {
            name: "Cleanliness",
            rating: 100,
            avrege: "5.0"
        },
        {
            name: "Communication",
            rating: 70,
            avrege: "3.5"
        },
        {
            name: "Check-in",
            rating: 100,
            avrege: "5.0"
        },
        {
            name: "  Value",
            rating: 50,
            avrege: "2.5"
        },
    ]
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        borderRadius: 3,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#000' : '#308fe8',
        },
    }));
    return (<>
        <div >
            <h3 style={{
                fontSize: " 20px",
                fontWeight: "700",
                margin: " 10px 0px 30px 0px  "
            }}>Review</h3>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} lg={10} className='Review'>
                    <div className='d-flex' style={{ padding: "15px 0px 20px 0px" }}> <Rating name="read-only" value={value} readOnly />
                        <p>5.0</p><h5>(5 reviews)</h5></div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {Review.map((item, index) => (
                            <Grid item xs={12} sm={12} lg={6} >

                                <Grid container spacing={2} key={index} className='review-rating'>

                                    <Grid item xs={4} >
                                        {item.name}
                                    </Grid>
                                    <Grid item xs={6} >
                                        <BorderLinearProgress variant="determinate" value={item.rating} style={{ marginTop: "8px" }} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        {item.avrege}
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </div>
        <Grid container spacing={2} style={{ border: "1px solid  #dedede", marginTop: "20px", padding: "20px 20px 20px 10px" }}>
            <Grid item xs={12} sm={12} lg={4}>
                <div className='d-flex'>
                    <img src='https://angular.envytheme.com/vesax-ng/assets/img/user1.jpg' style={{ width: "80px", borderRadius: "10px" }} />
                    <div className='review-name'> <h5>Jason Smith</h5>
                        <p>New York, USA</p></div>
                </div>

            </Grid>
            <Grid item xs={12} sm={12} lg={8}>
                <Rating name="read-only" value={value} readOnly />
                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo maecenas accumsan lacus vel facilisis.</p>
                <div style={{marginTop: "15px" }}>
                    <Button variant="text" onClick={handleClick} className='like-btn' startIcon={isClicked ? <FavoriteIcon style={{ color: "#3e98c7" }} /> : <FavoriteBorderIcon />}>
                        Like
                    </Button>
                </div>
                    
            </Grid>
        </Grid></>
    )
}
export default Review
