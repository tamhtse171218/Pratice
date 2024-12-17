import React from 'react';
import { toast } from 'react-toastify';
import {
    Modal,
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import axios from 'axios';

const DeleteModal = ({ open, onClose, onDeleted, product }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`https://6717ba87b910c6a6e029b171.mockapi.io/api/products/${product.id}`);
            toast.success("Deleted successfully");
            onDeleted();  // Reload data or trigger necessary actions
            onClose();  // Close the modal
        } catch (error) {
            toast.error("An error occurred");
        }
    };
    console.log(onClose)
    return (

        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography id="modal-title" variant="h6" component="h2">
                    Xóa sản phẩm
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    Bạn có chắc chắn muốn xóa sản phẩm không?
                </Typography>

                {/* Stack for the Delete and Cancel buttons */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 4 }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                    >
                        Xóa
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onClose}
                    >
                        Hủy
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default DeleteModal;
