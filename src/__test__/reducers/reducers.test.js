import reducer from "../../reducers";
import ProductMock from "../../__mocks__/productMock";

describe('reducers', () => {
  test('return initial state', () => {
    const withoutTypeCase = '';
    expect(reducer({}, withoutTypeCase)).toEqual({});
  });

  test('ADD_TO_CART test', () => {
    const initialState = {
      cart: [],
    };
    const stateExpectedWhenAddToCart = { cart: [ProductMock] };
    const action = {
      type: 'ADD_TO_CART',
      payload: ProductMock,
    };
    expect(reducer(initialState, action)).toEqual(stateExpectedWhenAddToCart);
  });

});
