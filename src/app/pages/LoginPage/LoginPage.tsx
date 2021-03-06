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
} from './LoginPage.styled';
import logo from 'assets/images/microsoft_logo.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CurrentUser, UserInput } from 'models/User.interface';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { AuthContext } from 'contexts/AuthProvider';
import { useHistory } from 'react-router';
import { localStorage } from 'utils/localStorage';
import { useTranslation } from 'react-i18next';

// Schema validation
const schema = yup
  .object()
  .shape({
    email: yup.string().email().required('Vui lòng nhập email'),
    password: yup.string().required('Vui lòng nhập mật khẩu'),
  })
  .required();

function Login() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
  });
  const { authHandler, setAuthState } = useContext(AuthContext);

  const { mutate, isLoading } = useMutation<
    AxiosResponse<CurrentUser>,
    AxiosError,
    UserInput
  >(authHandler.login);

  let history = useHistory();

  const onSubmit: SubmitHandler<UserInput> = (data: UserInput) => {
    mutate(data, {
      onSuccess: (response) => {
        const { id, name, email } = response.data.user;
        setAuthState(true, { id, name, email });
        localStorage('token').save(response.data.accessToken);
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
              <Heading>{t('login.title')}</Heading>
              <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <InputGroup hasError={!!errors?.email}>
                  <Label htmlFor='email'>
                    {t('login.input_1.label')}{' '}
                    <span className='error'> - {errors?.email?.message}</span>{' '}
                  </Label>
                  <Input
                    defaultValue=''
                    {...register('email')}
                    placeholder={t('login.input_1.placeholder')}
                    id='email'
                    type='text'
                    autoComplete='off'
                  />
                </InputGroup>
                <InputGroup hasError={!!errors?.password}>
                  <Label htmlFor='password'>
                    {t('login.input_2.label')}{' '}
                    <span className='error'>
                      {' '}
                      - {errors?.password?.message}
                    </span>
                  </Label>
                  <Input
                    defaultValue=''
                    {...register('password')}
                    placeholder={t('login.input_2.placeholder')}
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
                    {t('login.submit')}
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
