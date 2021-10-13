import App from 'app/App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
