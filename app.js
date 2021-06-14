let clock = document.getElementById('clock');//use of let so the variable can have block scope
// Redeclaring a variable inside a block will not redeclare the variable outside the block. 

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)//show time every 1 second(1000 milliseconds)

