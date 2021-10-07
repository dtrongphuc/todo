import { Form } from 'antd';
import { FindParams, findTask } from 'api/task';
import { AxiosError, AxiosResponse } from 'axios';
import { TaskState } from 'models/Task.interface';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import FindBackground from './components/FindBackground';
import NotFoundBackground from './components/NotFoundBackground';
import { Container, FormInput, SearchWrapper } from './SearchPage.style';
import List from './components/List';

const SearchPage: React.FC = () => {
  const [form] = Form.useForm();
  const [taskList, setTaskList] = useState<TaskState[]>([]);
  const [value, setValue] = useState<string>('');

  const mutation = useMutation<
    AxiosResponse<TaskState[]>,
    AxiosError,
    FindParams
  >(findTask);

  const handleSubmit = (values: { search: string }): void => {
    if (!values?.search) {
      return;
    }

    mutation.mutate(
      {
        content: values.search,
      },
      {
        onSuccess: (response: AxiosResponse<TaskState[]>) => {
          setTaskList(response.data);
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mutation.mutate(
      {
        content: e.currentTarget.value,
      },
      {
        onSuccess: (response: AxiosResponse<TaskState[]>) => {
          setTaskList(response.data);
        },
      }
    );
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
        {value && taskList.length === 0 && !mutation.isLoading ? (
          <NotFoundBackground />
        ) : (
          <List tasks={taskList} />
        )}
      </Container>
    </SearchWrapper>
  );
};

export default SearchPage;
