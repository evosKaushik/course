const shouldTestPass = Math.random() < .25

if (shouldTestPass) {
    console.log("Test Passed!")
    process.exit(0)
}else{
    console.log("Test Failed!")
    process.exit(1)
}




