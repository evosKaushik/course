const response = await fetch("192.168.43.130:4000")
console.log(response.body)
for await(const chunk of response.body){
    console.log(chunk)
}