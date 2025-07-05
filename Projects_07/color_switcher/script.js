let btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Approach 1 

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    
    
    body.style.backgroundColor = e.target.id;
  });
});

// Approach 2

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
    
//     if (e.target.id === 'grey' ) {
//         body.style.backgroundColor = e.target.id;
//     }
    
//     if (e.target.id === 'white' ) {
//         body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'blue' ) {
//         body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'yellow' ) {
//         body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'red' ) {
//         body.style.backgroundColor = e.target.id;
//     }

//   });
// });


// Approach 3

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
    
//     switch (e.target.id) {

//         case 'grey':
//             body.style.backgroundColor = e.target.id
//             break;

//         case 'white':
//             body.style.backgroundColor = e.target.id
//         break;

//         case 'blue':
//             body.style.backgroundColor = e.target.id
//         break;

//         case 'yellow':
//             body.style.backgroundColor = e.target.id
//         break;  
        
//         case 'red':
//             body.style.backgroundColor = e.target.id
//         break;       
       
//     }

//   });
// });