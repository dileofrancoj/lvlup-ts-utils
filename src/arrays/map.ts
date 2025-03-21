// recibe un array de items y una función de transformación (callback)
// devuelve el array mapeado

import { arraylable } from "./arraylable"

// [2,4,6,8].map((num) => num * 2)
// ["hola","chau"].map((word) => word.length)
export const map = <T,U>(array: T[], fn: (element: T) => U): U[]  => {
    // incluir un error de que no podemos mapear algo que no es un array
    if(!arraylable(array) || typeof fn !== 'function') return []
    return map(array,fn)
}