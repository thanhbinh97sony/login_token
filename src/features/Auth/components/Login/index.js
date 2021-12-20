import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set userName
      const action = login(values);
      const resultAction = await dispatch(action);
     unwrapResult(resultAction);

      //Close Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      history.push('/products')

    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('error', error.message);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
