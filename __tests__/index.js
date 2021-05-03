import {jest} from '@jest/globals';
import {foobar} from '../foobar.js'
import * as fooModule from '../foo.js'
import barModule from '../bar.js'
jest.mock('../foo')
jest.mock('../bar')

describe(`Testing index`, () => {
  test(`Should be able to mock named exports.`, () => {
    const fooMock = jest.spyOn(fooModule, 'foo')
    foobar()  
    expect(fooMock).toHaveBeenCalled()
  })
  test(`Should be able to mock default exports.`, () => {
    const barMock = jest.spyOn(barModule, 'bar')
    foobar()  
    expect(barMock).toHaveBeenCalled()
  })
})