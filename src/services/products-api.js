import { BASE_URL } from './config';

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
};
export default getAllProducts;
