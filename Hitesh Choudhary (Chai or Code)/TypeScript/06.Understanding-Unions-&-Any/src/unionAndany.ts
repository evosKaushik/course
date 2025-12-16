let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window'

airlineSeat = 'aisle'

const orders = ['12', '20', '69', '28', '96']

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '28') {
        currentOrder = order
        break
    }
    currentOrder = '12'
}

console.log(currentOrder)