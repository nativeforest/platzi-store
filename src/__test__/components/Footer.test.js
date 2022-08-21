import React from 'react';
// import 'jsdom-global/register';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
describe('testing <Footer/>', () => {
  const footer = mount(<Footer />);
  test('render component', () => {
    expect(footer.length).toEqual(1);
  });
  test('render title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
    // expect(mount(<Footer />).find('h1').text()).toEqual('Footer');
    // expect(mount(<Footer />).find('.Footer-title').text()).toEqual('Footer');
  });
});

describe('Footer snapshot', () => {
  test('testing UI footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
