// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// eslint-disable-next-line import/no-extraneous-dependencies
global.fetch = require('jest-fetch-mock');
