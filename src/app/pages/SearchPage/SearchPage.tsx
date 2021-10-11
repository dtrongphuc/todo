import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import FindBackground from './components/FindBackground';
import NotFoundBackground from './components/NotFoundBackground';
import { Container, FormInput, SearchWrapper } from './SearchPage.style';
import List from './components/List';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  actions,
  selectLoading,
  selectTaskList,
} from 'features/task/taskSlice';

const SearchPage: React.FC = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskList);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.clear());
  }, [dispatch]);

  const handleSubmit = (values: { search: string }): void => {
    if (!values?.search) {
      return;
    }
    dispatch(actions.searchTask({ content_like: values.search }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== '') {
      dispatch(actions.searchTask({ content_like: e.currentTarget.value }));
    }

    setValue(e.currentTarget.value);
  };

  return (
    <SearchWrapper>
      <Form
        form={form}
        autoComplete='off'
        onFinish={handleSubmit}
        style={{ margin: '0 32px' }}
      >
        <Form.Item name='search' style={{ marginBottom: 0 }}>
          <FormInput
            placeholder='Search'
            allowClear={true}
            value={value}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
      <Container>
        {!value && <FindBackground />}
        {value && taskList.length === 0 && !loading && <NotFoundBackground />}
        {value && taskList.length > 0 && !loading && <List tasks={taskList} />}
      </Container>
    </SearchWrapper>
  );
};

export default SearchPage;
