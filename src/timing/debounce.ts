/*
    debounce vs throttle
    Debounce: cancela la ejecución cada vez que se ejecute

    Mediante input
    Ejecuta una función /callback X  tiempo despuéws de que el usuario dispare un evento

    Termina una acción, pasa X tiempo --> ejecuta el callback
*/

import type { AnyFunction } from "@src/types/helpers"

export function debounce<T extends AnyFunction> (fn:T, delay: number = 500): (...args: Parameters<T>) => void {
    let timeOutId: ReturnType<typeof setTimeout> | undefined = undefined

    return function debouncedFn(...args: Parameters<T>) {
        // Si existe un timeoutId (ya se ejecuto ese evento) y entro de nuevo a la función quiere decir
        // que se volvió a disparar el evento por lo que tenemos que resetear ese temporizador
        if(timeOutId !== undefined) {
            clearTimeout(timeOutId)
        }

        timeOutId = setTimeout(() => fn(...args), delay)
    }
}
