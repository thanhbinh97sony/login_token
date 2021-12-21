import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './filterByPrice.css';

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ onChange, filters = {} }) {
  const handleOnChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className="filterByService-box">
      <Typography variant="subtitle1" align="left" className="filterByPrice-typography">
        Dich Vu
      </Typography>
      <Box className="filterByService-list">
        <ul>
          {[
            { value: 'isPromotion', label: 'Co khuyen mai' },
            { value: 'isFreeShip', label: 'Mien phi giao hang' },
          ].map((service) => (
            <li key={service.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service.value])}
                    onChange={handleOnChange}
                    name={service.value}
                  />
                }
                label={service.label}
              />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default FilterByService;
