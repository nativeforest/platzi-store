import actions from '../../actions/index';
import productMock from '../../__mocks__/productMock';

describe('actions', () => {
  const payload = productMock;
  test('add to cart', () => {
    const expectedActionPayload = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expectedActionPayload);

  });
  test('remove from cart', () => {
    const expectedActionPayload = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(productMock)).toEqual(expectedActionPayload);
  });
});
