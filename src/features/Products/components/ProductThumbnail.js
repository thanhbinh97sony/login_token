import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({product}) {

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <div>
      <Box>
        <img src={thumbnailUrl} alt="{product.name}" width="100%" />
      </Box>
    </div>
  );
}

export default ProductThumbnail;
