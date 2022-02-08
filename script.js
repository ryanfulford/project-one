// JS Things to Try

// 1. Give user an alert when form button is submitted
// 2. Change button background on click

// ***** 1. Provide alert when user submits form

// target form button on blog and contact pages
// const form = document.querySelector('form');
// console.log(form);

// // add event listener for form sumbit button

// form.addEventListener('submit', function(event){
//   event.preventDefault();
//   alert('Thank you for contacting us! We will be in touch as soon as possible.');  
// });

// ***** 2. Change button background on click

buttonChanger = function() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(function(individualButton) {
    individualButton.addEventListener('click', function(){
      const selectedButton = this.id;
      individualButton.style.backgroundColor = '#FA8128';
    });
  });
}

buttonChanger();

// Cannot get both form submit and button color change to work at the same time, form is null, investigate this to debug.




