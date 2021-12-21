import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FiltersByCategory from './Filters/FiltersByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if(onChange) onChange(values)
  }

  return (
    <Box>
      <FiltersByCategory onChange={handleCategoryChange}></FiltersByCategory>
      <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
      <FilterByService filters={filters} onChange={handlePriceChange}></FilterByService>
    </Box>
  );
}

export default ProductFilters;
