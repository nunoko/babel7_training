import React from 'react'
import InputText from '../InputText'
import renderer from 'react-test-renderer'

test('default',()=>{
    const component = renderer.create(<InputText />)
    // use to JSON is result from create renderer
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('spread props works',()=>{
    const component = renderer.create(
    <InputText placeholder="aaa" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})