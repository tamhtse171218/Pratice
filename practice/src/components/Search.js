import { Box, TextField } from '@mui/material';
import React from 'react';

const Search = () => {
    return (
        <div>
            <Box mb={1} display="flex" justifyContent="center">
                <TextField
                    label="Search Product"
                    variant="outlined"
                    fullWidth />
            </Box>
        </div>
    );
};

export default Search;