import { render, fireEvent, screen } from '@testing-library/react';
import NewTask from '../NewTask';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('NewTask', () => {
  let handleAdd = jest.fn(() => {});

  beforeEach(() => {
    render(<NewTask handleAdd={handleAdd} />);
  });

  it('add new task invoke', () => {
    let input = screen.getByTestId('input-add-task');
    input.focus();
    expect(input).toHaveFocus();

    fireEvent.keyDown(input, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    expect(handleAdd).toBeCalledTimes(1);
  });
});
