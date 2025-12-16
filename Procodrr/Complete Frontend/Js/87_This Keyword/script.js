// function Hi() {
//   this.hello = 'world'
//   console.log(this)
// }

// new Hi()

const user = {
  firstName: 'Kaushik',
  lastName: 'Patel',
  tag: ['a', 'b', 'c'],
  printTag: () => {
    console.log(this)
  }
}


const h1 = document.querySelector('h1'); 


h1.addEventListener('click', function (e){
  console.log(e.target)
  console.log(e.currentTarget)
  console.log(this)
})

