import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import DOMpurify from 'dompurify';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMpurify.sanitize(product.description);
  return (
    <Paper evevation={0} style={{ padding: '15px', marginBottom: '20px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
