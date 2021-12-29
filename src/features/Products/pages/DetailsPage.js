import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './listPage.css';
import ProductThumbnail from '../components/ProductThumbnail';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReview from '../components/ProductReview';
import LinearProgress from '@mui/material/LinearProgress';

DetailsPage.propTypes = {};

function DetailsPage(props) {
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  const handleAddToCartForm = (formValues) => {
    console.log('addtocart', formValues);
  };

  return (
    <>
      {loading ? (
        <LinearProgress className="linearProgress" color="success"/>
      ) : (
        <Box>
          <Container>
            <Grid container spacing={1} className="grid">
              {/* LEFT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <Grid item className="detail-grid-left">
                <Paper elevation={0} className="detail-grid-left-paper">
                  <ProductThumbnail product={product} />
                </Paper>
              </Grid>
              {/* RIGHT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <Grid item className="detail-grid-right">
                <Paper elevation={0} className="detail-grid-right-paper">
                  <ProductInfo product={product} />
                  <AddToCartForm onSubmit={handleAddToCartForm} />
                </Paper>
              </Grid>
            </Grid>
            <ProductMenu />
            <Switch>
              <Route path={url} exact>
                <ProductDescription product={product} />
              </Route>
              <Route path={`${url}/additional`} exact>
                <ProductAdditional />
              </Route>
              <Route path={`${url}/review`} exact>
                <ProductReview />
              </Route>
            </Switch>
          </Container>
        </Box>
      )}
    </>
  );
}

export default DetailsPage;
