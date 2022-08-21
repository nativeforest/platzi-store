import getData from '../../utils/getData';

describe('getData test', () => {
  beforeEach(() => {
    fetch.resetMocks();

  });
  test('call api then return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'data' }));
    getData('https://www.google.com').then((res) => {
      expect(res.data).toEqual('data');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com');
  });
});
