import { afterEach, beforeEach, vi } from "vitest"

/*
    After each: Cualquier cosa que querramos ejecutar después de cada test
    beforeEach: Se ejecuta antes de empezar un test
*/

beforeEach(() => {
    vi.useFakeTimers()
})

afterEach(() => {
    vi.resetAllMocks()
})