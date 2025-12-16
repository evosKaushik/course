
// type Chai = {
//     name: string;
//     price: number;
//     isHot: true;
// }

const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
}

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adarkChai: Tea = {
    name: "Adark Chai",
    price: 50,
    ingredients: ["sugar", "water", "milk", "adark"]
}

type Cup = { size: string }
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: "500ml", material: "steel" }

smallCup = bigCup

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabia" }

const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const user: User = {
    username: "KaushikDev",
    password: "123"
}

type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[]
    address: Address
}

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>) => {
//     console.log("updating chai with", updates)
// }

// updateChai({ price: 25 })
// updateChai({ isHot: false })
// updateChai({})

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

placeOrder({ name: 'Masala Chai', quantity: 20 })

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30,
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<ChaiNew, "secretIngredients">
