'use strict';

const hiddenMess = document.getElementById("hidden")
const testBtn = document.getElementById("testbutn")
const testBtn2 = document.getElementById("testbutn2")
const testBtn3 = document.getElementById("testbutn3")
const closeTestBtn = document.getElementById("closetestbutn")

function getMessage(){
    hiddenMess.style.display = "initial"
    console.log("Shows a message")
}

function closeMess(){
    hiddenMess.style.display = "none"
    console.log("Closes")
}

testBtn.addEventListener("click", getMessage)
testBtn2.addEventListener("click", getMessage)
testBtn3.addEventListener("click", getMessage)

closeTestBtn.addEventListener("click", closeMess)
