/*
    si recibe null -> isEmpty(null) // true
    si recibe undefined -> isempty/true
    si recibe {} // true
    si recibe [1,2,3] // false
    si recibe {name: 'Rocko'} // false
*/
import {describe, expect,it} from 'vitest'

import { isEmpty } from "../isEmpty"

describe('isEmpty', () => {
    it.each([
        {tested: null, expected: true, label: 'null'},
        {tested: undefined, expected: true, label: 'undefined'},
        {tested: ['1','2'], expected: false, label: '[1,2]'},
        {tested: [], expected: true, label: '[]'},
    ])('isEmpty($label) should be $expected', ({tested, expected}) => {
        expect(isEmpty(tested)).toBe(expected)
    })
})