import type { NullOrUndefined } from "@src/types/helpers";

export const isNullOrUndefined = (value: unknown): value is NullOrUndefined => {
    return value === null || value === undefined
}