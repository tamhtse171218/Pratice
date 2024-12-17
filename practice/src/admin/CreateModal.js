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
import { Form, useFormik } from 'formik'
const CreateModal = ({ open, onClose, onCreated }) => {
    const [product, setproduct] = useState({
        name: "",
        price: "",
        rating: "",
        category: "",
        image: "",
        color: ""
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            category: "",
            rating: "",
            color: "",
            image: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Vui lòng nhập tên giày"),
            price: Yup.number().required("Vui lòng nhập giá tiền").positive("Giá phải là số dương"),
            category: Yup.string().required("Vui lòng nhập category"),
            rating: Yup.number().required("Vui lòng nhập đánh giá").min(0).max(5, "Rating không quá 5"),
            color: Yup.string().required("Vui lòng nhập màu sắc"),
            image: Yup.string().url("Must be a valid URL").required("Must be a link")
        }),
        onSubmit: async (values) => {
            try {
                await axios.post(
                    `https://6717ba87b910c6a6e029b171.mockapi.io/api/products`,
                    values,
                    toast.success("Thêm sản phẩm thành công"),
                );
                onCreated();
                onClose();
            } catch (error) {
                toast.error(`Lỗi: ${error.message}`);
            }

        },
    });
    // const handleChange = (e) => {
    //     setproduct({ ...product, [e.target.name]: e.target.value });
    // }

    // const handleCreate = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post(
    //             `https://6717ba87b910c6a6e029b171.mockapi.io/api/products`,
    //             ...product
    //         );
    //         toast.success("Thêm sản phẩm thành công");
    //         onCreated();
    //         onClose();
    //     } catch (error) {
    //         toast.error(`Lỗi: ${error.message}`);
    //     }
    // }


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
                    Create New Item
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        margin="normal"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.name}
                        </Typography>
                    )}

                    <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        margin="normal"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.price && formik.errors.price && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.price}
                        </Typography>
                    )}

                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        margin="normal"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.category && formik.errors.category && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.category}
                        </Typography>
                    )}

                    <TextField
                        fullWidth
                        label="Rating"
                        name="rating"
                        margin="normal"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.rating && formik.errors.rating && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.rating}
                        </Typography>
                    )}

                    <TextField
                        fullWidth
                        label="Color"
                        name="color"
                        margin="normal"
                        onChange={formik.handleChange}
                        value={formik.values.color}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.color && formik.errors.color && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {formik.errors.color}
                        </Typography>
                    )}

                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="product-image">Image URL</InputLabel>
                        <Input
                            id="product-image"
                            name="image"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.image && formik.errors.image && (
                            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                {formik.errors.image}
                            </Typography>
                        )}
                    </FormControl>

                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Create
                    </Button>
                </form>

                <ToastContainer />
            </Box>
        </Modal>
    );
};

export default CreateModal;