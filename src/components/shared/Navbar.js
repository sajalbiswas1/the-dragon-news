"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// image
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Header from './Header';
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

function Navbar() {

  return (
    <>
    <Header></Header>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Image src={Logo} width={101} height={101} alt='news logo' />
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                
              <button className='mr-4'>{item.route}</button>
              </Link>
              
            ))}
          </Box>
          <Box sx={{
            "& svg": {
              color: "white"
            }
          }}>
            <Stack direction={"row"}  >
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
            </Stack>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;