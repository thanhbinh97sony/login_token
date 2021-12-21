import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import './filterByCategory.css';
import FilterSkeletonCategory from './FilterSkeletonCategory';

FiltersByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FiltersByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [loadingFilter, setLoadingFilter] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(list.map((x) => ({ id: x.id, name: x.name })));
        setLoadingFilter(false);
      } catch (error) {
        console.log('failed', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category.id);
  };

  return (
    <>
      {loadingFilter ? (
        <FilterSkeletonCategory />
      ) : (
        <Box className="filterCategory-box">
          <Typography className="filterCategory-typography" variant="subtitle1">
            Danh Muc San Pham
          </Typography>
          <ul>
            {categoryList.map((category) => (
              <li key={category.id} onClick={() => handleCategoryClick(category)}>
                {category.name}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </>
  );
}

export default FiltersByCategory;
