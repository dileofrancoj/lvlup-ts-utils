import { capitalize } from "../capitalize"

// import {describe, it, expect, vi, } from 'vitest'
describe('capitalize', () => {
    // it.each
    it.each([
        {tested: 4, expected: 4, label: '4'},
        {tested: null, expected: null, label: 'null'},
        {tested: {}, expected: {}, label: '{}'},
    ])('capitalize($label) should be $expected', ({tested,expected})=> {
        // @ts-expect-error we should test not string param case
        const result = capitalize(tested)
        // capitalize('algo') -> 'Algo'
        expect(result).toStrictEqual(expected)
    })
    it('Should return Level Up when string is level up', () => {
        const result = capitalize('level up')
        expect(result).toBe('Level Up')
    })
    it('Should return "" when string is ""', () => {
        const result = capitalize('')
        expect(result).toBe('')
    })
    it('Should return "Level Up" when string is "LEVEL UP"', () => {
        const result = capitalize('LEVEL UP')
        expect(result).toBe('Level Up')
    })
})