// import { shallow, ShallowWrapper } from "enzyme";
// import LeftPanel from "../LeftPanel";
import { render, fireEvent, screen } from '@testing-library/react';
import { defaultAuthHandler } from 'contexts/authHandler';
import AuthProvider from 'contexts/AuthProvider';
import { useTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import LeftPanel from '../LeftPanel';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en',
    },
  }),
}));

jest.mock('app/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe('LeftPanel', () => {
  // let wrapper: ShallowWrapper

  beforeEach(() => {
    // const context = {
    //   identity: {
    //     id: 1,
    //     name: 'Tester',
    //     email: 'tester@gmail.com'
    //   }
    // }

    // wrapper = shallow(<LeftPanel />, { context });
    render(
      <AuthProvider provider={defaultAuthHandler}>
        <MemoryRouter>
          <LeftPanel />
        </MemoryRouter>
      </AuthProvider>
    );
  });

  it('should invoke change language', async () => {
    const { i18n } = useTranslation();
    // let btnVN = wrapper.find('.btn-vn');
    // expect(btnVN.length).toBeGreaterThan(0);

    // btnVN.at(0).simulate('click');
    jest.spyOn(console, 'log');

    expect(i18n.language).toBe('en');

    fireEvent.click(screen.getByText('VN'));

    expect(console.log).toHaveBeenCalledTimes(1);
    // expect(i18n.changeLanguage).toHaveBeenCalledTimes(1);
  });
});
