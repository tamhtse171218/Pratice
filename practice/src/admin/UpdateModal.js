import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Typography,
    Box,
    Modal,
    TextField,
    Rating,
    FormControl,
    InputLabel,
    Input,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, useFormik } from 'formik';
const UpdateModal = ({ open, onClose, onUpdated, product }) => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        color: "",
        category: "",
        image: "",
        rating: ""
    })
    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product])
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`https://6717ba87b910c6a6e029b171.mockapi.io/api/products/${product.id}`, formData
                , toast.success("Updated thanh cong thành công")
            )
            onUpdated();
            onClose();
        } catch (error) {
            toast.error("Loi roi");
        }


    }
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-title" variant="h6" component="h2">
                    Update Product
                </Typography>
                <form >
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name || ''}
                        margin="normal"
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.name && formik.errors.name && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.name}
                        </Typography>
                    )} */}

                    <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        margin="normal"
                        onChange={handleChange}
                        value={formData.price || ''}
                    // onChange={formik.handleChange}
                    // value={formik.values.price}
                    // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.price && formik.errors.price && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.price}
                        </Typography>
                    )} */}

                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        onChange={handleChange}
                        value={formData.category || ''}
                        margin="normal"
                    // onChange={formik.handleChange}
                    // value={formik.values.category}
                    // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.category && formik.errors.category && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.category}
                        </Typography>
                    )} */}

                    <TextField
                        fullWidth
                        label="Rating"
                        name="rating"
                        onChange={handleChange}
                        margin="normal"
                        value={formData.rating || ''}
                    // onChange={formik.handleChange}
                    // value={formik.values.rating}
                    // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.rating && formik.errors.rating && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.rating}
                        </Typography>
                    )} */}

                    <TextField
                        fullWidth
                        label="Color"
                        name="color"
                        onChange={handleChange}
                        margin="normal"
                        value={formData.color || ''}
                    // onChange={formik.handleChange}
                    // value={formik.values.color}
                    // onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.color && formik.errors.color && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.color}
                        </Typography>
                    )} */}

                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="product-image">Image URL</InputLabel>
                        <Input
                            id="product-image"
                            name="image"
                            onChange={handleChange}
                            value={formData.image || ''}
                        // onChange={formik.handleChange}
                        // value={formik.values.image}
                        // onBlur={formik.handleBlur}
                        />
                        {/* {formik.touched.image && formik.errors.image && (
                            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                {formik.errors.image}
                            </Typography>
                        )} */}
                    </FormControl>

                    <Button onClick={handleUpdate} variant="contained" color="primary" fullWidth>
                        Update
                    </Button>
                </form>

                <ToastContainer />
            </Box>
        </Modal>
    );
};

export default UpdateModal;