import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import React from 'react'
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel'

test('default to Off',()=>{
    //expect(true).toBe(true)
    // render one level : shallow, 
    // ไม่ว่า CheckboxWithLabel จะ compose component อะไรก็ตาม จะไม่สนใจ มันะจะ render แค่ ชั้นเดียว และ return wraper ออกมา
    const w = shallow(<CheckboxWithLabel />)
    //text or label in CheckboxWithLabel = off?;w = wrap
    expect(w.text()).toEqual('Off')
})

test('show On when checked',()=>{
    const w = shallow(<CheckboxWithLabel />)
    // simulate event change
    // Jest is test framework and run แต่เราต้องการ enzyme มาช่วย render react component
    w.find('input').simulate('change')
    expect(w.text()).toEqual('On')
})

test('default label Off -> No',()=>{
    const w = shallow(<CheckboxWithLabel labelOff="No" />)
    expect(w.text()).toEqual('No')
})

test('default label On -> Yes',()=>{
    const w = shallow(<CheckboxWithLabel labelOn="Yes" />)
    w.find('input').simulate('change')
    expect(w.text()).toEqual('Yes')
})