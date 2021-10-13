import { shallow } from 'enzyme';
import EmptyBackground from '../EmptyBackground';

describe('App component', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<EmptyBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
