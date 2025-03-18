export const isObject = (value: unknown): value is object => {
    if(value === null) return false
    return typeof value === 'object'
}
