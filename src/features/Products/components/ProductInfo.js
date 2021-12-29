import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, originalPrice, salePrice, promotionPercent } = product;
  return (
    <Box>
      <Typography component="h1" variant="h4" mb={2}>
        {name}
      </Typography>
      <Typography variant="body2">{shortDescription}</Typography>
      <Box className="price-box">
        <Box component="span" className="salePrice-box">
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className="originalPrice-box">
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className="promotionPercent-box">
              {`-${promotionPercent} %`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
