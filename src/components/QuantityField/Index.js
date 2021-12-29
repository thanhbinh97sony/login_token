import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, FormHelperText, IconButton, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import * as React from 'react';
import { Controller } from 'react-hook-form';
import './quantityField.css';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];

  return (
    <>
      <FormControl error={hasError} variant="outlined" fullWidth style={{ marginTop: '20px' }}>
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value }) => (
            <Box>
              <IconButton
                onClick={() => {
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
                }}
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                className="oulinedInput"
                id={name}
                type="number"
                disabled={disabled}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
}

export default QuantityField;
