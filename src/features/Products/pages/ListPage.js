import { Container, Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import FiltersViewer from '../components/FiltersViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import './listPage.css';

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll(filters);
        // const data = response.data
        // const { data } = await productApi.getAll(filters);
        setProductList(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log('fetch failed');
      }
      setLoading(false);
    })();
  }, [filters]);

  const handleChangePage = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortPage = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (setNewFilters) => {
    setFilters(setNewFilters);
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={1} className="grid">
            <Grid item className="grid-left">
              <Paper elevation={0} className="grid-left-paper">
                <ProductFilters filters={filters} onChange={handleFiltersChange} />
              </Paper>
            </Grid>
            <Grid item className="grid-right">
              <Paper elevation={0}>
                <ProductSort currentSort={filters._sort} onChange={handleSortPage} />
                <FiltersViewer
                  filters={filters}
                  onChange={setNewFilters}
                ></FiltersViewer>
                {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handleChangePage}
                  color="primary"
                  className="grid-right-pagination"
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ListPage;
