//Scope hai ke aap apne created variables and functions kaha tk use kr skte hai

//Execution content 
//  function myfunction(){
//     let a= 12;
//     function defg(){
//         console.log(a);
//     }
//     defg();
//  }


//  function clickLimiter(){
//     let click = 0;
//     return function(){
//         if(click< 5){
//             click++;
//             console.log(`clicked : ${click} times`);
//         }
//     };
//  }


//  let fnc = clickLimiter();
//  fnc();
//  fnc();


//toaster
// function createToaster(){
//     return function (){
//      let div = document.createElement("div");
//      div.className = fixed bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX "right" ? "right-10" : "left-10"} ${config.positionY "top" ? "top-10": "bottom-10"}`;
//     };
// }

// let toaster = createToaster({
//     positionX: "right ",
//     postitionY:"top",
//     theme:"dark",
//     duration: 3,
// });

// toaster("This is a dummy notification")


// console.log(this);


// function abcd(){
//     console.log(this);
// }
// abcd();


// let obj ={
//     name: " vatsal",
//     sayName: function(){
//         console.log(this.name);
//     },
// };

// obj.sayName();

// document.querySelector("h1").addEventListener("click", function(){
//     alert();
// });


