let a: any = 5
let b: unknown = 2

a = "Hi"
b = "Bye"

a.toUpperCase()

if (typeof b === "number") {
    console.log(b.toString())
}