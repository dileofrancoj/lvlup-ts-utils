/*
    Recibe un argumento generico o array y devuelve un generico o un array
    La funcion devuelve el mismo array si el argumento es un array  valido y de lo contrario devuelve un array vacio

    tags:  [50_OFF, MXY] null
*/

export const arraylable = (value: unknown[] | null): unknown[] =>  {
    return Array.isArray(value) ? value : []
}