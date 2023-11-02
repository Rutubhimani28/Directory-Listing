import { Grid } from '@mui/material'
import React from 'react'

const Pricing = () => {
    const pricing = [
        {
            name: "Pizza",
            price: "$15",
        },
        {
            name: " Burger",
            price: "$10",
        },
        {
            name: "Cool Drink",
            price: "$12",
        },
        {
            name: "Fried Rice",
            price: "$08",
        },
        {
            name: "Orange Juice",
            price: "$05"
        }
    ]

    return (
        <div className='overview'>
            <h3>Pricing</h3>
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} lg={8} className='pricing'>
                <ul>
                    {pricing.map((item, index) => (
                        <li key={index} >
                            {item.name}<h5>{item.price}</h5>
                        </li>
                    ))}
                </ul>
            </Grid>
            </Grid>
        </div>
    )
}

export default Pricing
