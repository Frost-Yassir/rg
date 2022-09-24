function newItems(){
    alert('We will have new itmes soon')
}
function help(){
let userName = prompt("I'm your assitant what can I call you");
    prompt(`Hi ${userName} can you type your email so I can have contact with you`);
    prompt(`Ockay ${userName} how can I help you `)
    alert(' Noted I will answer you as soon as possible keep an eye on your email')
}
function services(){
    alert('We will have new services as soon as possible')
}

function popUp(){
                
    let divi = document.createElement('div')
    divi.innerText = "Sorry this service it's not available yet"
    divi.classList.add("divi-style")
    
     document.getElementById('box').appendChild(divi)
    

    let btn = document.createElement('button')
    btn.innerText = 'x'

    document.getElementById('box').appendChild(btn);;; 

    btn.classList.add('ok-but')


    btn.onclick = function buti(){  
     document.getElementById('box').removeChild(divi)
     document.getElementById('box').removeChild(btn);;;

    }

    document.getElementById('box').appendChild(btn);;;
    
}

function aboutUs(){
    let move = document.getElementById('divi')
if(move.style.top === '-590px'){
    move.style.top = '200px'
}
else {
    move.style.top = '-590px'
}
}





function itemView2(){
    let move = document.getElementById('item-view-2')
if(move.style.left === '-700px'){
    move.style.left = '400px'
}
else {
    move.style.left = '-700px'
}
}




// function moveUp(){
//     let move = document.getElementById('bigi')
// if(move.style.top === '-590px'){
//     move.style.top = '200px'
    
// }
// else {
//     move.style.top = '-590px'
    
// }
// }




function sideBar(){
    let move = document.getElementById('bar')
    let arrow = document.getElementById('ar')
if(move.style.left ==='-173px'){
    move.style.left = '-3px'
    arrow.style.left = '140px'
    
}
else {
    move.style.left = '-173px'
    arrow.style.left = '-25px'
   
}
}





// function sideBar(){
//     let side = document.getElementById('bar');

//     if( side.style.left === "-03px"){
//          side.style.left = "-200px"
//     }
//     else {
//         side.style.left = "-03px"
//     }
// }