import React, { useState, useEffect } from 'react';
import { Grid, Container, Button } from '@mui/material';

const UseCounter = (initialCount: any, targetCount: any) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const increment = () => {
            if (count < targetCount) {
                setCount((prevCount: number) => prevCount + 1);
            }
        };

        const interval = setInterval(increment, 10);

        return () => clearInterval(interval);
    }, [count, targetCount]);

    return count;
};

const Counters = () => {
    const countData = [
        {
            text: "Cities",
            count: 140
        },
        {
            text: "Restaurants",
            count: 120
        },
        {
            text: "Hotels",
            count: 180
        },
        {
            text: "Retail Services",
            count: 220
        }
    ];

    const counters = countData.map(item => ({
        text: item.text,
        currentCount: UseCounter(0, item.count)
    }));

    return (
        <Grid className='counter-bg'>
            <Container>
                <div className='counter-title'>
                    Why Listty?
                </div>
                <Grid container spacing={2}>
                    {counters.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3} lg={3} className='counter-box'>
                            <div className='counter-text'>{item.currentCount}</div>
                            {item.text}
                        </Grid>
                    ))}
                </Grid>
                <Grid sx={{ textAlign: "center", padding: "55px 0px 55px 0px" }}>
                    <Button className='get-btn' variant="outlined">GET IT NOW</Button>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Counters;
