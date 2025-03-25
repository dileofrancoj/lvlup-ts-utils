/*

    if(isString(stringValue) && isString(value)) {
        const normalizedStringValue = stringValue.trim().toLowerCase()
        const normalizedValue = value.trim().toLocaleLowerCase()
        return normalizedStringValue.includes(normalizedValue)
    } 
*/

import { includes } from "../includes"

describe(('includes'), () => {
    it('includes("hola", "ho") should be true', () => {
        expect(includes("hola", "ho")).toBe(true)
    })
    it('should return false if first argument is not a string', () => {
        // @ts-expect-error we want to test not string first argue usecase
        expect(includes(undefined, "ho")).toBe(false)
    })
    it('includes("level","something") should return false', () => {
        expect(includes("level", "something")).toBe(false)
    })
})
