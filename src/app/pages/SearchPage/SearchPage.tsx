import { Form } from 'antd';
import React from 'react';
import NotFoundBackground from './components/NotFoundBackground';
import { Container, FormInput, SearchWrapper } from './SearchPage.style';

const SearchPage: React.FC = () => {
  const handleSubmit = (): void => {};

  return (
    <SearchWrapper>
      <Form autoComplete='off' onFinish={handleSubmit}>
        <FormInput placeholder='Search' allowClear={true} />
      </Form>
      <Container>
        <NotFoundBackground />
      </Container>
    </SearchWrapper>
  );
};

export default SearchPage;
