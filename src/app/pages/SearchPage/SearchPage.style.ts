import styled from 'styled-components';
import { Input } from 'antd';

export const SearchWrapper = styled.div`
  background: #f1f1f1;
  padding: 40px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled(Input)`
  border-radius: 6px;
  height: 36px;
`;

export const Container = styled.div`
  position: relative;
  padding: 0 32px;
  flex: 1;
  overflow-y: auto;
  line-height: 1;
`;
