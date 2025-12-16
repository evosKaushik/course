interface Chai {
    flavor: string;
    price: number;
    milk?: boolean
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "ChaiCode Cafe"
}

interface DiscountCalculator {
    (price: number): number

}
const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(price: number): void
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log('Start');
    },
    stop() {
        console.log("Stop");
    },
}

interface ChaiRating {
    [flavour: string]: number
}

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 6.5,
}

interface User {
    name: string
}

interface User {
    age: number


}

const u: User = {
    name: "Kaushik",
    age: 2
}

interface A { a: string }
interface B { b: string }

interface C extends A, B { }

//! =====================================================================================================================================================


function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(1)
wrapInArray({ flavour: "ginger" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", 20)

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 }
const numberBoxCup: Box<string> = { content: "10" }

interface APIPromise<T> {
    status: number;
    success: boolean;
    data: T;
}

const res: APIPromise<{ flavour: string }> = {
    status: 200,
    success: true,
    data: { flavour: "masala" }
}