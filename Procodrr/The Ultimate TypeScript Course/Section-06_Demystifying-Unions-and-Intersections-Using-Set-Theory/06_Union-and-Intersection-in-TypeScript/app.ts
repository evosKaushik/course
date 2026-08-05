type T1 = string | "Hi"
type T2 = boolean | false
type T3 = Exclude<boolean, false>

type T5 = string | `Hi, ${string}`

type T8 = (number | string) & string

type T9 = unknown & boolean

type T10 = string & number