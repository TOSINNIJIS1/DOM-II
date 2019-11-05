// Your code goes here

//Mouse Over Starts Here

const fun = document.querySelector  ('img');
console.log('fun', fun);

fun.addEventListener('mouseover', () => {
    fun.style.transform = 'scale(1.2)';
    fun.style.transition = '0.9s';
    fun.style.borderRadius = '20px';

})


//Mouse Over Ends Here

//Mouse Leave Starts Here

fun.addEventListener('mouseleave', () => {
    fun.style.transform = 'scale(1)';
    fun.style.transition = '0.9s'
})

//Mouse Leave Ends Here


// const navLinks = document.querySelectorAll('.nav-link');
// console.log('navLinks', navLinks); 

// navLinks.addEventListener('mouseenter', () => {
//   navLinks.style.transform = 'scale(1.2)';
//   navLinks.style.transition = '0.9s';
// })



const paragraph = document.getElementsByTagName ('p');
console.log('paragraph', paragraph)



// paragraph[0].addEventListener('keydown', key => {
//     if (key.isComposing || key.keyCode === 229){
//         return;
//     } 
// });

const head = document.querySelector('header');
console.log('head', head)
const body = document.querySelector('body');
const navBar = document.querySelector('.nav')

body.addEventListener('keydown', () => 
  head.style.opacity = '0');
  
  navBar.addEventListener('mouseover', () => {
    head.style.opacity = '1';
    head.style.transition = '0.5s';
});


//WHEEL QW

paragraph[0].addEventListener('wheel', func); 
function func() {
  this.style.fontSize = '20px';
  alert('wheel');
}


//Drag

