import React from 'react';
import { shallow } from 'enzyme';
import Button from '@od/react/components/Button';
import configureMockStore from 'redux-mock-store';
import LoginForm from '../../../containers/LoginForm/LoginForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginForm', () => {
  it('renders the login form button', () => {
    const wrapper = shallow(<LoginForm store={store} />).dive();
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('renders with login-form class', () => {
    const wrapper = shallow(<LoginForm store={store} />).dive();
    expect(wrapper.find('.login-form')).toHaveLength(1);
  });
  it('renders with empty email state value', () => {
    const wrapper = shallow(<LoginForm store={store} />).dive();
    expect(wrapper.state().email).toBe('');
  });
  it('renders state with input values', () => {
    const wrapper = shallow(<LoginForm store={store} />).dive();
    wrapper.instance().setState({ email: 'abc@gmail.com', password: 'xyz' });
    expect(wrapper.state().email).toEqual('abc@gmail.com');
    expect(wrapper.state().password).toEqual('xyz');
  });
  it('renders with empty email state value', () => {
    const wrapper = shallow(<LoginForm store={store} />).dive();
    //wrapper.instance().handleSubmit(event);
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });
    console.log(wrapper.state());
    //expect(wrapper.state().email).toBe('');
  });
});
