import React from 'react'
import Link from '../src/Link'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Link changes the class when hovered', () => {
  it('should generate snapshots', () => {
    const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseEnter()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseLeave()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should blablab', () => {
    const actual = shallow(<Link page="http://www.facebook.com">Facebook</Link>)
    // const expected

    console.log(actual.debug())

    // expect(actual).to
  })
})
