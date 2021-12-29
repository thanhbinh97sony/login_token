import { Box, Skeleton } from '@mui/material';
import React from 'react';
import './filterByCategory.css';

FilterSkeletonService.propTypes = {};

function FilterSkeletonService() {
  return (
    <Box className="filterByService-box">
      <Skeleton width="30%" />
      <Skeleton width="80%" height="30px" />
      <Skeleton width="80%" height="30px" />
    </Box>
  );
}

export default FilterSkeletonService;
