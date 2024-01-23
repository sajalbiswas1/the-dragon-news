import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
const Footer = () => {
    const navItems = [
        {
            route: 'Home',
            pathname: '/',
        },
        {
            route: 'Pages',
            pathname: '/pages',
        },
        {
            route: 'Category',
            pathname: '/category',
        },
        {
            route: 'News',
            pathname: '/news',
        },
        {
            route: 'Contact',
            pathname: '/contact',
        },
        {
            route: 'About',
            pathname: '/about',
        },
    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box
                    className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: "white"
                        }
                    }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>

                </Box>
                <Box className="w-full text-center text-white">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <button className='mr-4'>{item.route}</button>
                        </Link>

                    ))}
                </Box>
                <Typography variant='body2' color={'gray'} textAlign={'center'}>
                    @2023 The dragon news . Design by Programin Hero
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;