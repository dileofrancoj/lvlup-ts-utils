import { isString } from "@src/check"

// hola mundo - Hola Mundo
export const capitalize = (s: string): string => {
    if(!isString(s)) return s // throw new Error(s , 'is not a valid string')
    // Calcular la complejidad temporal de esta implementación
    const splittedString = s.split(' ')
    return splittedString.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }).join(' ')
}