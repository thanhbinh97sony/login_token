import { Container, Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import productApi from 'api/productApi';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FiltersViewer from '../components/FiltersViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';
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
  const location = useLocation();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  const history = useHistory();

  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 10,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // }));

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll(queryParams);
        // const data = response.data
        // const { data } = await productApi.getAll(filters);
        setProductList(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log('fetch failed');
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handleChangePage = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortPage = (newSortValue) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _sort: newSortValue,
    // }));
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (setNewFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(setNewFilters),
    });
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={1} className="grid">
            {/* >>>>>>>>>>>>>>>>>>>>>>LEFT<<<<<<<<<<<<<<<<<<< */}
            <Grid item className="grid-left">
              <Paper elevation={0} className="grid-left-paper">
                <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
              </Paper>
            </Grid>
            {/* >>>>>>>>>>>>>>>>>>>>RIGHT<<<<<<<<<<<<<<<<<< */}
            <Grid item className="grid-right">
              <Paper elevation={0}>
                <ProductSort currentSort={queryParams._sort} onChange={handleSortPage} />
                <FiltersViewer
                  className="FiltersViewer"
                  filters={queryParams}
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
