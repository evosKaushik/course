const chaiFlavours: string[] = ["Masala", "Adark"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {
        name: "Masasla",
        price: 25
    },
    {
        name: "Ginger",
        price: 20
    },
]

const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Varanasi")

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]
// chaiTuple = ["Ginger", 15]

let userInfo: [string, number, boolean?];

userInfo = ["Kaushik", 15, true]

const location: readonly [number, number] = [28.89, 62.61]

const chaiItems: [name: string, price: number] = ["Masala", 23]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED, // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType) {
    console.log(`Making ${type}`)
}

makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME = "Chai",
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.LOW

let t: [string, number] = ["chai", 10]
t.push("extra")