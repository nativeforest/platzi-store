import { mount, shallow } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';
// eslint-disable-next-line import/no-unresolved
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('testing <Header />', () => {
  test('render component header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('render title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header snapshot', () => {
  test('testing UI header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
