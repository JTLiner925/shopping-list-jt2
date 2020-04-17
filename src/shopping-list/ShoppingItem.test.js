//npm install enzyme enzyme-adapter-react-16 --save-dev
//this installs enzyme before you decide to use it

//npm install enzyme-to-json --save-dev
//need to install this command as well

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
//put this code in the setupTest.js file

import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import ShoppingItem from './ShoppingItem';

//describe creates test-suite
describe('ShoppingItem component', () => {
  it('renders empty given no item', () => {
    const wrapper = shallow(<ShoppingItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }) 

  it('renders the item when supplied', () => {
    // We're adding props to the ShoppingItem for different test cases
    const testItem = { name: 'test-item', checked: false }
    const wrapper = shallow(<ShoppingItem item={testItem} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }) 

  it('strikes through checked items', () => {
    const testItem = { name: 'checked-item', checked: true }
    const wrapper = shallow(<ShoppingItem item={testItem} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
