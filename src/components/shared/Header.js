import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from '@/assets/The Dragon News.png';
import { getCurrrentDate } from "@/utils/getCurrentDate";
const Header = () => {
    const currentDate = getCurrrentDate()
    return (
        <Box>
            <Container className="mb-4">
                <Image src={headingImg} width={500} height={500} alt="heading image" className="mx-auto"></Image>
                <Typography variant='body2' color={'gray'} textAlign={'center'} className="my-2">
                    journalism Without Fear or Favour
                </Typography>
                <Typography textAlign={"center"}>
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;