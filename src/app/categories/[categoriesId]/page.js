import { getCategoryNews } from "@/utils/getCategoryNews";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    return (
        <div>
            <h1>Total {searchParams.category} news : {data.length}</h1>

            <Box>

                <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        data.map(news => (
                            <Grid key={news.id} item xs={6}>
                                <Card>
                                    <CardMedia>
                                        <Image src={news.mage_url} width={800} alt='top news' />
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
                        ))
                    }


                </Grid>
            </Box>
        </div>
    );
};

export default DynamicNewsPage;