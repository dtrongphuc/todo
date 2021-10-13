import React from 'react';
import { withPagination } from '../withPagination';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const mockStore = configureStore();
describe('withPagination', () => {
  let MockComponent: React.FC, WrapperComponent: React.FC;
  const store = mockStore({
    tasks: {
      totalPage: 1,
    },
  });

  beforeEach(() => {
    MockComponent = () => <div>Fake component</div>;
    WrapperComponent = withPagination(MockComponent);
  });

  it('renders the Mock Component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <WrapperComponent />
      </Provider>
    );
    expect(getByText('Fake component')).toBeInTheDocument();
  });
});
