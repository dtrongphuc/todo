import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  height: 54px;
  margin-left: 32px;
  margin-right: 32px;
  padding: 0 4px;
`;

export const Left = styled.div`
  height: 100%;
  width: 54px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  flex: 1;
  padding-right: 16px;
  height: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
`;

export const Hint = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1rem;
`;
