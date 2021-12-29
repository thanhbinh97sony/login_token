import { Box, Skeleton } from '@mui/material';
import React from 'react';
import './filterByCategory.css';

FilterSkeletonPrice.propTypes = {};

function FilterSkeletonPrice() {
  return (
    <Box className="filterByPrice-box">
      <Skeleton width="30%" />
      <Skeleton width="100%" height="30px" />
      <Skeleton width="30%" />
    </Box>
  );
}

export default FilterSkeletonPrice;
