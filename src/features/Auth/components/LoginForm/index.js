import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import InputField from 'components/InputField';
import PasswordField from 'components/PasswordField/Index';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email'),
    password: yup.string().required('Please enter your password'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar style={{ margin: 'auto' }}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Typography component="h3" variant="h5">
          Login an account
        </Typography>
      </Stack>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
