import { Box, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './filterByCategory.css';

FilterSkeletonCategory.propTypes = {
  length: PropTypes.number,
};
FilterSkeletonCategory.defaultProps = {
  length: 6,
};

function FilterSkeletonCategory({ length }) {
  return (
    <Box className="filterCategory-box">
      <Skeleton width="100%" height="30px" />
      <ul>
        {Array.from(new Array(length)).map((x, index) => (
          <li key={index}>
            <Skeleton width="60%" />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterSkeletonCategory;
