import React from 'react';
import { shallow, mount } from 'enzyme';
import  ProviderMock  from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('testing <Product />', () => {
  test('render product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('click button then buy', () => {
    const handleAddToCart = jest.fn();
    const wrapperWithProduct = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapperWithProduct.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    // expect(product.find('.Product-title').text()).toEqual('Product');
  });
});
