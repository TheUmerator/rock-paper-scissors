// const rButton=document.querySelector('.rock');
// rButton.addEventListener('click',()=>console.log('rock'));

// const pButton=document.querySelector('.paper');
// pButton.addEventListener('click',()=>console.log('paper'));

// const sButton=document.querySelector('.scissors');
// sButton.addEventListener('click',()=>console.log('scissors'));

//cycle through buttons and select player choice
const playerButton=document.querySelectorAll('button');
playerButton.forEach(button=>{
    button.addEventListener('click',()=>
    {
        if(button.classList.contains('rock'))
        console.log('rock');
        else if(button.classList.contains('paper'))
        console.log('paper');
        if(button.classList.contains('scissors'))
        console.log('scissors');
    })

});