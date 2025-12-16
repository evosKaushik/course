let response: any = "42"

let numericLength: number = (response as string).length

type Book = {
    name: string,
}

let bookString = '{"name":"TypeScript Guide"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
if (typeof newValue === "string") {
    newValue.toUpperCase()
}