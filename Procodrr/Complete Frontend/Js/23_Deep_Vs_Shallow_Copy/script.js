// const username1 = 'kaushik';

// let username2 = username1

// username2 = username2 + ' Singh'


const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits  = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

const user1 = {
    firstName: 'Anurag',
    lastName: 'Singh'
}

// const users2 = user1

// users2.lastName = 'Pandey'

const users2 = {...user1}

users2.firstName = 'Kaushik'

// Object.assign(users2, user1)

// const myFruits = [...fruits];
// const myFruits = [...fruits];

// // 
// const myFruits = fruits.slice();

const myFruits = [...fruits]

// Object.assign(myFruits, fruits)

myFruits.push('Grapes')

// myFruits.push('Dates')
// myFruits.push('Grapes')


const users3 = {
    firstName: 'Kaushik',
    lastName: 'Patel',
    pata: {
        city: 'Varanasi',
        pincode: 221011,
    }
}
// const users4 = {...users3}

// users4.pata = {...users3.pata}

// users4.pata.state = 'up'

//Shallow Copy

const users4