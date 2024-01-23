import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import sideBarNews from '@/assets/side-top-news.png'
import Image from "next/image";
const SideBar = () => {
    return (
        <Box className="mt-5">
            <Card>
                <CardMedia>
                    <Image src={sideBarNews} width={800} alt='top news' />
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
        </Box>
    );
};

export default SideBar;