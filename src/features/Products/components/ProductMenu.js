import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const { url } = useRouteMatch();

  const mystyle_component_ul = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    alignItems: 'center',
    gap: '30px',
  };

  const mystyle_component_li = {
      color:'black !important',
    ':hovered': {
      color: 'yellow !important',
    },
  };

  return (
    <Box component="ul" style={mystyle_component_ul}>
      <li style={mystyle_component_li}>
        <Link component={NavLink} to={url} exact style={mystyle_component_li}>
          Description
        </Link>
      </li>
      <li style={mystyle_component_li}>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>
      <li style={mystyle_component_li}>
        <Link component={NavLink} to={`${url}/review`} exact>
          Review
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
