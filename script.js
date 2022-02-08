// JS Things to Try

// 1. Give user an alert when form button is submitted
// 2. Change button background on click
// 3. Add some sort of effect on hambuger menu icon when clicked


// ***** 1. Provide alert when user submits form

// target form button on blog and contact pages

const form = document.querySelector('form');
console.log(form);

// add event listener for form sumbit button

form.addEventListener('submit', function(event){
  event.preventDefault();
  alert('Thank you for contacting us! We will be in touch as soon as possible.');  
});

// ***** 2. Change button background on click

// let clickButton = document.querySelector('button');
// console.log(clickButton);

//   clickButton.addEventListener('click', function(){
//   clickButton.style.backgroundColor = '#FA8128';
//   });




