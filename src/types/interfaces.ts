export interface Fn<T> {
    // [x: string]: any
    (a: number, b: number): boolean
    defaultProp?: T
    displayName: string
}