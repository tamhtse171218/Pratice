import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Grid, Card, CardContent, CardActions, Button, Typography, CircularProgress, Box, CardMedia, TextField, Rating } from "@mui/material";
import Search from '../components/Search';
const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(false);


    const getProduct = async () => {

        try {
            setLoading(true);
            const response = await axios.get(`https://6717ba87b910c6a6e029b171.mockapi.io/api/products`);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            toast.error("Can't fetching data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])
    if (Loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }
    return (
        <Box p={3}>
            <ToastContainer />
            <Typography variant="h4" align="center" gutterBottom>
                Product List
            </Typography>
            <Search />
            <Grid container spacing={3}>

                {product.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>

                        <CardMedia
                            component="img"
                            height="200"
                            image={product.image} // Đường dẫn ảnh từ API
                            alt={product.name}
                        />
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" color="text.info">
                                    Price: {product.price}
                                </Typography>
                                <Typography variant="body1" color="text.info">
                                    Category: {product.category}
                                </Typography>
                                <Rating precision={0.5} value={product.rating}>
                                    Rating: {product.rating}
                                </Rating>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="medium">
                                    View
                                </Button>
                                <Button variant="outlined" color="secondary" size="medium">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductPage;