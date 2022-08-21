import getAllProducts from '../../services/products-api';

describe('getAllProducts faker store api test', () => {
  beforeEach(() => {
    fetch.resetMocks();

  });
  test('call /products then return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'data' }));
    getAllProducts().then((res) => {
      expect(res.data).toEqual('data');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://fakestoreapi.com/products');
  });
});
