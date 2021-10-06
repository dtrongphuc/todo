import React, { useContext } from 'react';
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
import { CurrentUser, UserInput } from 'models/User.interface';
import { useMutation } from 'react-query';
import { postLogin } from 'api/auth';
import { AxiosError, AxiosResponse } from 'axios';
import { AuthContext } from 'contexts/AuthProvider';
import { useHistory } from 'react-router';

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
    setError,
    formState: { errors },
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
  });
  const { login } = useContext(AuthContext);

  const { mutate, isLoading } = useMutation<
    AxiosResponse<CurrentUser>,
    AxiosError,
    UserInput
  >(postLogin);

  let history = useHistory();

  const onSubmit: SubmitHandler<UserInput> = (data: UserInput) => {
    mutate(data, {
      onSuccess: (response) => {
        login(response.data);
        history.push('/');
      },
      onError: (err) => {
        if (err.response?.status === 400) {
          setError('email', {
            type: 'server',
            message: 'Tài khoản không chính xác',
          });
          setError('password', {
            type: 'server',
            message: 'Mật khẩu không chính xác',
          });
        }
      },
    });
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
              <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
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
                    autoComplete='off'
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
                    autoComplete='off'
                  />
                </InputGroup>
                <div className='text-center'>
                  <ButtonSubmit
                    htmlType='submit'
                    type='primary'
                    loading={isLoading}
                  >
                    Đăng nhập
                  </ButtonSubmit>
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
