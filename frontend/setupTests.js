// setupTests.js
import '@testing-library/jest-dom/extend-expect'; // For jest-dom matchers
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// You can also add global variables or mocks here
// global.someGlobalVar = 'someValue';
