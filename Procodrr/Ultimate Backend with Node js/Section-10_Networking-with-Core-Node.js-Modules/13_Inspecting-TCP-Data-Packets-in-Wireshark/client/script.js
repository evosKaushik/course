const response = await fetch("http://192.168.43.130:4000")

const data = await response.text()

console.log(data)