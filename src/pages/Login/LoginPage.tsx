import React from 'react';
import AuthLayout from 'layouts/AuthLayout';
import {
  ButtonSubmit,
  Flex,
  Form,
  FormWrapper,
  Heading,
  Input,
  InputGroup,
  Label,
  Logo,
  LogoWrapper,
  Middle,
  TableContainer,
} from './styled';
import logo from 'assets/images/microsoft_logo.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserInput } from 'models/User.interface';
import { useMutation } from 'react-query';
import { postLogin } from 'api/auth';

// Schema validation
const schema = yup
  .object()
  .shape({
    email: yup.string().email().required('Vui lòng nhập email'),
    password: yup.string().required('Vui lòng nhập mật khẩu'),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation(postLogin, {
    onSuccess: (data) => {
      console.log('success', data);
    },
  });

  const onSubmit: SubmitHandler<UserInput> = (data: UserInput) => {
    mutation.mutate(data);
  };

  return (
    <AuthLayout>
      <TableContainer>
        <Middle>
          <Flex>
            <FormWrapper>
              <LogoWrapper>
                <Logo src={logo} />
              </LogoWrapper>
              <Heading>Đăng nhập</Heading>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup hasError={!!errors?.email}>
                  <Label htmlFor='email'>
                    Email{' '}
                    <span className='error'> - {errors?.email?.message}</span>{' '}
                  </Label>
                  <Input
                    defaultValue=''
                    {...register('email')}
                    placeholder='Email, điện thoại hoặc Skype'
                    id='email'
                    type='text'
                  />
                </InputGroup>
                <InputGroup hasError={!!errors?.password}>
                  <Label htmlFor='password'>
                    Mật khẩu{' '}
                    <span className='error'>
                      {' '}
                      - {errors?.password?.message}
                    </span>
                  </Label>
                  <Input
                    defaultValue=''
                    {...register('password')}
                    placeholder='Mật khẩu'
                    id='password'
                    type='password'
                  />
                </InputGroup>
                <div className='text-center'>
                  <ButtonSubmit type='submit'>Đăng nhập</ButtonSubmit>
                </div>
              </Form>
            </FormWrapper>
          </Flex>
        </Middle>
      </TableContainer>
    </AuthLayout>
  );
}

export default Login;
