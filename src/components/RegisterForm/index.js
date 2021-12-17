import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../InputField/index';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Vui long go vao di '),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSumit = (values) => {
    console.log('ga', values);
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSumit)}>
        <InputField name="title" label="Please input" form={form} />
      </form>
    </>
  );
}

export default RegisterForm;