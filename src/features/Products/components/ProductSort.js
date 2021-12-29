import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  
  const handleSortChange = (e, newValue) => {
    if (onChange) {
      onChange(newValue);
      console.log(newValue);
    }
  };
  return (
    <Tabs value={currentSort} onChange={handleSortChange} aria-label="basic tabs example">
      <Tab label="Low Price" value="salePrice:ASC" />
      <Tab label="High Price" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
