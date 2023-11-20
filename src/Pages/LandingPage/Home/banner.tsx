import React from 'react'
import { Autocomplete, Button, Grid, Paper, TextField } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
const Banner = () => {
    const top100Films = [
        { label: 'kgThe Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ];
    return (
        <>
            <div className='banner'>
                <div className='banner-title'>
                    What's Your Plan Today ?
                    <p>All the top locations – from restaurants and clubs, to galleries, famous places and more..</p>


                    <div style={{ display: "flex", alignItems: "start" }}>
                        <div>
                            <Autocomplete
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300, borderRadius: "0" }}
                                // value={value}
                                getOptionLabel={(option) => option.label}

                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Ex:food,service,barber,hotel" InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <span style={{ fontWeight: "bold" }}>what</span>
                                                {params.InputProps.startAdornment}
                                            </>
                                        ),
                                    }} sx={{ backgroundColor: "white", borderRadius: "0" }} />
                                )}
                            />
                        </div>
                        <div>
                            <Autocomplete
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300, borderRadius: "0" }}
                                renderInput={(params) => <TextField {...params} placeholder="Your City..." InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <>
                                            <span style={{ fontWeight: "bold" }}>Where</span>
                                            {params.InputProps.startAdornment}
                                        </>
                                    ),
                                }} sx={{ backgroundColor: "white", borderRadius: "0" }} />}
                            />
                        </div>
                        <Button variant="contained" className='search-btn'>
                            <SearchOutlined />
                        </Button>
                    </div>
                    <p>Just looking around? Let us suggest you <br />something hot & happening!</p>
                </div>
            </div>

        </>
    )
}

export default Banner