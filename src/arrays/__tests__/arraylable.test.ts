/*
export const arraylable = (value: unknown[] | null): unknown[] =>  {
    return Array.isArray(value) ? value : []
}
*/

import { arraylable } from "../arraylable"

describe('arraylable', () => {
    it('should return same array if input is an array', () => {
        expect(arraylable([1,2,3])).toEqual([1,2,3])
    })
    it('should return an empty array when input is not an array', () => {
        expect(arraylable(null)).toEqual([])
    })
    it('should return an empty array when input is not an array', () => {
        expect(arraylable(123 as unknown as unknown[])).toEqual([])
        expect(arraylable("hello" as unknown as unknown[])).toEqual([])
    })
})