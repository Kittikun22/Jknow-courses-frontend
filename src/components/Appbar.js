import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../asset/Jknowledge-Logo.webp';
import Image from 'mui-image';
import { Link } from '@mui/material';


const pages = [
    {
        pageName: 'Courses',
        url: '/courses'
    },
    {
        pageName: 'Exam',
        url: '#'
    },
    {
        pageName: 'Register',
        url: '/Register'
    },
    {
        pageName: 'Subscription',
        url: '/subpack'
    },
    {
        pageName: 'Help',
        url: '#'
    }];

    const options = [{
        pageName: 'Profile',
        url: '/profile'
    },
    {
        pageName: 'Dashboard',
        url: '/dashboard'
    },
    {
        pageName: 'Payment',
        url:'/payment'
    },
    {
        pageName: 'Setting',
        url: '#'
    },
    {
        pageName: 'Login',
        url: '/login'
    },
    {
        pageName: 'Logout',
        url: '/logout'
    }]


// const settings = ['Profile', 'Dashboard', 'Login', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" color='info'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Image src={logo} width="175px" duration={0} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {pages.map((page, key) => (
                                <MenuItem
                                    component={Link}
                                    href={page.url}
                                    key={key}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.pageName}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Image src={logo} width="175px" duration={0} />
                    </Typography>


                    <Box sx={{ mr: 10, justifyContent: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, key) => (
                            <Button
                                href={page.url}
                                key={key}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.pageName}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open options">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {options.map((option, key) => (
                                <MenuItem
                                    component={Link}
                                    href={option.url}
                                    key={key}
                                    onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{option.pageName}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
