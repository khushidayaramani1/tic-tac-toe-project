let bg_music=new Audio('music.mp3');
let game_over=new Audio('gameover.mp3');
let chance=new Audio('ting.mp3');
let boxes=document.querySelectorAll('.box');
let message=document.querySelector('#message');
let gif=document.querySelector('#gif');
let body=document.querySelector('#body');
let start=document.querySelector('#start');

let one=document.querySelector('#one');
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let four=document.querySelector('#four');
let five=document.querySelector('#five');
let six=document.querySelector('#six');
let seven=document.querySelector('#seven');
let eight=document.querySelector('#eight');
let nine=document.querySelector('#nine');

start.addEventListener('click',()=>{
    start.style='display:none';
})

body.addEventListener('click',()=>{
    bg_music.play();
})

// window.addEventListener('load',()=>{
//     console.log("now")
//     bg_music.play();
// })

let gameActive=true; 
let turn='X';
message.innerHTML=`${turn} has to play`
let count=0;

// bg_music.play();
function changeTurn(){
    if(turn==='X'){
        turn='O';
        message.innerHTML=`${turn} has to play`
        count++;
    }
    else{
        turn='X';
        message.innerHTML=`${turn} has to play`
        count++;
    }
}

function refresh(){
    boxes.forEach((elem)=>{
        elem.textContent='';
    })
    gameActive=true;
    count=0;
    turn='X';
    gif.style='display:none';
    alert('new game')
    message.innerHTML=`${turn} has to play`;   
}

function checkwin(){
    let winning=[
        [one,two,three],
        [four,five,six],
        [seven,eight,nine],
        [one,four,seven],
        [two,five,eight],
        [three,six,nine],
        [one,five,nine],
        [three,five,seven]
    ]
    for(let i=0;i<8;i++){
        let [a,b,c]=winning[i];
        first=a.textContent;
        second=b.textContent;
        third=c.textContent;
        if(first!=='' && second!=='' && third!==''){
            if(first===second && second===third){
                message.innerHTML=`${first} wins`;
                game_over.play();
                gameActive=false;
                gif.style='display:block';
                setTimeout(()=>{
                    refresh();
                },5000)
                return true;
            }
        }
    }
    if(count===9){
        gameActive=false;
        message.innerHTML="draw";
    }
    return false;
}


boxes.forEach((elem)=>{
    elem.addEventListener('click',()=>{
            chance.play();
            if(elem.textContent=="X" || elem.textContent=="O"){
                alert('already filled');
                return;
            }
            if(!gameActive){
                alert('play again');
                refresh();
                return;
            } 
            elem.innerHTML=turn;
            changeTurn();
            checkwin();
    })
})
 

 