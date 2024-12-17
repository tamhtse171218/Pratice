import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'; // Sử dụng NavLink thay vì Link

const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="success">
                    <Toolbar>
                        {/* Logo or Title */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Profile
                        </Typography>

                        {/* Navigation Buttons */}
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <NavLink
                                to="/"
                                style={{ textDecoration: 'none' }}
                                activeStyle={{
                                    color: 'yellow', // Màu khi active
                                    fontWeight: '1000' // Làm đậm chữ khi active
                                }}
                            >
                                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                                    Home
                                </Typography>
                            </NavLink>

                            <NavLink
                                to="/product"
                                style={{ textDecoration: 'none' }}
                                activeStyle={{
                                    color: 'yellow', // Màu khi active
                                    fontWeight: '700' // Làm đậm chữ khi active
                                }}
                            >
                                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                                    Product
                                </Typography>
                            </NavLink>

                            <NavLink
                                to="/store"
                                style={{ textDecoration: 'none' }}
                                activeStyle={{
                                    color: 'yellow', // Màu khi active
                                    fontWeight: '700' // Làm đậm chữ khi active
                                }}
                            >
                                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                                    Store
                                </Typography>
                            </NavLink>
                            <NavLink
                                to="/admin"
                                style={{ textDecoration: 'none' }}
                                activeStyle={{
                                    color: 'yellow', // Màu khi active
                                    fontWeight: '700' // Làm đậm chữ khi active
                                }}
                            >
                                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                                    Admin
                                </Typography>
                            </NavLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;
