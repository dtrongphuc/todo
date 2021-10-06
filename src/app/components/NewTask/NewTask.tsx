import React, { useRef, useState } from 'react';
import { IoAddSharp, IoEllipseOutline } from 'react-icons/io5';
import { Input, Left, Form, Wrapper, Hint } from './NewTask.style';

interface Props {
  handleAdd: () => void;
}

const NewTask: React.FC<Props> = ({ handleAdd }) => {
  const [focused, setFocused] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleEnterKey = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleAdd();
      formRef.current?.reset();
    }
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
      <Form onSubmit={(e) => e.preventDefault()} ref={formRef}>
        <Input
          name='new-task'
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleEnterKey}
        />
        {!focused && <Hint>Add a task</Hint>}
      </Form>
    </Wrapper>
  );
};

export default NewTask;
