

// Higher Order function 
function a(b) {
  console.dir(b);
  b();
}

// console.log('Hiiiiiiii!');

// a({username: 'Kaushik', Age: 15});
// a([1,2,3,4,5,6,7]);

// function sayHi() {
//   console.log("Hiiiiiiiiiiiiiiiiiiiiii");
// }

// console.dir('Normal String');

// const x = sayHi

// x()

// console.dir(a);

// a.age= 87

// x.age = 34


// Callback function ¬
a(function () {
  console.log("Hiiiiiiiiiiiiiiiiiiiiii");
});





function papa(fn) { 
    fn()
}

function bata() {
    console.log('I am Child of the papa function');
}

papa(bata)

