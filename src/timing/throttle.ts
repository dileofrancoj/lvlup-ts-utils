/**
 Después de que la función se ejecuta la primera vez se establece un intervalo de tiempo durante
 el cual no puede ejecutarse nuevamente incluso si se desencadenan más eventos
 */
// someFn('param1', 'param2') // ['param1','param2']
 type AnyFunction = (...args: unknown[]) => unknown

 // Esto nos tiene que devolver una función
 // fn('param1','param2') -> Parameters<T> (string,string)
export function throttle<T extends AnyFunction> (fn:T, delay: number = 500): (...args: Parameters<T>) => void {
    let timeOutId : ReturnType<typeof setTimeout> | undefined = undefined // genera un timeOutId unico para cada instancia de setTimeOut
    return function throttledFunction(...args: Parameters<T>) {
        // La función está activa
        // const waitingArgs = args
        // si la función ya se ejecuto y no pasó el tiempo cortamos la ejecución
        if(timeOutId !== undefined) {
            return 
        }

        timeOutId = setTimeout(() => { 
            // cuando se termina el delay entra acá
            timeOutId = undefined
        }, delay)
        // if(waitingArgs) { return(waitingArgs)}
        return fn(...args)
    }
}








/*
function onClickButton(...........): void {
    // some logic
}
const throttledClick = throttle(onClickButton, 500) // devuelve una función modificada con un "timer"

<button onClick={throttledClick}>
    Click me
</button>
 */
