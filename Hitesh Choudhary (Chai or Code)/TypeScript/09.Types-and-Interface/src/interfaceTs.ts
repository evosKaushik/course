type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100
    milk = 50
}

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// type Response = { ok: true } | { ok: false }
// class myRes implements Response {
//     ok: boolean = true
// }

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType) {
    console.log(t)
}

type Config = {
    readonly appName: string
    version: number
}

const ctf: Config = {
    appName: "kaushik",
    version: 1
}

ctf.appName = ""