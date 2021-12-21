import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import './filterByPrice.css';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <Box className="filterByPrice-box">
      <Typography variant="subtitle1" align="left" className="filterByPrice-typography">
        Gia
      </Typography>
      <Box className="filterByPrice-box-item">
        <TextField
          className="filterByPrice-textField"
          variant="standard"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleOnChange}
        />
        <span> - </span>
        <TextField
          className="filterByPrice-textField"
          variant="standard"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleOnChange}
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        className="filterByPrice-btn"
        onClick={handleSubmit}
      >
        Ap dung
      </Button>
    </Box>
  );
}

export default FilterByPrice;
