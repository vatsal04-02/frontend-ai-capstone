// let def= function(){

//     console.log("hello");
// }

// def();


// fat arrow function

// let fnc = () => {
//     console.log("hello")
// };

// fnc();

// function abcd(...val){
//    console.log(val);
// }

// abcd(1,2,34,4,432,432,651,12,3);


//  let arr = [1,2,3,4,5];
//  arr.push(2);
//  console.log(arr);


// let obj ={

//     name: "vatsal",
//     age:21,
// };

// let aa ="name";

// obj[aa];

//  let abcd = document.getElementsByClassName("abcd");
//  console.dir(abcd);


// let abcd =document.querySelectorAll("h1");
// console.dir(abcd);

// dom manipulation
// let h1 = document.querySelector("h1");
// h1.innerHTML = "<i> hey </>";
// h1.hidden = true;


// attribute manipulation
// let a = document.querySelector("a");
// a.setAttribute("href", "https://google.com");

// let img = document.querySelector("img");
// img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1781824093311-803b9f9b7c5c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// );


// let a =document.querySelector("a");
// console.log(a.getAttribute("href"));


// let a =document.querySelector("a");
// a.removeAttribute("href");


// Dynamic dom manipulati
// 
// append-pre
// prepend-post

// create element
// then append/ prepend kro

// let h1 =document.createElement("h1");
// h1.textContent = "hello ji";
// document.querySelector("body").append(h1);

// let h1 = document.createElement("h1");
// h1.textContent = "hey mai gym se aya hu";
// document.querySelector("div").appendChild(h1);

// js se css badalna 
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor="black";
// h1.style.fontFamily ="Gilroy";
// // h1.style.textTransform ="capitalize";


// let h1 = document.querySelector("h1");
// h1.classList.remove("hulu");

// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);


// let h1 =document.querySelector("#abcd");
// h1.textContent = "sheriyans coding";


// let lis = document.querySelectorAll("li");
// for( i =0 ;i<lis.length;i++){
//    console.log(lis[i].textContent);
// }

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color ="red";
// });

// let p = document.querySelector("p");

// function dblclick(){
//     p.style.color ="yellow"
// }

// p.addEventListener("dblclick",dblclick);
// p.removeEventList


// let inp = document.querySelector("input");
// inp.addEventListener("input" , function(dets){
//     if(dets.data !== null){
//     console.log(dets.data);
//     }
// });
// change event 

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// sel.addEventListener("change",function(dets){
//    device.textContent =`${dets.target.value} Device selected`;
   

// });


// approach
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }else{
//         h1.textContent = dets.key;
//     }
    
// });


// let btn = document.querySelector("#btn");
// let fileinp =document.querySelector("#fileinp");

// btn.addEventListener("click",function(dets){
//     fileinp.click();

// });

// fileinp.addEventListener("change",function(dets){
//    if(dets.target.files){
//      btn.textContent = dets.target.files[0].name;
//    }
   
// });


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit" , function(dets){
//   dets.preventDefault();
//   console.log(
//     inputs[0].value,
//     inputs[1].value,
//     inputs[2].value,
//     inputs[3].value,
//   )
// });


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// let main = document.querySelector("#main");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     card.appendChild(profile);
//     console.log(card);


//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent=inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent= inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent=inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);


//     main.appendChild(card);

// });


// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function() {
//     abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function() {
//     abcd.style.backgroundColor = "red";
// });
// let abcd =document.querySelector("#abcd");
  
// window.addEventListener("mousemove" , function(dets){
//     abcd.style.top =dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// });

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("click", function(dets){
//     console.log(dets);
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
// });

let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
   dets.preventDefault();
   if( nm.value.length <= 2){
     document.querySelector("#hide").style.display="initial";
   }
   
});
