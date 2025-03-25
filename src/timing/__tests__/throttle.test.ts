import { throttle } from "../throttle"


describe('throttle', () => {
    // la función debe ejecutarse una sola vez
    test('should execute the original function 1 time', () => {
        /**
         * No importa cuantas veces llame a mi función (dentro del delay) esta debe ejecutarse una vez
         */
        const fn = vi.fn() // mock
        const throttledFn = throttle(fn, 200)
        // "hago click en el boton 3 veces"
        throttledFn()
        throttledFn()
        throttledFn()
        // expect(fn).toHaveBeenCalledTimes(1) // Esperamos que fn sea llamada una sola vez
        // expect(fn).toHaveBeenCalled() Solo esperamos que fn sea llamada
        expect(fn).toHaveBeenCalledOnce()
        vi.advanceTimersByTime(210)
        throttledFn()
        throttledFn()
        expect(fn).toHaveBeenCalledTimes(2)
    })  
})

/*

function onClick() {
// Do something fancy
}

const myThrottledFn = onClick

<button type="" onClick={myThrottledFn}>

*/