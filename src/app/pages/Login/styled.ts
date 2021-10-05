import { Button } from 'antd';
import styled from 'styled-components';

interface InputGroupProps {
  hasError?: boolean;
}

export const TableContainer = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;

export const Middle = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Flex = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  margin: 0 auto;
  min-width: 300px;
  max-width: 500px;
  height: clamp(50vh, 70vh, 100vh);
  flex-shrink: 1;
  flex-grow: 1;
  overflow-y: auto;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  padding: 24px 48px;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  padding-top: 12px;
  margin-bottom: 24px;
`;

export const Logo = styled.img`
  text-align: center;
  cursor: pointer;
  max-width: 256px;
  height: 24px;
`;

export const Heading = styled.h2`
  color: #000;
  font-size: 2rem;
  margin-bottom: 12px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 16px;
`;

export const InputGroup = styled.div<InputGroupProps>`
  --border-color: rgb(183 183 183 / 60%);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  & > label {
    display: inline-block;
    color: ${(props) => (props.hasError ? 'var(--danger-color)' : '#000')};

    & .error {
      display: ${(props) => (props.hasError ? 'inline' : 'none')};
      font-size: 0.9rem;
    }
  }

  & input {
    border-color: ${(props) =>
      props.hasError ? 'var(--danger-color)' : 'var(--border-color)'};
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #000;
  margin-bottom: 4px;
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 0.9rem;
  color: #000;
  border: 1px solid var(--border-color);
  transition: all ease 0.2s;

  &:active,
  &:focus {
    border-color: rgb(183 183 183 / 80%);
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 6px;
  outline: none;
  min-width: 120px;
  height: 48px;
  color: #fff;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 1rem;
  font-weight: 400;
  padding: 6px 40px;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 93, 166);
  }
`;
