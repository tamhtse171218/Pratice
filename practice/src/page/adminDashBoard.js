import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    Box,
    Rating,
    CardMedia,
} from '@mui/material';

import CreateModal from '../admin/CreateModal';
import DeleteModal from '../admin/DeleteModal';
import UpdateModal from '../admin/UpdateModal';
const AdminDashBoard = () => {
    const [product, setProduct] = useState([]);

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState({});

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const getProduct = async () => {
        const response = await axios.get(`https://6717ba87b910c6a6e029b171.mockapi.io/api/products`);
        setProduct(response.data);

    }


    useEffect(() => {
        getProduct();
    }, []); // Chỉ gọi API một lần khi component được mount
    return (
        <div>
            <Box sx={{ padding: 2 }}>

                {/* onClick={handleCreate} */}
                <Button variant="contained" onClick={() => setOpenCreateModal(true)} color="primary" sx={{ marginBottom: 2 }}>
                    Create New Item
                </Button>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>IMG</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {product.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>
                                        <Rating value={item.rating} precision={0.5}>{item.rating}</Rating>
                                    </TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={item.image} // Đường dẫn ảnh từ API
                                            alt={item.name}
                                            sx={{ objectFit: 'contain', width: 'auto', maxWidth: '150px' }}
                                        />
                                    </TableCell>

                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            onClick={() => {
                                                setSelectedProduct(item)
                                                setOpenUpdateModal(true)
                                            }}

                                        >

                                            Update
                                            {/* <Edit /> */}
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                setSelectedProduct(item)
                                                setOpenDeleteModal(true);

                                            }}
                                        >
                                            Delete
                                        </IconButton>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <DeleteModal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                onDeleted={getProduct}
                product={selectedProduct}
            />

            <CreateModal
                open={openCreateModal}
                onClose={() => setOpenCreateModal(false)}
                onCreated={getProduct}
            />

            <UpdateModal
                open={openUpdateModal}
                onClose={() => setOpenUpdateModal(false)}
                onUpdated={getProduct}
                product={selectedProduct}
            />

        </div>
    );
};

export default AdminDashBoard; 