'use strict';

// call, apply, bind

let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

function changeButtonColor(height, width){
  this.style.backgroundColor = 'green';
  this.style.height = height;
  this.style.width = width;
}


button1.addEventListener('click', function(){
  console.log('click1');
  //changeButtonColor.call(button1, '100px', '500px'); // вызвать функцию с явно указанным контекстом и списком передаваемых параметров
  //changeButtonColor.call(button1, [param1, param2]); // вызвать функцию с явно указанным контекстом и массивом параметров
  let func = changeButtonColor.bind(button2); // bind переменной присвоить функцию и явно указать контекст
  func(); // когда нам захочется - вызвать эту функцию
});

button2.addEventListener('click', function(){
  console.log('click2');
});
