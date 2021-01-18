'use strict';

const hiddenMess = document.getElementById("hidden")
const hiddenMess2 = document.getElementById("hidden2")
const hiddenMess3 = document.getElementById("hidden3")

const testBtn = document.getElementById("testbutn")
const testBtn2 = document.getElementById("testbutn2")
const testBtn3 = document.getElementById("testbutn3")

const closeTestBtn = document.getElementById("closetestbutn")
const closeTestBtn2 = document.getElementById("closetestbutn2")
const closeTestBtn3 = document.getElementById("closetestbutn3")

function getMessage(){
        hiddenMess3.style.display = "none"
        hiddenMess2.style.display = "none"
        hiddenMess.style.display = "initial"
        console.log("Message 1 displayed")
}

function getMessage2(){
    hiddenMess3.style.display = "none"
    hiddenMess.style.display = "none"
    hiddenMess2.style.display = "initial"
    console.log("Message 2 displayed")
}
function getMessage3(){
    hiddenMess2.style.display = "none"
    hiddenMess.style.display = "none"
    hiddenMess3.style.display = "initial"
    console.log("Message 3 displayed")
}


function closeMess(){
    hiddenMess.style.display = "none"
    console.log("Mess 1 closed")
}

function closeMess2(){
    hiddenMess2.style.display = "none"
    console.log("Mess 2 closed")
}

function closeMess3(){
    hiddenMess3.style.display = "none"
    console.log("Mess 2 closed")
}



testBtn.addEventListener("click", getMessage)
testBtn2.addEventListener("click", getMessage2)
testBtn3.addEventListener("click", getMessage3)

closeTestBtn.addEventListener("click", closeMess)
closeTestBtn2.addEventListener("click", closeMess2)
closeTestBtn3.addEventListener("click", closeMess3)