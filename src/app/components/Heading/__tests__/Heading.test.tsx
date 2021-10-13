import { render, fireEvent, screen } from '@testing-library/react';
import Heading from '../Heading';

describe('heading', () => {
  let icon = '',
    text = 'content',
    next = {
      isDisabled: false,
      handler: jest.fn(() => {}),
    },
    prev = {
      isDisabled: false,
      handler: jest.fn(() => {}),
    };

  beforeEach(() => {
    render(<Heading icon={icon} text={text} next={next} prev={prev} />);
  });

  it('renders with text', () => {
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  describe('next button', () => {
    it('next clicked', () => {
      const nextElement = screen.getByTestId('next');

      fireEvent.click(nextElement);

      expect(next.handler).toBeCalledTimes(1);
    });
  });

  describe('prev button', () => {
    it('prev clicked', () => {
      const preElement = screen.getByTestId('prev');

      fireEvent.click(preElement);

      expect(prev.handler).toBeCalledTimes(1);
    });
  });
});
