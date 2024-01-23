import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import topNews from '@/assets/top-news.png'
import topNews2 from '@/assets/top-news2.png'
const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={topNews} width={800} alt='top news' />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] bg-red-500 my-5 px-2 text-white rounded'>Technology</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it again
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        by Sajal Biswas - Mar 18 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <Card>
                <CardMedia>
                    <Image src={topNews2} width={800} alt='top news' />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] bg-red-500 my-5 px-2 text-white rounded'>Technology</p>
                    <Typography gutterBottom>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it again
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        by Sajal Biswas - Mar 18 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardMedia>
                    <Image src={topNews2} width={800} alt='top news' />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] bg-red-500 my-5 px-2 text-white rounded'>Technology</p>
                    <Typography gutterBottom>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it again
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        by Sajal Biswas - Mar 18 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardMedia>
                    <Image src={topNews2} width={800} alt='top news' />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] bg-red-500 my-5 px-2 text-white rounded'>Technology</p>
                    <Typography gutterBottom>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it again
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        by Sajal Biswas - Mar 18 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
                </Grid>
                <Grid item xs={6}>
                <Card>
                <CardMedia>
                    <Image src={topNews2} width={800} alt='top news' />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] bg-red-500 my-5 px-2 text-white rounded'>Technology</p>
                    <Typography gutterBottom>
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it again
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        by Sajal Biswas - Mar 18 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;