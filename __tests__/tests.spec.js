import axios from 'axios';
import React from 'react';
import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/App';

describe('Api test', () => {
  test('Ajax request to endpoint /api/products should return data', () => {
    return axios.get('http://localhost:3000/api/products')
      .then((results) => {
        expect(results.data).toHaveLength(100);
      });
  });
});

configure({ adapter: new Adapter() });

describe('A suite', function () {
  // it('should render without throwing an error', function () {
  //   expect(shallow(<App />).contains(<div className="app"></div>)).toBe(true);
  // });

  it('Should return a div element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).toEqual('div');
  })
});