import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoAddSharp, IoEllipseOutline } from 'react-icons/io5';
import { Input, Left, Form, Wrapper, Hint } from './NewTask.style';

interface Props {
  handleAdd?: (value: string) => void;
}

const NewTask: React.FC<Props> = ({ handleAdd }) => {
  const { t } = useTranslation();
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleEnterKey = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleAdd && handleAdd(value);
      setValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Left>
        {focused ? (
          <IoEllipseOutline size='1.8rem' color='#fff' />
        ) : (
          <IoAddSharp size='1.8rem' color='#fff' />
        )}
      </Left>
      <Form onSubmit={(e) => e.preventDefault()} autoComplete='off'>
        <Input
          name='new-task'
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleEnterKey}
          value={value}
          onChange={handleChange}
          data-testid='input-add-task'
        />
        {!focused && <Hint>{t('tasks.input')}</Hint>}
      </Form>
    </Wrapper>
  );
};

export default NewTask;
