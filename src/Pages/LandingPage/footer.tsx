import React from 'react'
import { Container, Grid } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
const Footer = () => {
    return (
        <Grid>
            <div className="footer-bg">
                <Container>
                    <Grid container spacing={2} className='footer-text'>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <div className="footer-title">
                                <h4>Prolink</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi nam totam sequi, ipsam consequatur repudiandae libero illum.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} >
                            <h3>Helpful Links</h3>
                            <ul>
                                <li> Login </li>
                                <li> My Account</li>
                                <li>Add Listing</li>
                                <li> Privacy policy</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <h3>Category</h3>
                            <ul>
                                <li>  Shop</li>
                                <li>  Travel</li>
                                <li> Sport</li>
                                <li>  Restaurant</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <h3> Contact us</h3>
                            <ul>
                                <li><PlaceIcon /> 13th North Ave, Florida, USA</li>
                                <li><EmailIcon />info@listagram.com</li>
                                <li><CallIcon />+44 078 767 595</li>
                                <li><FacebookIcon /><TwitterIcon /><InstagramIcon /><YouTubeIcon /><GroupWorkRoundedIcon /></li>
                            </ul>
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </Grid>
    )
}

export default Footer