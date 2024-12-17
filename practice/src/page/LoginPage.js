import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
    Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { loginService } from "../auth/loginAuth";

const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const user = await loginService(username, password);
            if (user.role === 'admin') {
                navigate("/admin");
            } else {
                navigate("/product");
            }

        } catch {
            setError("Invalid user name or password");

        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}
        >
            <Paper elevation={6} sx={{ padding: 5, maxWidth: 400, width: "100%" }}>
                <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" align="center">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {error && (
                        <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper >
        </Box >

    );
};

export default Login;
