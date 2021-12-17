import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set userName
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      //Close Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      //open Snackbar successfully
      enqueueSnackbar('Successfully', { variant: 'success' });
      console.log('form submit: ', user);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('error', error.message);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
